import React, {useEffect, useState} from 'react'
import Page from '../atomic/Page'
import store from '../../store'
import {useParams} from 'react-router'

import {setCurrentProjectState} from '../../store/actions/index'

import axios from 'axios'

function ProjectPage({ speed, sidebarState}){ 


  const params = useParams()

  const [project, setProject] = useState(null)

  const [issues, setIssues] = useState(null)

  const [status, setStatus] = useState('init')

  
  
  const getIssues = (project_id) => {
    axios.get('http://bugtracker.local/api/projects/'+project_id+'/issues')
        .then(res => {
          setIssues(res.data)
        })
        .catch(error => {
          console.log("get issues error", error.response)
        })
  }
  
  const getProject = (project_id) => {

      axios.get('http://bugtracker.local/api/projects/'+project_id)
            .then(res => {
              
              console.log("api call res")
              console.log(res.data)
              setProject(res.data)

              store.dispatch(setCurrentProjectState({current_project : res.data}))
              setStatus('project-set')

              getIssues(project_id)

            })
            .catch(error =>{
                console.log('api call error')
                console.log(error.response)
            })

  }

  let projects
  //const getProject = 

  useEffect(() => {
    
    
    console.log('useEffect called')
    
    projects = store.getState().ProjectReducer.projects

    if(projects!=null)
    {
        let theproject = projects.find(element => element.id == params.id) // dbl quote string == int

        if(theproject!= undefined)
        {
          setProject(theproject)
          getIssues(theproject.id)
          store.dispatch(setCurrentProjectState({current_project : theproject}))
          setStatus('project-set')
        }
    }
    else
      getProject(params.id)




  }, [])


  let issue_render = issues == null ? "Loading" :
                      issues.map(issue =>
                        <li className="list-group-item">
                          <i className={issue.type.icon}></i>
                          <b>{project.abbr}-{issue.serial_no}</b> 
                          <span className="ml-2">{issue.title}</span>
                        </li>
                      )


  let content = (status === 'init') ? '' :
        <React.Fragment>
          <div className="row mx-2 mt-3 mb-3">
            
            <div className="col-12">
              <h2 className="ml-1">{project.name}</h2>
              <h3 className="ml-1 text-muted">{project.abbr}</h3>
            </div>
        
            <div className="col-12">
              <p>{project.description}</p>
            </div>
          
          </div>
          <div className = "row mx-2 justify-content-center">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                      {issue_render}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>

  return(

    
    
    <Page speed={speed} sidebarState={sidebarState}>
    <div className="row mx-2 mt-3 mb-3">
          <div className="col-12">
            {/* <h2 className="ml-1">Tasks Page</h2> */}
            {content}
          </div>
    </div>
    </Page>
  )


}

export default ProjectPage