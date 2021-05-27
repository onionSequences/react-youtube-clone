import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import SidebarRow from "./SidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SidebarContext } from "../../globalState/sidebarProvider";

const Sidebar = props => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <Link to="/">
            <SidebarRow Icon={HomeIcon} title="Home" selected />
          </Link>
          <SidebarRow Icon={ExploreIcon} title="Explore" />
          <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
          <hr />
          <SidebarRow Icon={VideoLibraryIcon} title="Library" />
          <SidebarRow Icon={HistoryIcon} title="History" />
          <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
          <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
          <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
          <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
        </div>
      )}
    </>
  );
};

export default Sidebar;
