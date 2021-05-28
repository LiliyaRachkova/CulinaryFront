import {
  RECEIPT_LIST_REQUEST,
  RECEIPT_LIST_SUCCESS,
  RECEIPT_LIST_FAIL,
  RECEIPT_DETAILS_REQUEST,
  RECEIPT_DETAILS_SUCCESS,
  RECEIPT_DETAILS_FAIL,
} from "../constants/receiptConstants"

export const receiptListReducer = (state = { receipts: [] }, action) => {
  switch (action.type) {
    case RECEIPT_LIST_REQUEST:
      return { loading: true, receipts: [] }
    case RECEIPT_LIST_SUCCESS:
      console.log(action.payload[0])
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
