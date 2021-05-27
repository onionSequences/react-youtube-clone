import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";
import { SidebarContext } from "../../globalState/sidebarProvider";
import logo from "../../img/logo.png";

import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setSidebarOpen } = useContext(SidebarContext);
  let history = useHistory();

  const handleSearch = e => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `?q=${searchValue}`,
    });
  };

  const searchOnEnter = e => {
    if (e.key === "Enter") handleSearch(e);
    return;
  };

  return (
    <header className="header">
      <div className="header__left">
        <MenuIcon
          onClick={() => {
            setSidebarOpen(prevState => !prevState);
          }}
        />
        <img className="header__logo" src={logo} alt="Youtube-logo" />
      </div>

      <div className="header__input">
        <input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={e => setSearchValue(e.target.value)}
          onKeyUp={searchOnEnter}
        />
        <button onClick={handleSearch}>
          <SearchIcon
            className="header__search-icon"
            color="action"
            fontSize="small"
          />
        </button>
      </div>

      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar src="/broken-image.jpg" className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
