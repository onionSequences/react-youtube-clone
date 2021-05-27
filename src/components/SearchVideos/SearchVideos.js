import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import VideoRow from "./VideoRow/VideoRow";
import { SidebarContext } from "../../globalState/sidebarProvider";

const SearchVideos = props => {
  const query = props.location.search;
  const { data, isLoading, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&${query.substring(
      1
    )}&key=${process.env.REACT_APP_API_KEY}`
  );
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`${isSidebarOpen ? "moveRight" : "ml-10"}`}>
      <h3 className="searched__title">Results for "{query.substring(3)}"</h3>
      <div className="searched__videos">
        {isLoading && <p>Loading videos...</p>}
        {data &&
          data.map(video => (
            <VideoRow
              key={video.id.videoId}
              snippet={video.snippet}
              id={video.id.videoId}
            />
          ))}
        {error && <p>ERROR:{error}</p>}
      </div>
    </div>
  );
};

export default SearchVideos;
