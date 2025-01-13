import { ChangeEvent, useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';
import { getData } from './utils/data.utils';

export interface Monsters {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filteredMonsters, setFilteredMonsters] =
    useState<Monsters[]>(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsters = await getData<Monsters[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(monsters);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const filteredResults = monsters.filter(({ name }: Monsters) =>
      name.toLocaleLowerCase().includes(searchValue)
    );

    setFilteredMonsters(filteredResults);
  }, [monsters, searchValue]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
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
