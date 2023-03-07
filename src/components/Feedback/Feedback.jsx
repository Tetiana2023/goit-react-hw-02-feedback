import React from 'react';
import PropTypes from 'prop-types';

export const Feedback = ({ handleIncrementGood, handleIncrementNeutral, handleIncrementBad}) => {
    return (
        <>
        <div>
          <button onClick={handleIncrementGood}>
            Good
          </button>
          <button onClick={handleIncrementNeutral}>
            Neutral
          </button>
          <button onClick={handleIncrementBad}>
            Bad
          </button>
        </div>
        </>
    )
}
Feedback.propType = {
    handleIncrementGood:PropTypes.func.isRequired,
    handleIncrementNeutral:PropTypes.func.isRequired,
    handleIncrementBad:PropTypes.func.isRequired,

}