const fetchRelatedVideos = async (videoIdIframe) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=${videoIdIframe}&type=video&key=${process.env.REACT_APP_API_KEY}`
  );
  const videos = await response.json();
  return videos;
};

export default fetchRelatedVideos;
