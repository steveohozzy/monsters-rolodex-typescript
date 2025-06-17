
import { Component } from 'react';
import Card from './card/card_classes';
import './cardList.css';

class CardList extends Component {

  render() {
    const {items} = this.props;

    return (
      <div className="card-list">
        {items.map((monster) => {
          return (
            <Card className='card-container' monster={monster} key={monster.id} />
          )
        })}
      </div>
    );
  }
}

export default CardList;
