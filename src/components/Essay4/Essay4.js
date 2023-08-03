import React from 'react';
import { useSelector } from 'react-redux';
import '../Essay1/Essays.css';

const Essay4 = () => {
  // Using useSelector to get data from the Redux store
  const essay4Data = useSelector(state => state.about.essay4);
  const { signature, revisionNote } = useSelector(
    state => state.about.signature,
  );

  return (
    <div className="essay-content">
      {/* Essay title */}
      <h2 className="essay-title">{essay4Data.essay4Title}</h2>

      {/* Essay paragraphs */}
      {essay4Data.essay4Content.map((paragraph, index) => (
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

// Exporting the 'Essay4' component to be used in other parts of the application
export default Essay4;
