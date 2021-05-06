import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>

<FontAwesomeIcon icon="coffee" transform="shrink-6 left-4" />
<FontAwesomeIcon icon="coffee" transform={{ rotate: 42 }} />


      </div>
    );
  }
};