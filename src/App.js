import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Albums from "./components/Albums/Albums";
import Album from "./components/Album/Album";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <div className={`App ${lightMode ? "bg-light" : "bg-dark"}`}>
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
