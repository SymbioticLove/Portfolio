import React from 'react';
import { useSelector } from 'react-redux';
import './Essays.css';

const Essay1 = () => {
  const essay1Data = useSelector(state => state.about.essay1);

  return (
    <div className="essay-content">
      <h2 className="essay-title">{essay1Data.essay1Title}</h2>

      {essay1Data.essay1Content.map((paragraph, index) => (
        <p key={index} className="essay-text">
          {paragraph}
        </p>
      ))}

      <h3 className="essay-sig">{essay1Data.essay1Sig}</h3>
    </div>
  );
};

export default Essay1;
