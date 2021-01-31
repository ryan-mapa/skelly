import * as ApiUtil from './apiUtils';

export const RECEIVE_PHYSICIANS = "RECEIVE_PHYSICIANS";
export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";

export const receivePhysicians = (physicians) => {
  return {
    type: RECEIVE_PHYSICIANS,
    physicians
  }
}

export const receiveAppointments = (appointments) => {
  return {
    type: RECEIVE_APPOINTMENTS,
    appointments
  }
}

export const fetchPhysicians = () => dispatch => {
  return ApiUtil.fetchPhysicians().then(
    docs => dispatch(receivePhysicians(docs)));
}

export const fetchAppointments = (physId) => dispatch => {
  return ApiUtil.fetchAppointments(physId).then(
    appts => dispatch(receiveAppointments(appts)));
}
