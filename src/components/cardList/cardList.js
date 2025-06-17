
import Card from './card/card';
import './cardList.css';

const CardList = ({items}) => {

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

export default CardList;
