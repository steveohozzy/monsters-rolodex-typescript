import { useState, useEffect } from 'react';
import CardList from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchBox';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log('rendered');
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
    )
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters)
  },[monsters, searchField])


  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' type='search' placeholder='Search monsters' 
        onChangeHandler={onSearchChange}
      />
      <CardList items={filteredMonsters} />
    </div>
  )
}

export default App;
