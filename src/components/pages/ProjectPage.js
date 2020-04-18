import React, {useEffect, useState} from 'react'
import Page from '../atomic/Page'
import store from '../../store'
import {useParams} from 'react-router'

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
          setStatus('project-set')
        }
    }
    else
      getProject(params.id)




  }, [])

  let content = (status === 'init') ? '' :
        <React.Fragment>
          <h2>{params.id}</h2>
          <h3>{project.name}</h3>
          <h4>{project.abbr}</h4>
        </React.Fragment>

  return(

    
    

    <Page speed={speed} sidebarState={sidebarState}>
          <h1>Single project page</h1>
          {content}
    </Page>
  )


}

export default ProjectPage