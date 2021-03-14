import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useState} from 'react';

import Home from "./Pages/Home";
import Name from "./Pages/Name";

function App() {
  const [name, setName] = useState("Start");

  return (
    <div className="App">
      <Router>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/name">Name</Link></div>
        <hr />
        <Switch>
          <Route path="/name"><Name name={name} updateName={setName}/></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
