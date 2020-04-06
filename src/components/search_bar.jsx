import React, { Component } from 'react';

class SearchBar extends Component {
  update = (event) => {
    const query = event.currentTarget.value;
    const { search } = this.props;
    search(query);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.update}
      />
    );
  }
}

export default SearchBar;
