import React from 'react';
import PropTypes from 'prop-types';
import './Warning.css';

const Warning = ({ onContinue }) => {
  return (
    <div className="warning-content">
      {/* Warning title */}
      <h2 className="warning-title">Warning</h2>

      {/* Warning text */}
      <p className="warning-text">
        The opinions expressed in this essay may be controversial. I strive to
        provide a fair and even assessment of all situations, as well as an
        objective assessment of their ramifications. This is not intended to be
        divisive. It is intended to foster genuine debate through which a real
        solution to a humanitarian crisis can be found.
      </p>

      {/* Continue button */}
      <button className="warning-continue" onClick={onContinue}>
        I understand and wish to continue →
      </button>
    </div>
  );
};

// PropTypes for type-checking the 'onContinue' prop
Warning.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

// Exporting the 'Warning' component to be used in other parts of the application
export default Warning;
