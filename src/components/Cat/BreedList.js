import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../UI/Loading';
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags';
import './BreedList.css';

function BreedList() {
  const API_BREEDS = 'https://api.thecatapi.com/v1/breeds';

  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchCat, setSearchCat] = useState('');
  
    {
    /* THE FOLLOWING HOOK GETS THE AXIOS REPSOSES */
  }

  useEffect(() => {
    const fetchCatBreeds = async () => {
      axios
        .get(API_BREEDS)
        .then(response => {
          setBreeds(response.data);
          setLoading(true);
        })
        .catch(error => console.log(error));
    };
    fetchCatBreeds();
  }, []);

  return (
    <div className='container pt-3 pb-5'>
      <input
        type='text'
        onChange={event => {
          setSearchCat(event.target.value);
        }}
        placeholder='Enter a cat breed...'
        className='form-control'
        style={{ backgroundColor: '#eff1e4' }}
      />
      <div className='breed-counter'>
        {/* I NEED TO FIX THIS OR REMOVE IT */}
        There are currently {breeds.length} cat breed matches
      </div>
      <hr style={{ border: 'solid 1px #537c8e' }} />
      <div className='breed-list'>
        {loading ? (
          breeds
            .filter(breed => {
              if (searchCat === '') {
                return breed;
              } else if (
                breed.name.toLowerCase().includes(searchCat.toLowerCase())
              ) {
                return breed;
              } else {
                return null;
              }
            })
            .map(breed => (
              <Link
                key={breed.id}
                to={`breeds/${breed.id}`}
                className='mybtn'
                id='breed-item-btn'
              >
                <span>{breed.name}</span>
                <span className='badge badge-secondary origin'>
                  <Flag code={breed.country_code} height={16} />
                </span>
              </Link>
            ))
        ) : (
          <Loading className='d-flex align-items-center justify-content-center' />
        )}
      </div>
    </div>
  );
}

export default BreedList;
