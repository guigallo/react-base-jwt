import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Route, Router, browserHistory} from 'react-router';

import Login from './components/Login';
import User from './components/User';

function verifyAuth(nextState, replace) {
  if(localStorage.getItem('auth-token') === null) {
    replace('/?msg=Você preicsa estar logado');
  }
}

ReactDOM.render(
  (
    <Router history={ browserHistory }>
      <Route path="/" component={ Login } />
      <Route path="/user" component={ User } onEnter={ verifyAuth } />
    </Router>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
