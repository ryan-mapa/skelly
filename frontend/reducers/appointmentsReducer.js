import { RECEIVE_APPOINTMENTS } from "../actions/mainActions";

const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_APPOINTMENTS:
      return Object.assign({}, state, action.payload.appointments)
    default:
      return state;
  }
}

export default appointmentsReducer;