import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainPage from './components/main-page.js';
import './App.css';

import { Provider } from 'react-redux';
import configureStore from './store.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={configureStore()}>

          <BrowserRouter>
            <Switch>
              <Route path="/" component={MainPage} exact />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
