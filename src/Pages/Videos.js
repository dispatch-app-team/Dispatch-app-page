// Videos.js
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "../Styles/Videos.css";

const Videos = () => {
  const opts = {
    height: "300",
    width: "500", //비디오 크기 여기서 변경
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
    <div key={lineIndex} className="video-line">
      {videoChunk.map((videoId, index) => (
        <div key={index} className="video-box">
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

export default Videos;
