import React from 'react';
import EventsIOCard from './EventsIOCard';
import  PropTypes from 'prop-types';

export default function EventsIOList({ events }) {
  const emptyMessage = (
    <div>
    <p>No items added in collection </p>
    <p></p>
    </div>
  );
 console.log('events EventsIOList',events);
  const eventsList = (
    <div className="ui four cards">
      { events.map(event => <EventsIOCard key={event.type} event={event} />) }
    </div>
  );

  return (
    <div>
      {events.length === 0 ? emptyMessage : eventsList}
    </div>
  );
}

EventsIOList.propTypes = {
  events: PropTypes.array.isRequired
  
}
