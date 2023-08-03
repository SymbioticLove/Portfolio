import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../Essay1/Essays.css';
import Warning from '../Warning/Warning';

const Essay3 = () => {
  // State to control whether to show the warning
  const [showWarning, setShowWarning] = useState(true);

  // Using useSelector to get data from the Redux store
  const essay3Data = useSelector(state => state.about.essay3);
  const { signature, revisionNote } = useSelector(
    state => state.about.signature,
  );

  // If showWarning is true, display the Warning component and handle onContinue
  if (showWarning) {
    return <Warning onContinue={() => setShowWarning(false)} />;
  }

  // If showWarning is false, display the essay content
  return (
    <div className="essay-content">
      {/* Essay title */}
      <h2 className="essay-title">{essay3Data.essay3Title}</h2>

      {/* Essay paragraphs */}
      {essay3Data.essay3Content.map((paragraph, index) => (
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

// Exporting the 'Essay3' component to be used in other parts of the application
export default Essay3;
