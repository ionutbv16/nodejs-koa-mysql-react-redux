import React from 'react';
import EventsOPCard from './EventsOPCard';
import  PropTypes from 'prop-types';

export default function EventsOPList({ events }) {
  const emptyMessage = (
    <div>
    <p>No items added in collection </p>
    <p></p>
    </div>
  );
 console.log('events EventsOPList',events);
  const eventsList = (
    <div className="ui four cards">
      { events.map(event => <EventsOPCard key={event.type} event={event} />) }
    </div>
  );

  return (
    <div>
      {events.length === 0 ? emptyMessage : eventsList}
    </div>
  );
}

EventsOPList.propTypes = {
  events: PropTypes.array.isRequired
  
}
