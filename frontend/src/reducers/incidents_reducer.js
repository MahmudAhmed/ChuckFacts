import { RECEIVE_INCIDENTS, RECEIVE_INCIDENT} from "../actions/incident_action";


export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_INCIDENTS:
      const incidents = {};
      action.incidents.forEach( incident => {
        incidents[incident._id] = incident;
      })
      return Object.assign({}, incidents);
    case RECEIVE_INCIDENT:
      return Object.assign({}, state, { [action.incident._id]: action.incident })
    default:
      return state;
  }
}
