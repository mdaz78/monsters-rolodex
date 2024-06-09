import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "zafar",
    };
  }

  render() {
    return (
      <div className="App">
        <p>Hi, {this.state.name}</p>
        <button onClick={() => this.setState({ name: "abu" })}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
