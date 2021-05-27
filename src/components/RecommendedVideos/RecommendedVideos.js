import { useContext } from "react";
import "./RecommendedVideos.scss";
import VideoCard from "./VideoCard/VideoCard";
import useFetch from "../../hooks/useFetch";
import { SidebarContext } from "../../globalState/sidebarProvider";

const RecommendedVideos = () => {
  const { data, isLoading, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=10&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
  );

  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`recommended ${isSidebarOpen ? "moveRight" : "ml-10"}`}>
      <h3 className="recommended__title">Recommended</h3>
      <div className="recommended__videos">
        {isLoading && <p>Loading videos...</p>}
        {data &&
          data.map(video => (
            <VideoCard
              key={video.id}
              snippet={video.snippet}
              id={video.id}
              statistics={video.statistics}
            />
          ))}
        {error && <p>ERROR:{error}</p>}
      </div>
    </div>
  );
};

export default RecommendedVideos;
