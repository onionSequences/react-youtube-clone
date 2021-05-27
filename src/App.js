import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchVideos from "./components/SearchVideos/SearchVideos";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import { SidebarProvider } from "./globalState/sidebarProvider";
import { Switch, Route } from "react-router-dom";

function App() {
  // Todo
  // Handle search with react-router
  // Add routes = home route (RecomendedVideso) / search route with query in url / active video root with video id in url

  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={RecommendedVideos} />
        <Route exact path="/search" component={SearchVideos} />
        <Route exact path="/video/:id" component={ActiveVideo} />
      </Switch>
    </SidebarProvider>
  );
}

export default App;
