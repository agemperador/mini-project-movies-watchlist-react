import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header.component'
import Watched from './pages/watched-page/watched'
import Watchlist from './pages/watchlist/watchlist'
import Add from './pages/add-page/add'
import './App.css';
import {GlobalProvider} from './context/globalstate'

const  App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Watchlist/>
          </Route>
          <Route path='/watched'>
            <Watched/>
          </Route>
          <Route path='/add'>
            <Add/> 
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
