import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  receiptListReducer,
} from "./reducers/receiptReducers"

// const tabsItemsFromStorage = localStorage.getItem("tabsItems")
//   ? JSON.parse(localStorage.getItem("tabsItems"))
//   : []

const initialState = {
  // tabs: { tabsItems: tabsItemsFromStorage },
  // spellTabs: { spellTabsItems: spellTabsItemsFromStorage },
  // itemTabs: { itemTabsItems: itemTabsItemsFromStorage },
  // userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  receiptListReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
