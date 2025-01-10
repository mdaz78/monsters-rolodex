import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters));
  }, []);

  useEffect(() => {
    const filteredResults = monsters.filter(({ name }) =>
      name.toLocaleLowerCase().includes(searchValue)
    );

    setFilteredMonsters(filteredResults);
  }, [monsters, searchValue]);

  const onSearchChange = (e) => {
    const value = e.target.value.trim().toLocaleLowerCase();
    setSearchValue(value);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        placeholder='Search monsters'
        onChangeHandler={onSearchChange}
        className='monsters-search-box'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
