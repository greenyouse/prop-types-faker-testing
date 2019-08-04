import React from 'react';
import PropTypes from 'prop-types';

// functional react component
export const Greetings = ({ name }) => <span>{`hello ${name}!`}</span>;


// make sure to set the propTypes
Greetings.propTypes = {
    name: PropTypes.string
}