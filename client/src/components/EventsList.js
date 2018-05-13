import React from 'react';
import EventsCard from './EventsCard';
import  PropTypes from 'prop-types';

export default function EventsList({ events }) {
  const emptyMessage = (
    <div>
    <p>No items added in collection </p>
    <p></p>
    </div>
  );
 console.log('events EventsList',events);
  const eventsList = (
    <div className="ui four cards">
      { events.map(event => <EventsCard key={event.type} event={event} />) }
    </div>
  );

  return (
    <div>
      {events.length === 0 ? emptyMessage : eventsList}
    </div>
  );
}

EventsList.propTypes = {
  events: PropTypes.array.isRequired
  
}
