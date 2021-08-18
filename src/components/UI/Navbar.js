import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../img/logoN.svg';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
      {/* NAVBAR */}
        <Navbar bg='light' variant='light' expand='lg'>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src={logo}
              width='40'
              height='40'
              className='d-inline-block align-top'
              style={{
                marginLeft: '50px',
                marginTop: '-8px',
                justifyContent: 'center',
                alignContent: 'center'
              }}
            />{' '}
            CatFinder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ml-auto'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/breeds'>Breeds</Nav.Link>
              <Nav.Link href='/photobook'>PhotoBook</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
