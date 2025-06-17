
import { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    const {className} = this.props;
    const {name, email, id} = this.props.monster;

    return (
      <div className={className} key={id}>
          <img alt={`monster ${id}`} src={`https://robohash.org/${id}1?set=set2&size=180x180`} />
          <h2>{name}</h2>
          <p>{email}</p>
      </div>
    );
  }
}

export default Card;
