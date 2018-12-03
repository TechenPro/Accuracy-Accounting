// Neccessary React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// Pulls main.scss into the site.
import './style/main.scss';

// Pathing Data
import history from './history';

// Imported Functions
import {RequireAuth} from './functions/authFunctions';

// Imported Components
import Layout from './components/layout';
import App from './components/app';
import Page404 from './components/404';
import Login from './components/auth/login';
import homePage from './components/homePage/homePage';
import about from './components/aboutPage';
import industries from './components/industriesPage';


function main() {

  ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          { /* Only allows one path to be rendered at any time */ }
          <Switch>

            <Route path='/' exact component={Login}/>
            <RequireAuth path='/protected' component={App} authenticated={true}/>
            <Route path='/homePage' component={homePage}/>
            <Route path='/about' component={about}/>
            <Route path='/industries' component={industries}/>
            {/* Catches All Invalid Links */}
            <Route component={Page404}/>

          </Switch>
        </Layout>
      </Router>
    </Provider>

    , document.querySelector('.app-wrapper'));
    
}

document.addEventListener('DOMContentLoaded', main);
