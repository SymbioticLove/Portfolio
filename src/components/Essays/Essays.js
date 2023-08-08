import React from 'react';
import { useSelector } from 'react-redux';
import './Essays.css';
import Warning from '../Warning/Warning';
import PropTypes from 'prop-types';

const Essays = ({ essayType, showWarning, setShowWarning }) => {
  // Using useSelector to get data from the Redux store
  const essayData = useSelector(state => state.about[essayType]);
  const { signature, revisionNote } = useSelector(
    state => state.about.signature,
  );

  // If showWarning is true, display the Warning component and handle onContinue
  if (showWarning) {
    return <Warning onContinue={() => setShowWarning(false)} />;
  }

  // If showWarning is false, display the essays content
  return (
    <div className="essay-content">
      {/* Essay title */}
      <h2 className="essay-title">{essayData[`${essayType}Title`]}</h2>

      {/* Essay paragraphs */}
      {essayData[`${essayType}Content`].map((paragraph, index) => (
        <p key={index} className="essay-text">
          {paragraph}
        </p>
      ))}

      {/* Essay signature */}
      <h3 className="essay-sig">-{signature}</h3>

      {/* Revision note */}
      <p className="revision">{revisionNote}</p>
    </div>
  );
};

// Prop validation
Essays.propTypes = {
  essayType: PropTypes.oneOf(['essay1', 'essay2', 'essay3', 'essay4', 'essay5'])
    .isRequired,
  showWarning: PropTypes.bool.isRequired,
  setShowWarning: PropTypes.func.isRequired,
};

export default Essays;
