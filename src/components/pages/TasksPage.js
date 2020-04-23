import React, {useState, useEffect} from 'react'
import Page from '../atomic/Page'
import Button from '../atomic/Button'
import IssueTypeIcon from '../atomic/IssueTypeIcon'
import TaskListing from '../TaskListing'

import axios from 'axios'


function TasksPage(props){

  const [issues, setIssues] = useState(null)
  const [currentIssue, setCurrentIssue] = useState(null)

  const getIssues = () => {
    axios.get('http://bugtracker.local/api/issues')
        .then(res => {
          setIssues(res.data)
        })
        .catch(error => {
          console.log("get issues error", error.response)
        })
  }


  const showIssue = (id) => {

    let is = issues.find(issue => issue.id == id)
    console.log( is )
    setCurrentIssue(is)
  }

  useEffect(() =>{
      if(issues === null)
        getIssues();
      
      else if(issues.length && currentIssue === null)
        setCurrentIssue(issues[0])

  }, [issues])


  let render = issues == null 
              ? ''
              : issues.map(issue => 
                  <li key={issue.id} className="list-group-item d-flex flex-column justify-content-center"
                    onClick={() => showIssue(issue.id)}
                  >
                    {/* <div className="row"> */}
                      <div className="w-100 d-flex justify-content-start align-items-center">
                        <IssueTypeIcon icon={issue.type.icon} color={issue.type.color} />
                        <strong className="ml-2 mr-3">
                          {issue.project.abbr}-{issue.serial_no}
                        </strong>
                      </div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                      <div className="w-100">
                        {issue.title}
                      </div>
                    {/* </div> */}
                  </li>)

  let current_issue_render = currentIssue == null 
                          ? ''
                          :
      <TaskListing icon={currentIssue.type.icon} color={currentIssue.type.color} 
                proj_abbr={currentIssue.project.abbr} serial_no={currentIssue.serial_no}
                title={currentIssue.title} description={currentIssue.description}
      />

  return(

    <Page speed={props.speed} sidebarState={props.sidebarState}>

        <div className="row mx-2 mt-3 mb-3">
          <div className="col-12">
            {/* <h2 className="ml-1">Tasks Page</h2> */}
            <h2 className="ml-1 text-muted">Your Tasks</h2>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-md-3">
            <div className="row">
              <div className="col-12">

              <div className="input-group input-group-sm my-2">
                      <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />

                      <div className="input-group-append">
                        <button type="button" className="btn btn-primary"><i className="fas fa-search"></i></button>
                      </div>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-secondary"><i className="fa fa-filter"></i></button>
                      </div>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-success" onClick={() => { if(props.modalCb!=undefined) props.modalCb(true)}}><i className="fa fa-plus"></i></button>
                      </div>
              </div>
              </div>

            <div className="col-12">
            <div className="card">


            <div className="card-body list-group table-responsive p-0" style={{maxHeight: "75vh"}}>

              <ul className="list-group list-group-flush" style={{overflowY : "scroll"}}>
                {render}
              </ul>
            </div>
            </div>

            </div>

            </div>




          </div>
          <div className="col-md-6">
            {current_issue_render}
          </div> 

          <div className="col-md-3">
            <div className="row">

              <div className="col-12">
              <div className="dropdown">
                <button className="btn-icon-split btn btn-info dropdown-toggle py-0 pl-0" id="" data-toggle="dropdown">
                                  <span className="icon text-white-50">
                                    <i className="fas fa-check"></i>
                                  </span>
                                  <span className="text">Done</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Jackson</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              </div>
            </div>
            <div className="row">

              <div className="col-12 mt-4">
                <h6 className="strong">Assigned to </h6>
                <div className="user-block mt-1">
                  <img className="img-circle img-bordered-sm" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="User Image" />
                  <span className="username mt-1"><a href="#">Sarah Ross</a></span>
                </div>
              </div>

              <div className="col-12 mt-4">
                <h6 className="strong">Assigned by </h6>
                <div className="user-block mt-1">
                  <img className="img-circle img-bordered-sm" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="User Image" />
                  <span className="username mt-1"><a href="#">Sarah Ross</a></span>
                </div>
              </div>

              <div className="col-12 mt-4">
                <h6 className="strong">Reported by </h6>
                <div className="user-block mt-1">
                  <img className="img-circle img-bordered-sm" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="User Image" />
                  <span className="username mt-1">
                    <a href="#">Sarah Ross</a>
                  </span>
                </div>
              </div>

            </div>
          </div>


        </div>

        
    </Page>
  )



}

export default TasksPage