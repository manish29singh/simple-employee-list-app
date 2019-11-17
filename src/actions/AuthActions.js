import * as actionTypes from "../actionTypes"

export function onLogin(user) {
  return {
    type: actionTypes.USER_LOGIN,
    user
  }
}

export function onLogout() {
  return {
    type: actionTypes.USER_LOGOUT
  }
}
