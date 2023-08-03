import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Warning.css';

const Warning = ({ onContinue }) => {
  const { warningTitle, warningText } = useSelector(
    state => state.about.warning,
  );

  return (
    <div className="warning-content">
      {/* Warning title */}
      <h2 className="warning-title">{warningTitle}</h2>

      {/* Warning text */}
      <p className="warning-text">{warningText}</p>

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
