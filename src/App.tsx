import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { FAQContainer } from './Containers/FAQContainer';
import { HomeContainer } from './Containers/HomeContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link className="App-link" to="/">Home</Link>
          <Link  className="App-link" to="/faq">FAQ</Link>
        </header>
      <Switch>
          <Route path="/faq">
            <FAQContainer />
          </Route>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
