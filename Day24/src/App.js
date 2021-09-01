import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Profile from "./components/profile";
import Dashboard from "./components/dashboard";
import {AuthContext} from "./context/AuthContext";



function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/about" component={About}/>
          </AuthContext>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
