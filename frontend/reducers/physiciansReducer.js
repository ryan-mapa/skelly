import { RECEIVE_PHYSICIANS } from "../actions/mainActions";

const physiciansReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHYSICIANS:
      return Object.assign({}, state, action.physicians)
    default:
      return state;
  }
}

export default physiciansReducer;