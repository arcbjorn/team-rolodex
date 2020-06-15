import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component'
import './App.css';
import People from './db.json'

class App extends Component {
  constructor() {
    super();

    this.state = {
      team: People.team,
      search: '',
    };
  }

  // to use with JSON Server
  // componentDidMount() {
  //   fetch('http://localhost:4000/team')
  //   .then(response => response.json())
  //   .then(team => this.setState({ team: team }))
  // }

  // autobind on arrow functions
  handleSearchChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { team, search } = this.state;
    const filteredTeam = team.filter(
      (person) => person.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="App">
        <div className="h1">Greatest minds</div>
        <Search
          placeholder="search great minds"
          handleChange={this.handleSearchChange}
        />
        <CardList team={filteredTeam} />
      </div>
    );
  }
}

export default App;
