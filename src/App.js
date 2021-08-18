import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import BreedList from './components/Cat/BreedList';
import CatBreed from './components/Cat/CatBreed';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-modal';
import PhotoBook from './components/Cat/PhotoBook';
Modal.setAppElement('#root');

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Switch>
              {/* Homepage route */}
              <Route path='/' exact component={Home} />
              {/* BreedList route */}
              <Route path='/breeds' exact component={BreedList} />
              {/* CatBreed route */}
              <Route path='/breeds/:id' component={CatBreed} />
              {/* Photobook route */}
              <Route path='/photobook' component={PhotoBook} />
              {/* 404 route */}
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
