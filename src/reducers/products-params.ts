
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
      const traditional = params["categories.traditional"] ? undefined : true
      return {
        ...params,
        ["categories.traditional"]: traditional
      }
    case 'special':
      const special = params["categories.special"] ? undefined : true
      return {
        ...params,
        ["categories.special"]: special
      }
    case 'milk':
      const milk = params["categories.milk"] ? undefined : true
      return {
        ...params,
        ["categories.milk"]: milk
      }
    case 'alcohol':
      const alcohol = params["categories.alcohol"] ? undefined : true
      return {
        ...params,
        ["categories.alcohol"]: alcohol
      }
    case 'cold':
      const cold = params["categories.cold"] ? undefined : true
      return {
        ...params,
        ["categories.cold"]: cold
      }
    default:
      throw new Error();
  }
}