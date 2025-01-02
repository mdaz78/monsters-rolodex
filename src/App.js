import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Zafar',
      company: 'Cimpress',
    };
  }

  render() {
    console.log(this.state);
    return <div className='App'></div>;
  }
}

export default App;
