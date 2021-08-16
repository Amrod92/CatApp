import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';
import Loading from '../UI/Loading';
import CatStats from '../UI/CatStats';
import './CatBreed.css';

function CatBreed({ match }) {
  const breedAPI = `https://api.thecatapi.com/v1/images/search?breed_id=${match.params.id}`;
  const [breed, setBreed] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBreed = async () => {
      axios
        .get(breedAPI)
        .then(response => {
          setBreed(response.data[0]);
          setLoading(true);
        })
        .catch(error => console.log(error));
    };
    fetchBreed();
  }, []);

  console.log(breed);
  return (
    <div>
      <div className='breed-info'>
        {loading ? (
          <>
            <h1>{breed.breeds[0].name}</h1>
            <img src={breed.url} className='cat-image' alt='' />
            <p>{breed.breeds[0].description}</p>
            <div className='badges'>
              {/* Location Flag  */}
              <span className='badge badge-primary'>
                <Flag code={breed.breeds[0].country_code} height={16} />{' '}
                {breed.breeds[0].origin}
              </span>
              <span className='badge badge-secondary origin'>
                {breed.breeds[0].weight.imperial} kg
              </span>
            </div>
            <hr />
            {/* Cat Stats in display with stars */}
            <div className='cat-stars-grid'>
              <div className='cat-stars-item'>
                <CatStats
                  title='Affection Level'
                  rating={breed.breeds[0].affection_level}
                />
                <CatStats
                  title='Child Friendly'
                  rating={breed.breeds[0].child_friendly}
                />
                <CatStats
                  title='Stranger Friendly'
                  rating={breed.breeds[0].stranger_friendly}
                />
                <CatStats
                  title='Dog Friendly'
                  rating={breed.breeds[0].dog_friendly}
                />
              </div>
              <div className='cat-stars-item2'>
                <CatStats
                  title='Energy Level'
                  rating={breed.breeds[0].energy_level}
                />
                <CatStats
                  title='Vocal Level'
                  rating={breed.breeds[0].vocalisation}
                />
                <CatStats
                  title='Energy Level'
                  rating={breed.breeds[0].energy_level}
                />
                <CatStats
                  title='Intelligence Level'
                  rating={breed.breeds[0].intelligence}
                />
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default CatBreed;
