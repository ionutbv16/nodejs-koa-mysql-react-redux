import React from 'react';
import EventsCAList from './EventsCAList';

import { connect } from 'react-redux';
import { fetchEventsCA } from '../actions/actions_eventsca';
import  PropTypes from 'prop-types';


class EventsCAPage extends React.Component {

  state = {
  }

  componentDidMount() {
    this.props.fetchEventsCA();

  }

  render() {
    console.log('EventsCAPage this.props.events ',this.props.events );

    const noEventsCA = (
      <div className="ui card w100">
      <div className="image">
      </div>
      <div className="content">
      No EventsCA.  
      </div>
    </div>  
    )
    return (
      <div>
        <h1>Distinct events aggregated by day and by insertion_order, and per campaign</h1>
          {this.props.events.length > 0 ? <EventsCAList events={this.props.events} />  : noEventsCA } 
      </div>
    );
  }
}

EventsCAPage.propTypes = {
  events: PropTypes.array.isRequired
  
}

function mapStateToProps(state) {

  return {
      events: state.eventsca
  }
}

export default connect(mapStateToProps, { fetchEventsCA })(EventsCAPage);
