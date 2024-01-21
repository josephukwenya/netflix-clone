import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <h1>UK ACADEMY</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
