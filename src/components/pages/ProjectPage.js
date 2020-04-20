import React, {useEffect, useState} from 'react'
import Page from '../atomic/Page'
import store from '../../store'
import {useParams} from 'react-router'

import {setCurrentProjectState} from '../../store/actions/index'

import axios from 'axios'

function ProjectPage({ speed, sidebarState}){ 


  const params = useParams()

  const [project, setProject] = useState(null)

  const [status, setStatus] = useState('init')

  const getProject = (project_id) => {

      axios.get('http://bugtracker.local/api/projects/'+project_id)
            .then(res => {
              
              console.log("api call res")
              setProject(res.data)
              store.dispatch(setCurrentProjectState({current_project : res.data}))
              setStatus('project-set')
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
          store.dispatch(setCurrentProjectState({current_project : theproject}))
          setStatus('project-set')
        }
    }
    else
      getProject(params.id)




  }, [])

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