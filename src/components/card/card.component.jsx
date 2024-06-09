import "./card.styles.css";

const Card = ({ name, id, email }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${id}?setset2&size=180x180`}
      alt={`monster ${name}`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
