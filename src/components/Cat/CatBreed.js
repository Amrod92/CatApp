import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';
import Loading from '../UI/Loading';
import CatStats from '../UI/CatStats';
import WikipediaLogo from '../../img/wikipedia_logo.png';
import VcaLogo from '../../img/vca_logo.png';
import VetStreetLogo from '../../img/vet_street_logo.jpg';
import { FiAlertTriangle } from 'react-icons/fi';

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
            <h1 className='cat-breed-header'>{breed.breeds[0].name}</h1>
            <img src={breed.url} className='cat-image' alt='' />
            <p style={{ marginTop: '18px' }}>{breed.breeds[0].description}</p>
            <div className='badge'>
              {/* Location Flag  */}
              <span
                className='badge bg-secondary fs-5'
                style={{ marginRight: '5px' }}
              >
                <Flag code={breed.breeds[0].country_code} height={16} />{' '}
                {breed.breeds[0].origin}
              </span>

              <span
                className='badge bg-secondary fs-5'
                style={{ marginRight: '5px' }}
              >
                {breed.breeds[0].weight.imperial} kg
              </span>
              {breed.breeds[0].hypoallergenic ? (
                <span className='badge bg-secondary fs-5'>
                  Hypoallergenic <FiAlertTriangle style={{ color: 'yellow' }} />
                </span>
              ) : null}
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
                <CatStats
                  title='Health Issues'
                  rating={breed.breeds[0].health_issues}
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
                <CatStats
                  title='Adaptability Level'
                  rating={breed.breeds[0].adaptability}
                />
              </div>
            </div>
            <br />
            <h3>Note: </h3>
            <p>{breed.breeds[0].temperament}</p>
            <h2>
              For more information about the{' '}
              {breed.breeds[0].name.toLowerCase()} breed, click on the image
              below.
            </h2>
            <div>
              <a
                href={breed.breeds[0].wikipedia_url}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt='Wikipedia'
                  src={WikipediaLogo}
                  style={{ height: '80px', width: '80px', padding: '5px' }}
                />
              </a>
              <a
                href={breed.breeds[0].vcahospitals_url}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt='Vca'
                  src={VcaLogo}
                  style={{ height: '80px', width: '150px', padding: '5px' }}
                />
              </a>
              <a
                href={breed.breeds[0].vetstreet_url}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt='VetStreet'
                  src={VetStreetLogo}
                  style={{ height: '80px', width: '150px', padding: '5px' }}
                />
              </a>
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
