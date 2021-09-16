import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Albums from "./components/Albums/Albums";
import Album from "./components/Album/Album";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__data container">
        <Switch>
          <Route path="/album/:albumId" exact component={Album} />
          <Route path="/" exact component={Albums} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
