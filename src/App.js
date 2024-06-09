import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          (_state, _props) => {
            return {
              monsters: data,
              filteredMonsters: data,
            };
          },
          () => {}
        );
      });
  }

  onSearchChange = (e) =>
    this.setState((_state, _props) => ({
      searchString: e.target.value,
    }));

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(searchString.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className="monsters-search-box"
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
