import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Paxpage from "./components/Paxpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Search} />
          <Route exact path="/paxpage" component={Paxpage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
