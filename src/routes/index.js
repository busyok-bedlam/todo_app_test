import React from 'react';
import {Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import '../styles/main.css'

import ListPage from '../containers/list-page';
import Header from '../components/header';

export default () => (
  <div className="container-fluid wrapper">

    <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" render={() => <Redirect to="/todos"/> } /> */}
          <Route exact path="/" component={ListPage} />
        </Switch>
    </BrowserRouter>
  </div>
)
