import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "../Styles/VideosData.css";

const Videos = () => {
  const opts = {
    height: "250",
    width: "400", // 비디오 크기 여기서 변경
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

  // videoIds 배열을 슬라이싱하여 2개의 영상만 가져옴
  const selectedVideoIds = videoIds.slice(0, 2);

  const videosLines = selectedVideoIds.map((videoId, index) => (
    <div key={index} className="videos-line">
      <div key={index} className="videos-box">
        <Link to={`/video/${videoId}`}>
          <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <div className="newslistdata">
        <h2>Videos</h2>
        <Link to={`/Video`} className="text-decoration-none more-link">more >></Link>
      </div>
      <div className="videos-card">{videosLines}</div>
    </>
  );

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

export default Videos;

