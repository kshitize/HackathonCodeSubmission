import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Paxpage from './components/Paxpage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
     <Navbar />

<Router>
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Login} />
    <Route path="/paxpage" component={Paxpage} />
  </Switch>
</Router>
    </>
  );
}

export default App;
