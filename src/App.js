import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';

import store from './store';
import './App.css';

function App() {
  
  return (
    <Provider store={store} >
<Router>
    <div className="App">
      <header className="App-header">
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddUser} />
            </Switch>
       
      </header>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
