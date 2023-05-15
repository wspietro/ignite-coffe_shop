
import { produce } from 'immer'

export interface ActionType {
  type: 'traditional' | 'cold' | 'milk' | 'special' | 'alcohol'
}

export interface Params {
  'categories.traditional'?: boolean;
  'categories.cold'?: boolean;
  'categories.milk'?: boolean;
  'categories.special'?: boolean;
  'categories.alcohol'?: boolean;
}

export function productsParamsReducer(params: Params, action: ActionType) {
  switch (action.type) {
    case 'traditional':
      return produce(params, draft => { draft['categories.traditional'] = draft['categories.traditional'] ? undefined : true })
    case 'special':
      return produce(params, draft => { draft['categories.special'] = draft['categories.special'] ? undefined : true })
    case 'milk':
      return produce(params, draft => { draft['categories.milk'] = draft['categories.milk'] ? undefined : true })
    case 'alcohol':
      return produce(params, draft => { draft['categories.alcohol'] = draft['categories.alcohol'] ? undefined : true })
    case 'cold':
      return produce(params, draft => { draft['categories.cold'] = draft['categories.cold'] ? undefined : true })
    default:
      throw new Error();
  }
}