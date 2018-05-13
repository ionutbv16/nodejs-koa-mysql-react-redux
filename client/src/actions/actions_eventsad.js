
import { URL_API  } from '../config/config';
export const SET_EVENTSAD = 'SET_EVENTSAD';

export function setEventsAD(eventsad) {
  return {
    type: SET_EVENTSAD,
    eventsad
  }
}
 
export function fetchEventsAD(param) {
 
  return dispatch => {
    fetch(`http://localhost:3000/api/eventsad`)
      .then(res => res.json())
      .then(data => dispatch(setEventsAD(data)));
  }
}


