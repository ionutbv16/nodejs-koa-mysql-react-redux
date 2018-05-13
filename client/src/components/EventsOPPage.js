import React from 'react';
import EventsOPList from './EventsOPList';

import { connect } from 'react-redux';
import { fetchEventsOP } from '../actions/actions_eventsop';
import  PropTypes from 'prop-types';


class EventsOPPage extends React.Component {

  state = {
  }

  componentDidMount() {
    this.props.fetchEventsOP();

  }

  render() {
    console.log('EventsOPPage this.props.events ',this.props.events );

    const noEventsOP = (
      <div className="ui card w100">
      <div className="image">
      </div>
      <div className="content">
      No EventsOP.  
      </div>
    </div>  
    )
    return (
      <div>
        <h1>Distinct events optimized from other table</h1>
          {this.props.events.length > 0 ? <EventsOPList events={this.props.events} />  : noEventsOP } 
      </div>
    );
  }
}

EventsOPPage.propTypes = {
  events: PropTypes.array.isRequired
  
}

function mapStateToProps(state) {

  return {
      events: state.eventsop
  }
}

export default connect(mapStateToProps, { fetchEventsOP })(EventsOPPage);
