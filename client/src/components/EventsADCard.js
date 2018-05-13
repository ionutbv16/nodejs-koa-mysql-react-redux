import React from 'react';
import { Link } from 'react-router-dom';
import  PropTypes from 'prop-types';

export default function EventsADCard({ event  }) {

  return (
    <div className="ui card">
      <div className="image">
         {event.type}
      </div>
      <div className="content">
        <div className="header">{event.type}</div>
        <div>Date: {!!event.date ? event.date.substring(0,10) : "" }</div>
        <div>Sum: {!!event.sum ? event.sum : "" }</div>
        <div>IO: {!!event.insertion_order ? event.insertion_order : "" }</div>
        <div>Campaign: {!!event.campaign ? event.campaign : "" }</div>
        <div>Adunit: {!!event.adunit ? event.adunit : "" }</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
       
         
        </div>
      </div>
    </div>
  );
}

EventsADCard.propTypes = {
  event: PropTypes.object.isRequired
  
}
