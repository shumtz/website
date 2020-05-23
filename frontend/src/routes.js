import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InitialPage from './pages/InitialPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={InitialPage} />
      </Switch>
    </BrowserRouter>
  );
}
