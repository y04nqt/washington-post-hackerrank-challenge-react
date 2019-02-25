import React, {Component} from 'react';
import Input from '@material-ui/core/Input';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    
    updateValue (event) {
        this.setState({value: event.target.value})
    }
    
    componentDidUpdate (){
        console.log(this.state.value);
    }

    render () {
        return (
            <Input
                className="search-box"
                placeholder="Enter Country Name"
                value={this.state.value}
                onChange={event => this.updateValue(event)}
            />
        );
    }
}

export default Search;
