import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../UI/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import './PhotoBook.css';

function PhotoBook() {
  // const PhotoBookAPI = `https://api.thecatapi.com/v1/categories`;

  const [incrementLimit, setIncrementLimit] = useState(15);
  const [photoBook, setPhotoBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const photoBookAPI = `https://api.thecatapi.com/v1/images/search?limit=${incrementLimit}`;
  
   {
    /* THE FOLLOWING HOOK GETS THE AXIOS REPSOSES FROM THE FETCHIMAGE ARROW FUNCTION */
  }

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = () => {
    const fetchPhotoBook = async () => {
      axios
        .get(photoBookAPI)
        .then(response => {
          setPhotoBook(response.data);
          setLoading(true);
          setIncrementLimit(incrementLimit + 5);
        })
        .catch(error => console.log(error));
    };
    fetchPhotoBook();
  };
  return (
    <div>
      <div className='breed-info'>
        <div className='drop-down-cat'></div>
        <h3>
          Here picstures of random cute cats! Scroll to auto-refresh the
          content.
        </h3>

        {loading ? (
          <>
    {/* WHEN SCROLLDOWN THIS WILL REFRESH THE WEBPAGE */}
            <InfiniteScroll
              dataLength={photoBook.length}
              next={fetchImage}
              hasMore={true}
              loader={<Loading />}
            >
                {/* NORMAL DIV AND IMG TO DISPLAY THE CAT */}
              <div className='image-wrapper'>
                {photoBook.map(catImage => (
                  <img
                    className='image-category'
                    src={catImage.url}
                    key={catImage.id}
                    alt=''
                  />
                ))}
              </div>
            </InfiniteScroll>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default PhotoBook;
