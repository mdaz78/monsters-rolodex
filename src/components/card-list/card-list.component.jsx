import Card from "../card/card.component";

import "./card-list.styles.css";

const { Component } = require("react");

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} {...monster} />;
        })}
      </div>
    );
  }
}
