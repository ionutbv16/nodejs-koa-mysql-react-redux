import { SET_EVENTSAD  } from '../actions/actions_eventsad';

export default function eventsad(state = [], action = {}) {
  switch(action.type) {
   
    case SET_EVENTSAD:
      return action.eventsad.adunit;
    default: return state;
  }
}
