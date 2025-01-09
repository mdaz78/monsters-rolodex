import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

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
    console.log('render of App');
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
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
