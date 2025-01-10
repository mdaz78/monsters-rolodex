import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map(({ name, id, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
