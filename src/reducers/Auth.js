import * as actionTypes from "../actionTypes"
const initialState = {
  user: localStorage.getItem("user")
}

export default function userAuth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return { ...state, user: action.user }
    case actionTypes.USER_LOGOUT:
      return { ...state, user: undefined }
    default:
      return state
  }
}
