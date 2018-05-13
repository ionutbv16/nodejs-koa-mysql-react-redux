import { combineReducers } from 'redux';
import events from './reducers/events';
import eventsad from './reducers/eventsad';
import eventsca from './reducers/eventsca';
import eventsio from './reducers/eventsio';
import eventsop from './reducers/eventsop';

export default combineReducers({
    events,eventsad,eventsca,eventsio,eventsop
});
