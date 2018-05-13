import React from 'react';
import { Link } from 'react-router-dom';
import  PropTypes from 'prop-types';

export default function EventsCard({ event  }) {

  return (
    <div className="ui card">
      <div className="image">
         {event.type}
      </div>
      <div className="content">
        <div className="header">{event.type}</div>
        <div>Date: {!!event.date ? event.date.substring(0,10) : "" }</div>
        <div>Sum: {!!event.sum ? event.sum : "" }</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
       
         
        </div>
      </div>
    </div>
  );
}

EventsCard.propTypes = {
  event: PropTypes.object.isRequired
  
}
