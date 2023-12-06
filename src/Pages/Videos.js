// Videos.js
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "../Styles/Videos.css";

const Video = () => {
  const opts = {
    height: "400",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const videoIds = [
    "WkyzaltuJvE",
    "v_wITjyVzvM",
    "M8g3tyeURmg",
    "Znrlu8RFBBM",
    "DGPTVlw-x0Y",
    "s1amWglxYi4",
  ];

  const videosChunks = [];
  for (let i = 0; i < videoIds.length; i += 2) {
    videosChunks.push(videoIds.slice(i, i + 2));
  }

  const videosLines = videosChunks.map((videoChunk, lineIndex) => (
    <div key={lineIndex} style={{ display: "flex", flexWrap: "wrap" }}>
      {videoChunk.map((videoId, index) => (
        <div key={index} style={{ flex: "0 0 50%", padding: "10px" }}>
          <Link to={`/video/${videoId}`}>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
          </Link>
        </div>
      ))}
    </div>
  ));

  return <div className="video-card">{videosLines}</div>;

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

export default Video;
