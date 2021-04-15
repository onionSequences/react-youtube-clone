import "./Header.css";
import logo from "../../img/logo.png";
import Search from "../SearchBar/SearchBar";

const Header = ({ onClick }) => {
  return (
    <header className="container">
      <img className="logo" src={logo} alt="Youtube-logo" />
      <Search onClick={onClick} />
    </header>
  );
};

export default Header;
