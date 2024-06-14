// import React from 'react';
import CardSlider from './CardSlider';

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    if (!movies || movies.length === 0) {
      return [];
    }
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title="New Releases" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="Trending Now" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Blockbuster" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Popular On Netflix" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="Classics" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  );
};

export default Slider;
