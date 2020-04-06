import React, {Component} from 'react';
import logo from './logo.svg';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import './App.scss';
// import 'admin-lte/dist/css/adminlte.css'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
class App extends Component {

  constructor(props){
    super(props);

    axios.defaults.withCredentials = true;

  }
  
  render(){

    return(
      <Router>
        <div className="App container-fluid" style={{backgroundColor : '#CCC'}}>
          <ToastContainer />
          <Switch>
          <Route path='/' exact component={LoginPage}/>
          {/* <Route path='/test' component={TestComp}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
