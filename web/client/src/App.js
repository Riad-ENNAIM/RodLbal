import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import HomePage from './components/pages/HomePage';
import ZonePage from './components/pages/ZonePage';

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
          <PrivateRoute exact path="/zone/:currentZoneId" component={ZonePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
