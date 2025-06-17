
import { Component } from 'react';
import CardList from './components/cardList/cardList_classes';
import SearchBox from './components/searchBox/searchBox_classes';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users}
        }
    ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(
      () => {
        return { searchField }
      }
    )
  }


  render() {
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className='search-box' type='search' placeholder='Search monsters' 
          onChangeHandler={onSearchChange}
        />
        <CardList items={filteredMonsters} />
      </div>
    );
  }
}

export default App;
