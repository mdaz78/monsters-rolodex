import { Monsters } from '../../App';
import Card from '../card/card.component';

import './card-list.styles.css';

interface ICardListProps {
  monsters: Monsters[];
}

const CardList = ({ monsters }: ICardListProps) => {
  return (
    <div className='card-list'>
      {monsters.map(({ name, id, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
