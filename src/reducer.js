import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}
export default reducer
