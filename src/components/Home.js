import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import RandomCat from '../components/Cat/RandomCat';
import './Home.css';

function Home() {
  {
    /* RANDOM PHRASES THAT UPDATES THE SCREEN EVERYTIME THE USER REFRESH THE PAGE */
  }
  const headings = [
    "Cats choose us; we don't own them - Kristin Cast",
    'Cat got your tongue?',
    'Let the Cat Out of the Bag',
    'Not Enough Room to Swing a Cat',
    'A Cat In Gloves Catches No Mice',
    'A Cat Nap'
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
              {/* THIS WILL OPEN A MODAL FOR THE CAT OF THE DAY */}
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
