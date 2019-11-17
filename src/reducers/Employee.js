import { EMPLOYEES } from "../seed"
const initialState = {
  data: [...EMPLOYEES]
}

export default (state = initialState, action) => {
  return state
}
