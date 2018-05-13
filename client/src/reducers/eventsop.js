import { SET_EVENTSOP  } from '../actions/actions_eventsop';

export default function eventsop(state = [], action = {}) {
  switch(action.type) {
   
    case SET_EVENTSOP:
      return action.eventsop.adunit;
    default: return state;
  }
}
