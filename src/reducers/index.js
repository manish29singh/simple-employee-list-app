import { combineReducers } from "redux"
import userAuth from "./Auth"
import employees from "./Employee"

export default combineReducers({
  userAuth,
  employees
})
