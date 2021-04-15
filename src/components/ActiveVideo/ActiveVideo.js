import "./ActiveVideo.css";

const ActiveVideo = ({ videoIdIframe }) => {
  return (
    <div className="video-wrapper">
      <iframe
        title="active-video"
        src={`https://www.youtube.com/embed/${videoIdIframe}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ActiveVideo;
