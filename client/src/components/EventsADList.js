import React from 'react';
import EventsADCard from './EventsADCard';
import  PropTypes from 'prop-types';

export default function EventsADList({ events }) {
  const emptyMessage = (
    <div>
    <p>No items added in collection </p>
    <p></p>
    </div>
  );
 console.log('events EventsADList',events);
  const eventsList = (
    <div className="ui four cards">
      { events.map(event => <EventsADCard key={event.type} event={event} />) }
    </div>
  );

  return (
    <div>
      {events.length === 0 ? emptyMessage : eventsList}
    </div>
  );
}

EventsADList.propTypes = {
  events: PropTypes.array.isRequired
  
}
