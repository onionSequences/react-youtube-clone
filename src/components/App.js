import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import fetchSearchedVideos from "../api/fetchSearchedVideos";

function App() {
  const [data, setData] = useState(null);

  const handleClick = (searchValue) => {
    fetchSearchedVideos(searchValue).then((videos) => setData(videos));
  };
  return (
    <>
      <Header onClick={handleClick} />
      <Main data={data} />
    </>
  );
}

export default App;
