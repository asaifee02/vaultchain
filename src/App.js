import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Dashboard from "./components/Dashboard";
import Files from "./components/Files";


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/myfiles" component={Files} />
        </Switch>
      </Router>
      {/* <Landing/> */}
    </>
  );
}

export default App;
