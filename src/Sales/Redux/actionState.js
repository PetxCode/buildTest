import {actionType} from "./actionType"

export const addToCart = (itemID) => {
  return{
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemID
    }
  }
}

export const removeItem = (itemID) => {
  return{
    type: actionType.REMOVE_ITEM,
    payload: {
      id: itemID
    }
  }
}

export const adjustQTY = (itemID, value) => {
  return{
    type: actionType.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

export const laodAllProduct = (item) => {
  return{
    type: actionType.LOAD_ALL_PRODUCT,
    payload: item
  }
}

export const loadSingleProduct = (item) => {
  return{
    type: actionType.LOAD_SINGLE_PRODUCT,
    payload: item
  }
}