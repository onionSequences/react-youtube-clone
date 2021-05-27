import { useContext } from "react";
import "./ActiveVideo.scss";
import VideoIframe from "./VideoIframe/VideoIframe";
import useFetch from "../../hooks/useFetch";
import VideoCard from "../RecommendedVideos/VideoCard/VideoCard";
import { SidebarContext } from "../../globalState/sidebarProvider";

const ActiveVideo = props => {
  const videoId = props.location.pathname.slice(
    props.location.pathname.lastIndexOf("/") + 1
  );

  const { data, isLoading, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`
  );
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`container ${isSidebarOpen ? "moveRight" : ""}`}>
      <VideoIframe videoId={videoId} />
      <div className="similar__videos">
        {isLoading && <p>Loading videos...</p>}
        {data &&
          data.map(video => {
            if (video.snippet) {
              return (
                <VideoCard
                  key={video.id.videoId}
                  snippet={video.snippet}
                  id={video.id.videoId}
                />
              );
            } else return null;
          })}
        {error && <p>ERROR:{error}</p>}
      </div>
    </div>
  );
};

export default ActiveVideo;
