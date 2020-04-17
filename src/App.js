import React, {useState} from 'react';


import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import UserHomePage from './components/pages/UserHomePage'
import TasksPage from './components/pages/TasksPage'
import ProjectsPage from './components/pages/ProjectsPage'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import TestComp from './TestComp'
import NewIssue from './components/modals/NewIssue'
import NewProject from './components/modals/NewProject'
import {setProjectState} from './store/actions/index'

import './App.scss';
import axios from "axios"

import { ToastContainer } from 'react-toastify';


import store from "./store"

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
    const [showNewIssueModal, setShowNewIssueModal] = useState(false);
    const [showNewProjectModal, setShowNewProjectModal] = useState(false);


    const sidebarTransitionSpeed = "0.5s"


    const getProjects = () =>{

      axios.get('http://bugtracker.local/api/projects')
            .then(res =>{
              
              console.log("GET PROJECTS RES")
              console.log(res)
              store.dispatch(setProjectState({projects : res.data}))
            })
            .catch(error =>{

              console.log("GET PROJECTS ERROR RES")
              console.log(error.response)
            })


    }

    const dismissNewIssueModal  = (val) => {

      setShowNewIssueModal(val)
    }

    const dismissNewProjectModal  = (val) => {
      if(val.dismiss)
        setShowNewProjectModal(false)

      if(val.refresh)
      {
        console.log("SHOULD REFRESH LIST OF PROEJCTS NOW")
        getProjects();
      }
    }

    

    return(
      <Router>
        <div className="App container-fluid p-0" >
          <ToastContainer />
          
          {showNewIssueModal ? <NewIssue dismissCb={dismissNewIssueModal} /> : ""}
          {showNewProjectModal ? <NewProject dismissCb={dismissNewProjectModal} /> : ""}
          
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
                  <TasksPage speed={sidebarTransitionSpeed} sidebarState={sidebarState} modalCb={setShowNewIssueModal} /> 
          </Route>

          <Route path='/projects' exact>
            <Sidebar speed={sidebarTransitionSpeed} cb={setSidebarState} />
            <ProjectsPage speed={sidebarTransitionSpeed} sidebarState={sidebarState} modalCb={setShowNewProjectModal} dataCb={getProjects} />
          </Route>

          <PrivateRoute path='/test' cond={authState}> <TestComp title="/test route" /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
