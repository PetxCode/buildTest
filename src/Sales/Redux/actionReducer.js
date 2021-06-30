import { actionType } from "./actionType"

const initState = {
  prod: [],
  cart: [],
  single: []
}

export const actionReducer = (state=initState, {type, payload}) => {
  switch (type) {
    
    case actionType.ADD_TO_CART:
      const item = state.prod.find(el => el.id === el.payload )
      const inCart = state.cart.find(item => item.id === item.payload ? true : false)
      return{
        ...state,
        cart: inCart ? state.cart.map(item => item.id === item.payload ? {...item, qty: item.qty + 1}: item ) : [...state.cart, {...item, qty: 1}]
      }

    case actionType.REMOVE_ITEM:
      return{
        ...state,
        cart: state.cart.filter(item => item.id !== item.payload)
      }

    case actionType.ADJUST_QTY:
      return{
        ...state,
        cart: state.cart.map(item => item.id === item.payload ? {...item, qty: +item.payload} : item )
      }

    case actionType.LOAD_ALL_PRODUCT:
      return{
        ...state,
        prod: payload 

      }

    case actionType.LOAD_SINGLE_PRODUCT:
      return{
        ...state,
        single: payload
      }



    default:
      return state
  }
}