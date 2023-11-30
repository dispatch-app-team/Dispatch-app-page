// js
import React from 'react';
import YouTube from 'react-youtube';

const Video = class Example extends React.Component {
  render() {
    const opts = {
      height: '200',
      width: '350',
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div>
        <YouTube videoId="0rXnZ6-L1K8" opts={opts} onReady={this._onReady} />;
        <YouTube videoId="WkyzaltuJvE" opts={opts} onReady={this._onReady} />;
      </div>
    );
  }

  _onReady = (event) => {
    event.target.pauseVideo();
  }
}

export default Video;

