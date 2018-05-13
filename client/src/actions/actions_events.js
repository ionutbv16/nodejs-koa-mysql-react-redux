
import { URL_API } from '../config/config';
export const SET_EVENTS = 'SET_EVENTS';

export function setEvents(events) {
  //console.log('events', events);
  return {
    type: SET_EVENTS,
    events
  }
}
 
export function fetchEvents() {
  //console.log('fetchEvents' );
  return dispatch => {
    fetch(`http://localhost:3000/api/events`)
      .then(res => res.json())
      .then(data => dispatch(setEvents(data)));
  }
}


