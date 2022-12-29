import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        </Switch>
      </Router> */}
      <Landing/>
    </>
  );
}

export default App;
