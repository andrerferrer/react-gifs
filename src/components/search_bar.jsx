import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: null
    };
  }

  update = (event) => {
    const { timeout } = this.state
    const query = event.currentTarget.value;
    const { search } = this.props;

    console.log(timeout)

    clearTimeout(timeout)

    this.state.timeout = setTimeout(() => {
      search(query);
    }, 1000)
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
