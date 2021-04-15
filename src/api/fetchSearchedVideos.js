const fetchSearchedVideos = async (searchQuery) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${searchQuery}&key=${process.env.REACT_APP_API_KEY}`
  );
  const videos = await response.json();
  return videos;
};

export default fetchSearchedVideos;
