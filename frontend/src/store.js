import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  receiptListReducer,
  receiptDetailsReducer,
} from "./reducers/receiptReducers"


const reducer = combineReducers({
  receiptList: receiptListReducer,
  receiptDetails: receiptDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
