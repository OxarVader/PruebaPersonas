import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Personas from './components/Personas';
import AcercaDe from './components/AcercaDe';


function App() {

  //class App extends Component {

   
  return (
    <BrowserRouter>
        <div>
          <NavBar />
          <Redirect
            from="/"
            to="/personas" />
          <Switch>
            <Route
              path="/personas"
              component={Personas} />
            <Route
              exact
              path="/acercade"
              component={AcercaDe} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
