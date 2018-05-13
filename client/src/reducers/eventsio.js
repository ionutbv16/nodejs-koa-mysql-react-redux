import { SET_EVENTSIO  } from '../actions/actions_eventsio';

export default function eventsio(state = [], action = {}) {
  switch(action.type) {
   
    case SET_EVENTSIO:
      return action.eventsio.adunit;
    default: return state;
  }
}
