import React from 'react'
import Page from '../atomic/Page'

function ProjectsPage(props){


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
        <div className="row mx-2">
          <div className="col-12">
              <h4 className="ml-1">Your Project</h4>
          </div>
        </div>

        
    </Page>
  )



}

export default ProjectsPage