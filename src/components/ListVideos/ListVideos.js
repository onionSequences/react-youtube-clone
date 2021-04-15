import { useState } from "react";
import "./ListVideos.css";
import Video from "../Video/Video";
import ActiveVideo from "../ActiveVideo/ActiveVideo";
import fetchRelatedVideos from "../../api/fetchRelatedVideos";

const ListVideos = ({ data }) => {
  const [videoIdIframe, setVideoIdIframe] = useState("");
  const [relatedVideos, setRelatedVideos] = useState(null);

  const handleArticleOnClick = (videoIdIframe) => {
    setVideoIdIframe(videoIdIframe);

    fetchRelatedVideos(videoIdIframe).then((videos) =>
      setRelatedVideos(videos)
    );
  };

  const renderVideos = (someData) =>
    someData.items.map((video) => (
      <Video {...video} key={video.id.videoId} onClick={handleArticleOnClick} />
    ));

  return (
    <>
      {videoIdIframe && <ActiveVideo videoIdIframe={videoIdIframe} />}
      <div className="videos">
        {data && relatedVideos
          ? renderVideos(relatedVideos)
          : renderVideos(data)}
      </div>
    </>
  );
};

export default ListVideos;
