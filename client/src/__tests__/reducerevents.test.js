import { shallow } from 'enzyme';

import ADD_EVENT from '../actions_events.js';
import events from '../reducers/events.js';

//console.log('ADD_EVENT',ADD_EVENT);

test('test events reducer', () => {
    const add_event = {type: 'ADD_EVENT', event: {"_id":"590324801aa30500043610fb","name":"CMA Missouri Womens Conference 2018","description":"Stay tuned...more details to","id":"434242","start_time":"231","end_time":"322","__v":0} };
    const res_add_event = events({}, add_event);
    expect(res_add_event).toEqual([{"_id":"590324801aa30500043610fb","name":"CMA Missouri Womens Conference 2018","description":"Stay tuned...more details to","id":"434242","start_time":"231","end_time":"322","__v":0}]);
 
});