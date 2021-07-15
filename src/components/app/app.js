import React, { Component } from 'react';
import Banner from '../banner/banner';
import Header from '../header/header';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />



      </div>
    );
  }
};