import React from 'react';
import { useSelector } from 'react-redux';
import '../Essay1/Essays.css';

const Essay2 = () => {
  const essay2Data = useSelector(state => state.about.essay2);
  const { signature, revisionNote } = useSelector(
    state => state.about.signature,
  );

  return (
    <div className="essay-content">
      {/* Essay title */}
      <h2 className="essay-title">{essay2Data.essay2Title}</h2>

      {/* Essay paragraphs */}
      {essay2Data.essay2Content.map((paragraph, index) => (
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

export default Essay2;
