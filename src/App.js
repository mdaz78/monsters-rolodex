import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) =>
        this.setState(
          () => ({ monsters, filteredMonsters: monsters }),
          () => console.log(this.state)
        )
      );
  }

  render() {
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search Monsters'
          className='search-box'
          onChange={(e) => {
            const searchValue = e.target.value.trim();
            const filteredMonsters = this.state.monsters.filter((m) =>
              m.name.toLowerCase().includes(searchValue.toLowerCase())
            );

            this.setState(() => ({ filteredMonsters }));
          }}
        />
        {this.state.filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
