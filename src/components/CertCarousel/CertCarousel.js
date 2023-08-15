import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CertCarousel.css';

const filenames = [
  'api',
  'css',
  'js',
  'node',
  'probInt',
  'react',
  'sql',
  'python',
];

function CertCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Call slickNext() on the Slider component's ref to move to the next slide
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Slider {...settings} className="slider" ref={sliderRef}>
          {filenames.map((filename, index) => (
            <div key={index} className="image-slide">
              <img
                src={`${process.env.PUBLIC_URL}/${filename}.png`}
                alt={`Image ${filename}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CertCarousel;
