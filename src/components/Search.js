import React, {Component} from 'react'
import Input from '@material-ui/core/Input'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        
    }
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