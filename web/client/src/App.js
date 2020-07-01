import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import HomePage from './components/pages/HomePage';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Style
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
