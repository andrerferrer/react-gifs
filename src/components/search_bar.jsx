import React, { Component } from 'react';
import giphy from "giphy-api";

class SearchBar extends Component {
    update = (event) => {
        const query = event.currentTarget.value;
        this.props.search(query);
    }
    render() {
        return (
           <input type="text" className="form-control form-search"
               onChange={this.update}
           />
        );
    }
}

export default SearchBar;
