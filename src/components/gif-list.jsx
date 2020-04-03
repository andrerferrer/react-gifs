import React, { Component } from 'react';
import Gif from "./gif";

class GifList extends Component {
    renderList = () => this.props.gifIds.map( (gif) => <Gif id={gif.id} /> )

    render() {
        return (
            <div className="gif-list">
                {this.renderList()}
            </div>
        );
    }
}

export default GifList;
