import React from 'react';
import ReactStars from 'react-stars';

function Stars({ rating }) {
  return (
    <ReactStars
      className='stars'
      as='span'
      value={rating}
      size={24}
      edit={false}
      color2={'#2ebdbd'}
    />
  );
}

export default Stars;
