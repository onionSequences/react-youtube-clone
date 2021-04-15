import { useState } from "react";
import "./SearchBar.css";
import SearchButton from "../SearchButton/SearchButton";

const Search = ({ onClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => setSearchValue(event.target.value);

  const handleSrchBtnClick = () => onClick(searchValue);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSrchBtnClick();
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={handleSrchBtnClick} />
    </div>
  );
};

export default Search;
