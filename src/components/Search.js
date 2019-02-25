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
        const val = event.target.value.toLowerCase();
        this.setState({value: val});
        this.props.onInputChange(val)
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
