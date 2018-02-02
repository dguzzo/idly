import { tagsFactory } from '../osm/entityFactory/tagsFactory';

import { tagClasses } from './tagClasses';

const tagger = (tags: { [index: string]: string }) =>
  tagClasses(tagsFactory(tags));

describe('iD.svgTagClasses', () => {
  it('adds no classes to elements whose datum has no tags', () => {
    expect(tagger({})).toBe('');
  });

  it('adds classes for primary tag key and key-value', () => {
    expect(tagger({ highway: 'primary' })).toBe(
      'tag-highway tag-highway-primary',
    );
  });

  it('adds only one primary tag', () => {
    expect(tagger({ highway: 'primary', railway: 'rail' })).toBe(
      'tag-highway tag-highway-primary',
    );
  });

  it('orders primary tags', () => {
    expect(tagger({ railway: 'rail', highway: 'primary' })).toBe(
      'tag-highway tag-highway-primary',
    );
  });

  it('adds status tag when status in primary value (`railway=abandoned`)', () => {
    expect(tagger({ railway: 'abandoned' })).toBe(
      'tag-railway tag-status tag-status-abandoned',
    );
  });

  it('adds status tag when status in key and value matches "yes" (railway=rail + abandoned=yes)', () => {
    expect(tagger({ railway: 'rail', abandoned: 'yes' })).toBe(
      'tag-railway tag-railway-rail tag-status tag-status-abandoned',
    );
  });

  it('adds status tag when status in key and value matches primary (railway=rail + abandoned=railway)', () => {
    expect(tagger({ railway: 'rail', abandoned: 'railway' })).toBe(
      'tag-railway tag-railway-rail tag-status tag-status-abandoned',
    );
  });

  it('adds primary and status tag when status in key and no primary (abandoned=railway)', () => {
    expect(tagger({ abandoned: 'railway' })).toBe(
      'tag-railway tag-status tag-status-abandoned',
    );
  });

  it('does not add status tag for different primary tag (highway=path + abandoned=railway)', () => {
    expect(tagger({ highway: 'path', abandoned: 'railway' })).toBe(
      'tag-highway tag-highway-path',
    );
  });

  it('adds secondary tags', () => {
    expect(tagger({ highway: 'primary', bridge: 'yes' })).toBe(
      'tag-highway tag-highway-primary tag-bridge tag-bridge-yes',
    );
  });

  it('adds no bridge=no tags', () => {
    expect(tagger({ bridge: 'no' })).toBe('');
  });

  it('adds tag-unpaved for highway=track with no surface tagging', () => {
    expect(tagger({ highway: 'track' })).toMatch(/tag-unpaved/);
  });

  it('does not add tag-unpaved for highway=track with explicit paved surface tagging', () => {
    expect(tagger({ highway: 'track', surface: 'asphalt' })).not.toMatch(
      /tag-unpaved/,
    );
    expect(tagger({ highway: 'track', tracktype: 'grade1' })).not.toMatch(
      /tag-unpaved/,
    );
  });

  it('adds tag-unpaved for highway=track with explicit unpaved surface tagging', () => {
    expect(tagger({ highway: 'track', surface: 'dirt' })).toMatch(
      'tag-unpaved',
    );
    expect(tagger({ highway: 'track', tracktype: 'grade3' })).toMatch(
      'tag-unpaved',
    );
  });

  it('does not add tag-unpaved for other highway types with no surface tagging', () => {
    expect(tagger({ highway: 'tertiary' })).not.toMatch('tag-unpaved');
    expect(tagger({ highway: 'foo' })).not.toMatch('tag-unpaved');
  });

  it('does not add tag-unpaved for other highway types with explicit paved surface tagging', () => {
    expect(tagger({ highway: 'tertiary', surface: 'asphalt' })).not.toMatch(
      'tag-unpaved',
    );
    expect(tagger({ highway: 'foo', tracktype: 'grade1' })).not.toMatch(
      'tag-unpaved',
    );
  });

  it('adds tag-unpaved for other highway types with explicit unpaved surface tagging', () => {
    expect(tagger({ highway: 'tertiary', surface: 'dirt' })).toMatch(
      'tag-unpaved',
    );
    expect(tagger({ highway: 'foo', tracktype: 'grade3' })).toMatch(
      'tag-unpaved',
    );
  });

  it('does not add tag-unpaved for non-highways', () => {
    expect(tagger({ railway: 'abandoned', surface: 'gravel' })).not.toMatch(
      'tag-unpaved',
    );
    expect(tagger({ amenity: 'parking', surface: 'dirt' })).not.toMatch(
      'tag-unpaved',
    );
  });

  it('adds tags based on the result of the `tags` accessor', () => {
    expect(tagger({ highway: 'primary' })).toBe(
      'tag-highway tag-highway-primary',
    );
  });
});
