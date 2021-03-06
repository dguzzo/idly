import { fromJS, Set as $Set } from 'immutable';

import { PLUGIN_NAME } from 'map/style';
import { ILayerSpec, LayerSpec } from 'map/utils/layerFactory';
import { simpleLayerHOC } from 'map/utils/simpleLayer.hoc';

/**
 * @REVISIT fix this
 */

interface IPropsType {
  sourceName: string;
  entities: $Set<any>;
  updateLayer: (layerSpec: ILayerSpec) => void;
}

interface IStatesType {
  layerSpec: ILayerSpec;
}

const displayName = (sourceName: string) => sourceName + 'AreaLabelsLayer';

export const AreaLabelsLayer = (sourceName: string) =>
  simpleLayerHOC({
    displayName: displayName(sourceName),
    selectable: false,
    layer: LayerSpec({
      priority: 5,
      id: displayName(sourceName),
      type: 'symbol',
      source: sourceName,
      layout: {
        'symbol-placement': 'point',
        'icon-image': `{${PLUGIN_NAME}--icon}-12`,
        'icon-allow-overlap': true,
        'icon-offset': [0, 2],
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-field': `{${PLUGIN_NAME}--name}`, // part 2 of this is how to do it
        'text-size': 9,
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.05,
        'text-optional': true,
        'text-allow-overlap': false
      },
      paint: {
        'text-halo-color': '#ffffff',
        'text-halo-width': 1.5,
        'text-halo-blur': 0.5
      },
      filter: fromJS(['all', ['==', '$type', 'Polygon']])
    })
  });
