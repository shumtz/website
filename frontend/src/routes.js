import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import RegisterPage from './pages/RegisterPage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={InitialPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}
