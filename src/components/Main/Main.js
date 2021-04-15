import "./Main.css";
import ListVideos from "../ListVideos/ListVideos";

const Main = ({ data }) => {
  return (
    <main>
      <section className="video-section">
        {data && <ListVideos data={data} />}
      </section>
    </main>
  );
};

export default Main;
