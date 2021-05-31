import axios from "axios"

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

export const listReceipts = () => async (dispatch) => {
  try {
    dispatch({ type: RECEIPT_LIST_REQUEST })

    const { data } = await axios.get("/api/receipts")

    dispatch({
      type: RECEIPT_LIST_SUCCESS,
      payload: data,
    })
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

export const addToFavourites = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/receipts/${id}`)

  dispatch({
    type: FAVOURITES_ADD_ITEM,
    payload: {
      ...data,
    },
  })

  localStorage.setItem("favouritesItems", JSON.stringify(getState().favourites.favouritesItems))
}

export const removeFromFavourites = (id) => (dispatch, getState) => {
  dispatch({
    type: FAVOURITES_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem("favouritesItems", JSON.stringify(getState().favourites.favouritesItems))
}
