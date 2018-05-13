
import { URL_API  } from '../config/config';
export const SET_EVENTSIO = 'SET_EVENTSIO';

export function setEventsIO(eventsio) {
  return {
    type: SET_EVENTSIO,
    eventsio
  }
}
 
export function fetchEventsIO(param) {
 
  return dispatch => {
    fetch(`http://localhost:3000/api/eventsio`)
      .then(res => res.json())
      .then(data => dispatch(setEventsIO(data)));
  }
}


