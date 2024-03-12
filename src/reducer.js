import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'

const reducer = (state, action) => {
  let newCart = null
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() }

    case REMOVE:
      newCart = new Map(state.cart)
      newCart.delete(action.payload.id)
      return { ...state, cart: newCart }

    case INCREASE:
      newCart = new Map(state.cart)
      const itemId = action.payload.id
      const item = newCart.get(itemId)
      const newItem = { ...item, amount: item.amount + 1 }
      newCart.set(itemId, newItem)
      return { ...state, cart: newCart }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}
export default reducer
