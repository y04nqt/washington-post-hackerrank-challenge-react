import React, {Component} from 'react'
import Input from '@material-ui/core/Input'

class Search extends Component {
    t
    render() {
        return (
            <Input
                className="search-box"
                placeholder="Enter Country Name"
            />
        );
    }
}

export default Search;