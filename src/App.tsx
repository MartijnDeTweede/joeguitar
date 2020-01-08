import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { FAQContainer } from './Containers/FAQContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Link to="/faq">FAQ</Link>
      </header>
      <Switch>
          <Route path="/faq">
            <FAQContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
