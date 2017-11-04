import {
  bind as _bind,
  forEach as _forEach,
  reject as _reject,
  uniq as _uniq
} from 'lodash';

import { presetsData } from '../index';
import { presetCategory } from './category';
import { presetCollection } from './collection';
import { presetField } from './presetField';
import { presetPreset } from './presetPreset';

// export { presetCategory };
// export { presetCollection };
// export { presetField };
// export { presetPreset };
function stubIsOnAddressLine(id) {
  if (id === 'n-2') return false;
  if (id === 'n-3') return true;
  throw new Error('stubIsOnAddressLine failed' + ' ' + id);
}

export function presetIndex(data = presetsData.presets) {
  // a presetCollection with methods for
  // loading new data and returning defaults

  var all = presetCollection([]),
    defaults = { area: all, line: all, point: all, vertex: all, relation: all },
    fields = {},
    universalFields = [],
    recent = presetCollection([]);

  // Index of presets by (geometry, tag key).
  var index = {
    point: {},
    vertex: {},
    line: {},
    area: {},
    relation: {}
  };
  //changes
  all.match = function(tags, geometry) {
    var address;

    var geometryMatches = index[geometry],
      best = -1,
      match;
    for (var k in tags) {
      // If any part of an address is present,
      // allow fallback to "Address" preset - #4353
      if (k.match(/^addr:/) !== null && geometryMatches['addr:*']) {
        address = geometryMatches['addr:*'][0];
      }

      var keyMatches = geometryMatches[k];
      if (!keyMatches) continue;

      for (var i = 0; i < keyMatches.length; i++) {
        var score = keyMatches[i].matchScore(tags);
        if (score > best) {
          best = score;
          match = keyMatches[i];
        }
      }
    }

    if (address && (!match || match.isFallback())) {
      match = address;
    }

    return match || all.item(geometry);
  };

  // Because of the open nature of tagging, iD will never have a complete
  // list of tags used in OSM, so we want it to have logic like "assume
  // that a closed way with an amenity tag is an area, unless the amenity
  // is one of these specific types". This function computes a structure
  // that allows testing of such conditions, based on the presets designated
  // as as supporting (or not supporting) the area geometry.
  //
  // The returned object L is a whitelist/blacklist of tags. A closed way
  // with a tag (k, v) is considered to be an area if `k in L && !(v in L[k])`
  // (see `Way#isArea()`). In other words, the keys of L form the whitelist,
  // and the subkeys form the blacklist.
  all.areaKeys = function() {
    var areaKeys = {},
      ignore = ['barrier', 'highway', 'footway', 'railway', 'type'], // probably a line..
      presets = _reject(all.collection, 'suggestion');

    // whitelist
    presets.forEach(function(d) {
      for (var key in d.tags) break;
      if (!key) return;
      if (ignore.indexOf(key) !== -1) return;

      if (d.geometry.indexOf('area') !== -1) {
        // probably an area..
        areaKeys[key] = areaKeys[key] || {};
      }
    });

    // blacklist
    presets.forEach(function(d) {
      for (var key in d.tags) break;
      if (!key) return;
      if (ignore.indexOf(key) !== -1) return;

      var value = d.tags[key];
      if (
        key in areaKeys && // probably an area...
        d.geometry.indexOf('line') !== -1 && // but sometimes a line
        value !== '*'
      ) {
        areaKeys[key][value] = true;
      }
    });

    return areaKeys;
  };

  all.init = function() {
    all.collection = [];
    recent.collection = [];
    fields = {};
    universalFields = [];
    index = { point: {}, vertex: {}, line: {}, area: {}, relation: {} };

    if (data.fields) {
      _forEach(data.fields, function(d, id) {
        fields[id] = presetField(id, d);
        if (d.universal) universalFields.push(fields[id]);
      });
    }

    if (data.presets) {
      _forEach(data.presets, function(d, id) {
        all.collection.push(presetPreset(id, d, fields));
      });
    }

    if (data.categories) {
      _forEach(data.categories, function(d, id) {
        all.collection.push(presetCategory(id, d, all));
      });
    }

    if (data.defaults) {
      var getItem = _bind(all.item, all);
      defaults = {
        area: presetCollection(data.defaults.area.map(getItem)),
        line: presetCollection(data.defaults.line.map(getItem)),
        point: presetCollection(data.defaults.point.map(getItem)),
        vertex: presetCollection(data.defaults.vertex.map(getItem)),
        relation: presetCollection(data.defaults.relation.map(getItem))
      };
    }

    for (var i = 0; i < all.collection.length; i++) {
      var preset = all.collection[i],
        geometry = preset.geometry;

      for (var j = 0; j < geometry.length; j++) {
        var g = index[geometry[j]];
        for (var k in preset.tags) {
          (g[k] = g[k] || []).push(preset);
        }
      }
    }
    return all;
  };

  all.field = function(id) {
    return fields[id];
  };

  all.universal = function() {
    return universalFields;
  };

  all.defaults = function(geometry, n) {
    var rec = recent.matchGeometry(geometry).collection.slice(0, 4),
      def = _uniq(rec.concat(defaults[geometry].collection)).slice(0, n - 1);
    return presetCollection(_uniq(rec.concat(def).concat(all.item(geometry))));
  };

  all.choose = function(preset) {
    if (!preset.isFallback()) {
      recent = presetCollection(_uniq([preset].concat(recent.collection)));
    }
    return all;
  };

  return all;
}
