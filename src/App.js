import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
