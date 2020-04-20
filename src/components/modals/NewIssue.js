import React, {useState, useEffect} from 'react'
import TextField from '../atomic/TextField'
import Button from '../atomic/Button'
import SelectField from '../atomic/SelectField'
import TextArea from '../atomic/TextArea'
import axios from 'axios'

import store from '../../store'


function NewIssue(props){

  const [issueTypes, setIssueTypes] = useState(null) 
  // const [projects, setProjects] = useState(store.getState().ProjectReducer.projects) 

  
  //cant make projects a state variable as above
  let projects = store.getState().ProjectReducer.projects
  
  if(projects ===  null)
  {
    props.dataCb()
  }


  const getIssueTypes = () =>{

    axios.get('http://bugtracker.local/api/issue_types')
        .then(res => {
          setIssueTypes(res.data.map(type => {return {value : type.name, icon : type.icon}}))
        })
        .catch(error => {
          console.log(' get issue types error');
        })

  }

  
  if(issueTypes === null)
    getIssueTypes()
      
  
  const working = <h1 className="m-auto"><i className="fa fa-spinner fa-pulse"></i></h1>
  
  
  let form = 
    <React.Fragment>
    <div className="form-group">
      <label>Project</label>
      <SelectField values={(projects!=null && projects.length)? projects.map(project=> project.abbr+" - "+project.name) : []} />
    </div> 
    <div className="form-group">
      <label>Title / Summary</label>
      <TextField  placeholder="A brief overview of this ticket"/>
    </div>
    <div className="row">              
      <div className="col-6">
        <div className="form-group">
          <label>Issue type</label>
          <SelectField  values={issueTypes} />
        </div>
      </div>
    </div>
    <div className="form-group">
      <label>Description</label>
      <TextArea classes="form-control"/>
    </div>

    <div className="form-group">
      <label>Assigned To</label>
      <SelectField  values={["Causes", "Side Effect", "Other", "What"]} maxHeight="150px" />      
    </div>

      <Button buttonClasses="btn btn-success float-right" label="test button"/>
      </React.Fragment>
  
  
  
  
  
  
  let content = projects === null || issueTypes=== null
              ? working
              : form 
                      

  return (

      <div className="modal-background d-flex justify-content-center align-items-center"
      onClick={()=>props.dismissCb(false)}
      >          
        <form className="card bg-gray-100" onClick={(e)=>{ e.stopPropagation(); console.log("FORM CLICKED")}}
              style={{ overflowY : "show", maxHeight: "90%", minWidth : content==working ? "auto" : "500px"}}
        >
          <div className="card-body">
              {content}
          </div>

        </form>
      </div>


  )

}

export default NewIssue