import React from 'react';
import EventsList from './EventsList';

import { connect } from 'react-redux';
import { fetchEvents } from '../actions/actions_events';
import  PropTypes from 'prop-types';


class EventsPage extends React.Component {

  state = {
  }

  componentDidMount() {
    this.props.fetchEvents();

  }

  render() {
    console.log('EventsPage this.props.events ',this.props.events );

    const noEvents = (
      <div className="ui card w100">
      <div className="image">
       
      </div>
      <div className="content">
      No Events.  
      </div>
    </div>  
    )
    return (
      <div>
        <h1>Distinct events in the table report aggregated by day</h1>
          {this.props.events.length > 0 ? <EventsList events={this.props.events} />  : noEvents } 
      </div>
    );
  }
}

EventsPage.propTypes = {
  events: PropTypes.array.isRequired
  
}

function mapStateToProps(state) {

  return {
      events: state.events
  }
}

export default connect(mapStateToProps, { fetchEvents })(EventsPage);
