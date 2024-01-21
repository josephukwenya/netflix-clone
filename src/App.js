import Row from "./Row";
import request from "./request";
import "./Row.css";

function App() {
  return (
    <div className="App">
      <h1>Hey UK Acadmey!!! Let's build Netflix Clone</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
