import React from 'react';
import EventsIOList from './EventsIOList';

import { connect } from 'react-redux';
import { fetchEventsIO } from '../actions/actions_eventsio';
import  PropTypes from 'prop-types';


class EventsIOPage extends React.Component {

  state = {
  }

  componentDidMount() {
    this.props.fetchEventsIO();

  }

  render() {
    console.log('EventsIOPage this.props.events ',this.props.events );

    const noEventsIO = (
      <div className="ui card w100">
      <div className="image">
      </div>
      <div className="content">
      No EventsIO.  
      </div>
    </div>  
    )
    return (
      <div>
        <h1>Distinct events aggregated by day and by insertion_order</h1>
          {this.props.events.length > 0 ? <EventsIOList events={this.props.events} />  : noEventsIO } 
      </div>
    );
  }
}

EventsIOPage.propTypes = {
  events: PropTypes.array.isRequired
  
}

function mapStateToProps(state) {

  return {
      events: state.eventsio
  }
}

export default connect(mapStateToProps, { fetchEventsIO })(EventsIOPage);
