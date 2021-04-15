import "./Video.css";
import moment from "moment";

const Video = ({ snippet, id, onClick }) => {
  const { title, publishedAt, channelTitle, description } = snippet;
  const { videoId } = id;

  const handleArticleOnClick = () => onClick(videoId);

  const dateToRightFormat = (date) => {
    const element = date;

    element.slice(0, element.indexOf("T"));
    element.replaceAll("-", ",");

    return moment([element]).fromNow();
  };

  return (
    <article onClick={handleArticleOnClick}>
      <img src={snippet.thumbnails.medium.url} alt="video-thumbnail" />
      <div>
        <h2>{title}</h2>
        <span>{dateToRightFormat(publishedAt)}</span>
        <p>{channelTitle}</p>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Video;
