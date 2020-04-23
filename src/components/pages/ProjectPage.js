import React, {useEffect, useState} from 'react'
import Page from '../atomic/Page'
import IssueTypeIcon from '../atomic/IssueTypeIcon'
import store from '../../store'
import {useParams} from 'react-router'

import {setCurrentProjectState} from '../../store/actions/index'

import TaskListing from '../TaskListing'

import axios from 'axios'

function ProjectPage({ speed, sidebarState}){ 


  const params = useParams()

  const [project, setProject] = useState(null)

  const [issues, setIssues] = useState(null)

  const [currentIssue, setCurrentIssue] = useState(null)

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

  


  let issues_render = issues === null ? "Loading" :
                      issues.map(issue =>
                        <li className="list-group-item d-flex justify-content-start align-items-center"
                            onClick={() => {
                              setCurrentIssue(issue)
                            }}
                        >

                          <IssueTypeIcon icon={issue.type.icon} color={issue.type.color} />
                            
                          <span className="ml-2">
                            <strong>{project.abbr}-{issue.serial_no}</strong> 
                          </span>

                          <span className="ml-2">{issue.title}</span>

                        </li>
                      )

  let current_issue_render = currentIssue === null 
                            ? "" 
                            : 
                            <div className="card">
                              <div className="card-body  pt-2">
                                <TaskListing
                                    icon={currentIssue.type.icon} color={currentIssue.type.color}
                                    proj_abbr={project.abbr} serial_no={currentIssue.serial_no}
                                    title={currentIssue.title} description={currentIssue.description}
                                />
                              </div>
                            </div>

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
          <div className = "row mx-2">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  Tasks
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush">
                      {issues_render}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                  {current_issue_render}
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