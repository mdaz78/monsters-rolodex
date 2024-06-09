import { Component } from "react";

import "./card.styles.css";

export default class CardListItem extends Component {
  render() {
    const { name, id, email } = this.props;

    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?setset2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
