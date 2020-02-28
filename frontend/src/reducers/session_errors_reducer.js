import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from "../actions/session_actions";

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.values(action.errors);
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
