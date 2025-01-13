import './card.styles.css';

interface ICardProps {
  id: number;
  name: string;
  email: string;
}

const Card = ({ id, name, email }: ICardProps) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
