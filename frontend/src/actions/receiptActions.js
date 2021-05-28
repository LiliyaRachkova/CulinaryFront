import axios from "axios"

import {
  RECEIPT_LIST_REQUEST,
  RECEIPT_LIST_SUCCESS,
  RECEIPT_LIST_FAIL,
  RECEIPT_DETAILS_REQUEST,
  RECEIPT_DETAILS_SUCCESS,
  RECEIPT_DETAILS_FAIL,
} from "../constants/receiptConstants"

export const listReceipts = () => async (dispatch) => {
  try {
    dispatch({ type: RECEIPT_LIST_REQUEST })

    const { data } = await axios.get("/api/receipts")

    // dispatch({
    //   type: RECEIPT_LIST_SUCCESS,
    //   payload: data,
    // })
  } catch (error) {
    dispatch({
      type: RECEIPT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listReceiptsDetails = (id) => async (dispatch) => {
  try {
    console.log(234)
    dispatch({ type: RECEIPT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/receipts/${id}`)

    dispatch({
      type: RECEIPT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RECEIPT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

