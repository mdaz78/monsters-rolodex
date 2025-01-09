import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) =>
        this.setState(
          () => ({ monsters }),
          () => console.log(this.state)
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.trim().toLocaleLowerCase();
    this.setState(() => ({ searchField }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField)
    );

    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search Monsters'
          className='search-box'
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
