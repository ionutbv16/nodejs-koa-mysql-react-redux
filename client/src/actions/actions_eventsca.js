
import { URL_API  } from '../config/config';
export const SET_EVENTSCA = 'SET_EVENTSCA';

export function setEventsCA(eventsca) {
  return {
    type: SET_EVENTSCA,
    eventsca
  }
}
 
export function fetchEventsCA(param) {
 
  return dispatch => {
    fetch(`http://localhost:3000/api/eventsca`)
      .then(res => res.json())
      .then(data => dispatch(setEventsCA(data)));
  }
}


