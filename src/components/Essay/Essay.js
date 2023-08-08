import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Essays from '../Essays/Essays';
import './Essay.css';

const Essay = () => {
  const [currentEssay, setCurrentEssay] = useState('essay4');
  const [showWarning, setShowWarning] = useState(true);

  const {
    essaySectionTitle,
    essay1Title,
    essay2Title,
    essay3Title,
    essay4Title,
    essay5Title,
  } = useSelector(state => state.about.essay);

  const renderEssay = () => {
    switch (currentEssay) {
      case 'essay1':
        return <Essays key="essay1" essayType="essay1" showWarning={false} />;
      case 'essay2':
        return <Essays key="essay2" essayType="essay2" showWarning={false} />;
      case 'essay3':
        return (
          <Essays
            key="essay3"
            essayType="essay3"
            showWarning={showWarning}
            setShowWarning={setShowWarning}
          />
        );
      case 'essay5':
        return <Essays key="essay5" essayType="essay5" showWarning={false} />;
      case 'essay4':
      default:
        return <Essays key="essay4" essayType="essay4" showWarning={false} />;
    }
  };

  return (
    <div className="essay-section">
      <h1 className="section-title">{essaySectionTitle}</h1>

      <div className="essay-nav">
        <button
          className={currentEssay === 'essay4' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay4')}
        >
          {essay1Title}
        </button>
        <button
          className={currentEssay === 'essay5' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay5')}
        >
          {essay5Title}
        </button>
        <button
          className={currentEssay === 'essay1' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay1')}
        >
          {essay2Title}
        </button>
        <button
          className={currentEssay === 'essay2' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay2')}
        >
          {essay3Title}
        </button>
        <button
          className={currentEssay === 'essay3' ? 'selected-essay' : ''}
          onClick={() => setCurrentEssay('essay3')}
        >
          {essay4Title}
        </button>
      </div>

      <div className="essay-content">{renderEssay()}</div>
    </div>
  );
};

export default Essay;
