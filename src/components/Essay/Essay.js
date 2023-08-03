import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Essay1 from '../Essay1/Essay1';
import Essay2 from '../Essay2/Essay2';
import Essay3 from '../Essay3/Essay3';
import Essay4 from '../Essay4/Essay4';
import './Essay.css';

// Creating the functional component 'Essay'
const Essay = () => {
  // State to keep track of the currently displayed essay
  const [currentEssay, setCurrentEssay] = useState('essay4');

  const {
    essaySectionTitle,
    essay1Title,
    essay2Title,
    essay3Title,
    essay4Title,
  } = useSelector(state => state.about.essay);

  // Function to render the currently selected essay component
  const renderEssay = () => {
    switch (currentEssay) {
      case 'essay1':
        return <Essay1 />;
      case 'essay2':
        return <Essay2 />;
      case 'essay3':
        return <Essay3 />;
      case 'essay4':
        return <Essay4 />;
      default:
        return <Essay4 />;
    }
  };

  return (
    <div className="essay-section">
      {/* Essays section title */}
      <h1 className="section-title">{essaySectionTitle}</h1>

      {/* Essay navigation buttons */}
      <div className="essay-nav">
        {/* Button for Essay4 */}
        <button
          className={currentEssay === 'essay4' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay4')}
        >
          {essay1Title}
        </button>

        {/* Button for Essay1 */}
        <button
          className={currentEssay === 'essay1' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay1')}
        >
          {essay2Title}
        </button>

        {/* Button for Essay2 */}
        <button
          className={currentEssay === 'essay2' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay2')}
        >
          {essay3Title}
        </button>

        {/* Button for Essay3 */}
        <button
          className={currentEssay === 'essay3' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay3')}
        >
          {essay4Title}
        </button>
      </div>

      {/* Container for the essay content */}
      <div className="essay-content">
        {/* Render the currently selected essay */}
        {renderEssay()}
      </div>
    </div>
  );
};

// Exporting the 'Essay' component to be used in other parts of the application
export default Essay;
