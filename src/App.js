import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import LoginPage from './LoginPage';


function App() {


  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component = {LoginPage} />
          <Route path='/home' exact component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;