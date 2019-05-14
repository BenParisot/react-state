import React from 'react';
import PropTypes from 'prop-types';

export default function ColorDisplay({ color }) {
  return (
    <div style={{ height:'100px', width:'100px', background:{ color } }}></div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};
