import { Component } from 'react';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map(({ name, id }) => (
          <h1 key={id}>{name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
