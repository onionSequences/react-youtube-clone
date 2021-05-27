import { dateToRightFormat, viewsFormatter } from "../../../services/services";
import { Link } from "react-router-dom";
import "./VideoCard.scss";

const VideoCard = props => {
  const { snippet, id, statistics } = props;
  const { title, publishedAt, channelTitle, thumbnails } = snippet;

  return (
    <Link to={`/video/${id}`}>
      <article className="videoCard">
        <img
          className="videoCard__image"
          src={thumbnails.medium.url}
          alt="video-thumbnail"
        />
        <div className="videoCard__details">
          <h2 className="videoCard__title">{title}</h2>
          <p className="videoCard__channelTitle">{channelTitle}</p>
          <p className="videoCard__publishDateAndViews">
            {statistics?.viewCount && viewsFormatter(statistics.viewCount)} •{" "}
            {dateToRightFormat(publishedAt)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default VideoCard;
