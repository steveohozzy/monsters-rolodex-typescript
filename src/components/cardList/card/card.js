import './card.css';

const Card = ({className, monster}) => {
  const {name, email, id} = monster;

  return (
    <div className={className} key={id}>
        <img alt={`monster ${id}`} src={`https://robohash.org/${id}1?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  );
}

export default Card;
