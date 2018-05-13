import React from 'react';
import EventsCACard from './EventsCACard';
import  PropTypes from 'prop-types';

export default function EventsCAList({ events }) {
  const emptyMessage = (
    <div>
    <p>No items added in collection </p>
    <p></p>
    </div>
  );
 console.log('events EventsCAList',events);
  const eventsList = (
    <div className="ui four cards">
      { events.map(event => <EventsCACard key={event.type} event={event} />) }
    </div>
  );

  return (
    <div>
      {events.length === 0 ? emptyMessage : eventsList}
    </div>
  );
}

EventsCAList.propTypes = {
  events: PropTypes.array.isRequired
  
}
