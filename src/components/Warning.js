import React from "react";
import PropTypes from "prop-types";
import "./Warning.css";

const Warning = ({ onContinue }) => {
  return (
    <div className="warning-content">
      <h2 className="warning-title">Warning</h2>
      <p className="warning-text">
        The opinions expressed in this essay may be controversial. I strive to
        provide a fair and even assessment of all situations, as well as an
        objective assessment of their ramifications. This is not intended to be
        divisive. It is intended to foster genuine debate through which a real
        solution to a humanitarian crisis can be found.
      </p>
      <button className="warning-continue" onClick={onContinue}>
        I understand and wish to continue →
      </button>
    </div>
  );
};

Warning.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default Warning;
