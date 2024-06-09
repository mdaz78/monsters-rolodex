import { useEffect, useMemo, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

export const App = () => {
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  const filteredMonsters = useMemo(() => {
    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString.toLocaleLowerCase())
    );
  }, [monsters, searchString]);

  const onSearchChange = (e) => setSearchString(e.target.value);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder="search monsters"
        value={searchString}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
