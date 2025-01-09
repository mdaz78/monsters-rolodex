import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <SearchBox
          placeholder='Search monsters'
          onChangeHandler={onSearchChange}
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
