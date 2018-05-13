import React from 'react';
import EventsADList from './EventsADList';

import { connect } from 'react-redux';
import { fetchEventsAD } from '../actions/actions_eventsad';
import  PropTypes from 'prop-types';


class EventsADPage extends React.Component {

  state = {
  }

  componentDidMount() {
    this.props.fetchEventsAD();

  }

  render() {
    console.log('EventsADPage this.props.events ',this.props.events );

    const noEventsAD = (
      <div className="ui card w100">
      <div className="image">
      </div>
      <div className="content">
      No EventsAD.  
      </div>
    </div>  
    )
    return (
      <div>
        <h1>Distinct events aggregated by day and by insertion_order, campaign, and per adunit</h1>
          {this.props.events.length > 0 ? <EventsADList events={this.props.events} />  : noEventsAD } 
      </div>
    );
  }
}

EventsADPage.propTypes = {
  events: PropTypes.array.isRequired
  
}

function mapStateToProps(state) {

  return {
      events: state.eventsad
  }
}

export default connect(mapStateToProps, { fetchEventsAD })(EventsADPage);
