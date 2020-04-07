import React, { Component } from 'react';
import Gif from "./gif";

class GifList extends Component {
  renderList = () => {
    const { gifIds, changeSelectedGif } = this.props;
    return gifIds.map((gif) => {
      return <Gif id={gif.id} changeSelectedGif={changeSelectedGif} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
