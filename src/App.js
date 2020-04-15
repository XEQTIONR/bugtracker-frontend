import React, {useState} from 'react';


import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import UserHomePage from './components/pages/UserHomePage'
import TasksPage from './components/pages/TasksPage'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import TestComp from './TestComp'
import NewIssue from './components/modals/NewIssue'


import './App.scss';
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';


import store from "./store"
// import {setAuthState}  from "./store/actions"

function PrivateRoute({ children, cond, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        cond ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {

    axios.defaults.withCredentials = true;

    const authState = store.getState().AuthReducer.authState
    const [sidebarState, setSidebarState] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const modal = showModal ? <NewIssue /> : "";


    const sidebarTransitionSpeed = "0.5s"

    return(
      <Router>
        <div className="App container-fluid p-0" >
          <ToastContainer />
          
          {showModal ? <NewIssue /> : ""}

          <Switch>
          <Route path='/' exact > <TestComp title="/  route (home)" /> </Route>
          <Route path='/home' exact > 
                  <Sidebar speed={sidebarTransitionSpeed} cb={setSidebarState} /> 
                  <Nav speed={sidebarTransitionSpeed} sidebarState={sidebarState} /> 
                  <UserHomePage speed={sidebarTransitionSpeed} sidebarState={sidebarState}  navbar={true}/> 
          </Route>
          <Route path='/login' exact > <LoginPage /> </Route>
          <Route path='/tasks' exact > 
                  <Sidebar speed={sidebarTransitionSpeed} cb={setSidebarState} />
                  <TasksPage speed={sidebarTransitionSpeed} sidebarState={sidebarState} /> 
          </Route>

          <PrivateRoute path='/test' cond={authState}> <TestComp title="/test route" /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
