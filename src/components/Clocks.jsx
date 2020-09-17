import React from 'react';
import PropTypes from 'prop-types';

import ClockItem from './ClockItem'

const Clocks = ({ time, onClockRemove }) => {
  if (!time.length) return null;
  return (
    <div className="clocks">
      {
        time.map(item => <ClockItem {...item} key={item.id} onClockRemove={onClockRemove} />)
      }
    </div>
  )
}

Clocks.propTypes = {
  time: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  onClockRemove: PropTypes.func,
}

Clocks.defaultProps = {
  time: [],
  onClockRemove: () => {},
}

export default Clocks;
