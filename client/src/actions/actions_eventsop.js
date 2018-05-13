
import { URL_API  } from '../config/config';
export const SET_EVENTSOP = 'SET_EVENTSOP';

export function setEventsOP(eventsop) {
  return {
    type: SET_EVENTSOP,
    eventsop
  }
}
 
export function fetchEventsOP(param) {
 
  return dispatch => {
    fetch(`http://localhost:3000/api/eventsop`)
      .then(res => res.json())
      .then(data => dispatch(setEventsOP(data)));
  }
}


