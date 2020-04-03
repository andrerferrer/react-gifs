import React, { Component } from 'react';
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif-list";
import giphy from "giphy-api"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "chVgEkHr9oYz4ZPGeU"
    }

  }

  searchGif = (query) => {
    giphy().search({q: query, limit: 10})
           .then( (res) => {
              this.setState({
                gifs: res.data
              })
            });      
  }

  render() {

    return (
      <div className="app">
        <div className="left-scene">
          <SearchBar search={this.searchGif} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={this.state.gifs} />
        </div>
      </div>
    );
  }
};

export default App;
