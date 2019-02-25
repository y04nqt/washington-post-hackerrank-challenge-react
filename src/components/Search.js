import React, {Component} from 'react';
import Input from '@material-ui/core/Input';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    
    updateValue ( )
    
    render () {
        return (
            <Input
                className="search-box"
                placeholder="Enter Country Name"
                value={this.state.value}
            />
        );
    }
}

export default Search;
