import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  receiptListReducer,
  receiptDetailsReducer,
  favouritesReducer,
} from "./reducers/receiptReducers"


const reducer = combineReducers({
  receiptList: receiptListReducer,
  receiptDetails: receiptDetailsReducer,
  favourites: favouritesReducer,
})

const favouritesItemsFromStorage = localStorage.getItem("favouritesItems")
  ? JSON.parse(localStorage.getItem("favouritesItems"))
  : []

const initialState = {
  favourites: { favouritesItems: favouritesItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
