import { actionBuilderFactory } from 'common/actions';

import { FeatureTable } from 'idly-common/lib/osm/feature';
import { EntityId } from 'idly-common/lib/osm/structures';
import { Tree } from 'idly-graph/lib/graph/Tree';

export enum CoreActions {
  SELECT_ENTITIES = 'Core.SELECT_ENTITIES',
  SELECT_COMMIT = 'Core.SELECT_COMMIT'
}

const builder = actionBuilderFactory<CoreActionType>();

export type CoreActionType = SelectEntitiesAction | SelectCommitAction;

/**
 * @DESC initiates the async selection of entities
 *  pulls in data from worker thread.
 */
export interface SelectEntitiesAction {
  type: CoreActions.SELECT_ENTITIES;
  entityIds: EntityId[];
}
export const selectEntitiesAction = builder<SelectEntitiesAction>(
  CoreActions.SELECT_ENTITIES
)('entityIds');

/**
 * @DESC finalizes the selection of entities and
 *  saves them in the redux store
 */
export interface SelectCommitAction {
  type: CoreActions.SELECT_COMMIT;
  tree: Tree;
  featureTable: FeatureTable<any, any>;
}
export const selectCommitAction = builder<SelectCommitAction>(
  CoreActions.SELECT_COMMIT
)('tree', 'featureTable');
