import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../UI/Loading';
import { Button } from 'react-bootstrap';
import './RandomCat.css';

function RandomCat() {
  const catUrl = 'https://api.thecatapi.com/v1/images/search';
  const [randomCat, setRandomCat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandomCat = async () => {
      axios
        .get(catUrl)
        .then(response => {
          setRandomCat(response.data[0]);
          setLoading(true);
        })
        .catch(error => console.log(error));
    };
    fetchRandomCat();
  }, []);

  const newRes = async () => {
    const result = await axios(catUrl);
    setRandomCat(result.data[0]);
    setLoading(true);
  };

  return (
    <div className='random-cat'>
      {loading ? (
        <>
          <img
            className='random-image'
            src={randomCat.url}
            key={randomCat.id}
            alt=''
          />
          <Button className='random-button' variant='success' onClick={newRes}>
            Get a new cat of the day
          </Button>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default RandomCat;
