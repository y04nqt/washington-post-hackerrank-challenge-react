import React, { Component } from 'react';
import CountryList from './components/CountryList';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="container">
        <center><h1>Country Filter</h1></center>
        <Search></Search>
        <CountryList></CountryList>
      </div>
    );
  }
}

export default App;