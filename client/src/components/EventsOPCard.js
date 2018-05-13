import React from 'react';
import { Link } from 'react-router-dom';
import  PropTypes from 'prop-types';

export default function EventsOPCard({ event  }) {

  return (
    <div className="ui card">
      <div className="image">
         {event.typerecord}
      </div>
      <div className="content">
        <div className="header">{event.typerecord}</div>
        <div>Date: {!!event.daterecord ? event.daterecord.substring(0,15) : "" }</div>
        <div>Sum: {!!event.sum ? event.sum : "" }</div>
        <div>IO: {!!event.ordername ? event.ordername : "" }</div>
       
      </div>
      <div className="extra content">
        <div className="ui two buttons">
       
         
        </div>
      </div>
    </div>
  );
}

EventsOPCard.propTypes = {
  event: PropTypes.object.isRequired
  
}
