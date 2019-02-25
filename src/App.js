import React, {Component} from 'react';
import CountryList from './components/CountryList';
import Search from './components/Search';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
    }
    
    handleInput = (input) => {
        console.log('heee hee ', input);
        this.setState({input: input})
    }
    render() {
        return (
            <div className="container">
                <center>
                    <h1>Country Filter</h1>
                </center>
                <Search onInputChange={this.handleInput}></Search>
                <CountryList searchInput={this.state.input}></CountryList>
            </div>);
    }
}

export default App;