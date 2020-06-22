import React, { useEffect, useState, useCallback } from 'react';
import { HashRouter as Router , Switch, Route }  from 'react-router-dom' ;
import { LodingStyle } from './component' ;
import { ArticlePage, UserPage, ListPage, Indexpage, DetailPage, ComListPage } from './container';
import { getListData, ListData } from './util/api' ;
import { win } from './util/helper' ;
import './App.scss';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Indexpage}></Route>
          <Route exact path="/detail:id" component={DetailPage}></Route>
          <Route exact path="/list" component={ComListPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
