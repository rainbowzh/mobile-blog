import React, { useEffect, useState, useCallback } from 'react';
import { LodingStyle } from './component' ;
import { ArticlePage, UserPage, ListPage } from './container';
import { getListData } from './util/api' ;
import { Switch, HashRouter as Router, Route, Link, Redirect } from 'react-router-dom' ;


import './App.scss';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/article" component={ArticlePage}></Route>
          <Route exact path="/user" component={UserPage}></Route>
          <Route exact path="/list" component={ListPage}></Route>
        </Switch>
      </Router>
      {/* <Router>
        <Switch>
            <Route exact path="/article" component={ArticlePage}></Route>
            <Redirect to="/"></Redirect>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
