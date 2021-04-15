import "./SearchButton.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <SearchIcon color="action" fontSize="small" />
    </button>
  );
};

export default SearchButton;
