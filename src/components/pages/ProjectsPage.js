import React from 'react'
import Page from '../atomic/Page'
import store from '../../store'
import {Link} from 'react-router-dom'

function ProjectsPage(props){

  let projects_render
  
  let projects = store.getState().ProjectReducer.projects
  
  if(projects ===  null)
  {
    props.dataCb()
    projects_render = ''    
  }
  else  
  {
    projects_render =  projects.map((project) =>

      <div className="col-3">
    <Link to={'/projects/'+project.id}>
            <div className="card">
              <div className="card-body">
                
                <h5 className="">{project.abbr}</h5>
                <p>{project.name}</p>
              </div>
            </div>
      </Link>
      </div>
    )
  }


  const new_project_card = 
  
  <div className="col-3">
    <div className="card" onClick={() => { if(props.modalCb!=undefined) props.modalCb(true)}}>
      <div className="card-body">
        
        <h5 className="">New project</h5>
        <p>"Create a new project"</p>
      </div>
    </div>
  </div>
  return(

    

    <Page speed={props.speed} sidebarState={props.sidebarState}>

        <div className="row mx-2 mt-3 mb-3">
          <div className="col-9">
            <h2 className="ml-1 text-muted d-inline">Projects</h2>
          </div>
          <div className="col-3">
            {/* <h2 className="ml-1">Tasks Page</h2> */}
          
                  <button className="btn btn-primary btn-icon-split btn-sm p-0 ml-5 mb-3 "
                          onClick={() => { if(props.modalCb!=undefined) props.modalCb(true)}}
                  >
                    <span className="icon text-white-50">
                      <i className="fa fa-plus"></i>
                    </span>
                    <span className="text">Create a new project</span>
                  </button>
          </div>
        </div>
        <div className="row mx-2 mb-4">
          <div className="col-12">
              <h4 className="ml-1">Your Project</h4>
          </div>
        </div>

        <div className="row mx-2">
          
          {projects_render}
          {new_project_card}
        
        </div>

        
    </Page>
  )



}

export default ProjectsPage