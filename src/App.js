import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import Context from "./components/Context";


function App() {
  const [user, addUser] = React.useState([]);
  const contextValue = { user, addUser };
  return (
    <div>
      <Context.Provider value={contextValue}>
        <Router>
          <Switch>
            <Route path='/' exact component = {LoginPage} />
            <Route path='/home' exact component={Homepage} />
          </Switch>
        </Router>
      </Context.Provider>
      
    </div>
  );
}

export default App;