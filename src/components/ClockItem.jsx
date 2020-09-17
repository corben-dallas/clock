import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from 'react-clock';

import 'react-clock/dist/Clock.css';

const parseHoursToMilliseconds = (hour) => {
  return  hour * 3600 * 1000;
}

export default class ClockItem extends Component {
  static propTypes = {
    clockName: PropTypes.string,
    id: PropTypes.string,
    timeZone: PropTypes.number,
    onClockRemove: PropTypes.func,
  }

  static defaulProps = {
    clockName: '',
    id: '',
    timeZone: 0,
    onClockRemove: () => {},
  }

  state = {
    time: new Date(0),
  }

  componentDidMount() {
    this.interval = setInterval(this.getTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTime = () => {
    const { timeZone } = this.props;
    const currentTime = new Date().getTime();
    const timeZoneMillesecond = parseHoursToMilliseconds(timeZone);
    let result = currentTime + (timeZoneMillesecond - (3 * 3600 * 1000))
    
    this.setState({
      time: new Date(result),
    });
  }

  render() {
    const { time } = this.state;
    const { clockName, id, onClockRemove } = this.props;

    return (
      <div className="clock">
        <div className="clock__content">
          <p>{clockName}</p>
          <span className="material-icons" onClick={() => onClockRemove(id)}>clear</span>
        </div>
        <Clock
          value={time}
          renderNumbers
        />
      </div>
    )
  }
}
