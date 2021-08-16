import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import RandomCat from '../components/Cat/RandomCat';
import './Home.css';

function Home() {
  const headings = [
    "Cats choose us; we don't own them - Kristin Cast",
    'Cat got your tongue!',
    'You’re purrrrr-ty.',
    'Did someone say catnip?!',
    'Keep calm and purr on',
    'Be PAWsitive.'
  ];

  const randomHeading = headings[Math.floor(Math.random() * headings.length)];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className='grid-container'>
          <div className='grid-item'>
            <h1>Welcome to CatFinder</h1>
            <h2>
              <i>{randomHeading}</i>
            </h2>
            <p className='mb-0'>
              Look for your cat using the{' '}
              <a href='https://thecatapi.com/' target='_blank' rel='noreferrer'>
                Cats as a Service API
              </a>
            </p>
            <p>Use the below button to open your random cat of the day </p>
            <br />
            <Button variant='warning' onClick={() => setModalIsOpen(true)}>
              Open Cat
            </Button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className='modal-container'
          >
            <h2>Here's your kitty</h2>
            <RandomCat />
            <p>
              Do you want another cat? Please, use the button below. You can
              exit using the following button:{'  '}
              <Button onClick={() => setModalIsOpen(false)} variant='danger'>
                Exit
              </Button>
            </p>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Home;
