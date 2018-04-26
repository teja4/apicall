import React, { Component } from 'react';

import FormContainer from '../container/container';
import DisplayContainer from '../container/displayContainer';

class App extends Component {
  render() {
    return (
      <div>
        <FormContainer />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;


/* store 
  userData{}
  fetching:false
  error"""
actions:fetching,
fetchsucess,
fetcherror
*/