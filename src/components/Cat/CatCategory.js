import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../UI/Loading';

function CatCategory() {
  const catCategoryAPI = `https://api.thecatapi.com/v1/images/search?category_ids=1`;
  const [breed, setBreed] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBreed = async () => {
      axios
        .get(catCategoryAPI)
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
            <h1>TEST</h1>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default CatCategory;
