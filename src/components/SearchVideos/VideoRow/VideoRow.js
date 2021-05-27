import { Link } from "react-router-dom";
import "./VideoRow.scss";
import { dateToRightFormat } from "../../../services/services";

const VideoRow = props => {
  const { snippet, id } = props;
  const { title, publishedAt, channelTitle, description, thumbnails } = snippet;

  return (
    <Link to={`/video/${id}`}>
      <article className="videoRow">
        <img
          className="videoRow__image"
          src={thumbnails.medium.url}
          alt="video-thumbnail"
        />
        <div className="videoRow__details">
          <h2 className="videoRow__title">{title}</h2>
          <p className="videoRow__publishDate">
            {dateToRightFormat(publishedAt)}
          </p>
          <p className="videoRow__channelTitle">{channelTitle}</p>
          <p className="videoRow__description">{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default VideoRow;
