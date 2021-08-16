import React from 'react';
import spinner from '../../img/spinner.gif';

function Loading() {
  return (
    <div className='text-center'>
      <img
        src={spinner}
        className='spinner-img'
        style={{ width: '80px', height: '80px' }}
        alt=''
      />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
