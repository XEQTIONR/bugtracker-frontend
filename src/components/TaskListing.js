import React from 'react'
import IssueTypeIcon from "./atomic/IssueTypeIcon"


function TaskListing(props){


  return (

    <React.Fragment>
      <div className="row pt-2">
        <div className="col-10">
        <h5 className="d-flex justify-content-start align-items-center">
          <IssueTypeIcon icon={props.icon} color={props.color} />
          <span className="ml-2"> {props.proj_abbr}-{props.serial_no}</span>
        </h5>
        </div>
        <div className="col-2">
          <button className="btn btn-sm p-0 d-block ml-auto mr-3" style={{position: "relative",top: "-4px"}}>
          <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="pb-0">{props.title}</h3> 
          <h6>Description</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
            {props.description}
        </div>
      </div>
    </React.Fragment>

  )

}

export default TaskListing