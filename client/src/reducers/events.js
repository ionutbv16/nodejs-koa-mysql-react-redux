import { SET_EVENTS  } from '../actions/actions_events';

export default function events(state = [], action = {}) {
  //console.log('action.events', action.events);
  switch(action.type) {
    
    case SET_EVENTS:
      //console.log('action.events.adunit', action.events);
      return action.events.adunit;
    default: return state;
  }
}
