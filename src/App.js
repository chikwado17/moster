import React, { Component } from 'react';
import { CardList }  from  './components/cardList/CardList';
import { SearchBox }  from './components/searchBox/SearchBox';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);

      this.state = {
        mosters: [],
        searchField: ''
      }  
  }



  //componentDidMount renders immediately when the app loads
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ mosters : users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render () {


    const { mosters, searchField } = this.state;

    const filteredMosters = mosters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
     
        <SearchBox 
          placeholder="Search for Mosters"
          handleChange={this.handleChange}
        />
        <CardList mosters={filteredMosters} />
      </div>
    );
  }
}

export default App;
