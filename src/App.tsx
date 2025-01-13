import { ChangeEvent, useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';
import { getData } from './utils/data.utils';
import { MONSTER_URL } from './constants';

export interface Monster {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsters = await getData<Monster[]>(MONSTER_URL);
      setMonsters(monsters);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const filteredResults = monsters.filter(({ name }: Monster) =>
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
