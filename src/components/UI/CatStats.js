import React from 'react';
import Stars from './Stars';

function CatStats({ title, rating }) {
  return (
    <div>
      <span className='cat-stats'>
        <div className='row'>
          <div className='col text-right'>{title}</div>
          <div className='col text-left'>
            <Stars rating={rating} />
          </div>
        </div>
      </span>
    </div>
  );
}

export default CatStats;
