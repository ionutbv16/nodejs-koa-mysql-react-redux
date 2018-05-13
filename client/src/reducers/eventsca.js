import { SET_EVENTSCA  } from '../actions/actions_eventsca';

export default function eventsca(state = [], action = {}) {
  switch(action.type) {
   
    case SET_EVENTSCA:
      return action.eventsca.adunit;
    default: return state;
  }
}
