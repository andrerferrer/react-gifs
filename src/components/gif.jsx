import React, { Component } from 'react';

class Gif extends Component {
  clicked = () => {
    const { changeSelectedGif, id } = this.props;
    changeSelectedGif(id);
  }

  render = () => {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;

    return (
      <img
        src={src}
        alt=""
        className="gif"
        onClick={this.clicked}
      />
    );
  }
}

export default Gif;
