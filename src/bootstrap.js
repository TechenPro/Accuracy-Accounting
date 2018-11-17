// Neccessary React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

// Pulls main.scss into the site.
import './style/main.scss';

// Pathing Data
import history from './history';

// Imported Components
import Layout from './components/layout';
import App from './components/app';
import App2 from './components/app2';
import Page404 from './components/404';


function main() {

  ReactDOM.render(

    <Router history={history}>
      <Layout>
        { /* Only allows one path to be rendered at any time */ }
        <Switch>

          <Route path='/' exact component={App}/>
          <Route path='/2' component={App2}/>

          {/* Catches All Invalid Links */}
          <Route component={Page404}/>

        </Switch>
      </Layout>
    </Router>

    , document.querySelector('.app-wrapper'));
    
}

document.addEventListener('DOMContentLoaded', main);
