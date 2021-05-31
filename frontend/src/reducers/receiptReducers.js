import {
  RECEIPT_LIST_REQUEST,
  RECEIPT_LIST_SUCCESS,
  RECEIPT_LIST_FAIL,
  RECEIPT_DETAILS_REQUEST,
  RECEIPT_DETAILS_SUCCESS,
  RECEIPT_DETAILS_FAIL,
  FAVOURITES_ADD_ITEM,
  FAVOURITES_REMOVE_ITEM,
} from "../constants/receiptConstants"

export const receiptListReducer = (state = { receipts: [] }, action) => {
  switch (action.type) {
    case RECEIPT_LIST_REQUEST:
      return { loading: true, receipts: [] }
    case RECEIPT_LIST_SUCCESS:
      return { loading: false, receipts: action.payload }
    case RECEIPT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const receiptDetailsReducer = (
  state = {
    receipt: {
      composition: [],
      composition_inter: [],
    },
  },
  action
) => {
  switch (action.type) {
    case RECEIPT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case RECEIPT_DETAILS_SUCCESS:
      return { loading: false, receipt: action.payload }
    case RECEIPT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const favouritesReducer = (state = { favouritesItems: [] }, action) => {
  switch (action.type) {
    case FAVOURITES_ADD_ITEM:
      const item = action.payload

      const existItem = state.favouritesItems.find((x) => x._id === item._id)

      if (existItem) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          favouritesItems: [...state.favouritesItems, item],
        }
      }
    case FAVOURITES_REMOVE_ITEM:
      return {
        ...state,
        favouritesItems: state.favouritesItems.filter((x) => x._id !== action.payload),
      }
    default:
      return state
  }
}
