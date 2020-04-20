import React, {useState, useEffect} from 'react'
import TextField from '../atomic/TextField'
import Button from '../atomic/Button'
import SelectField from '../atomic/SelectField'
import TextArea from '../atomic/TextArea'
import axios from 'axios'

import store from '../../store'


function NewIssue(props){

  const [issueTypes, setIssueTypes] = useState([]) 

  const getIssueTypes = () =>{

    axios.get('http://bugtracker.local/api/issue_types')
        .then(res => {
            
          let dat = res.data.map(type => {return {value : type.name, icon : type.icon}})

          setIssueTypes(dat)
          console.log("ISSUE TYPES")
          console.log(res.data)          
          console.log("dat")
          console.log(dat)
          console.log("issueTypes after set")
          console.log(issueTypes)
        })
        .catch(error => {
          console.log(' get issue types error');
        })

  }

  // useEffect(() => {
    
  //   getIssueTypes()
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [])



  let projects = store.getState().ProjectReducer.projects

  if(projects === null)
    props.dataCb()

  if(!issueTypes.length)
    getIssueTypes()

  
  const working = <h1 className="m-auto"><i className="fa fa-spinner fa-pulse"></i></h1>
  
  
  const form = 
  
  <form className="card bg-gray-100" onClick={(e)=>{ e.stopPropagation(); console.log("FORM CLICKED")}}
  style={{ overflowY : "show", maxHeight: "90%"}}
>
  <div className="card-body">
    <div className="form-group">
      <label>Project</label>
      <SelectField values={projects.map(project=> project.abbr+" - "+project.name)} />
    </div>
    <div className="form-group">
      <label>Title / Summary</label>
      <TextField  placeholder="A brief overview"/>
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
    <div className="row">
      <div className="col-6">
          <div className="form-group">
            <label>Related To</label>
            <SelectField  values={issueTypes} />
          </div>
      </div>
      <div className="col-6">
          <div className="form-group">
            <label>Relation type</label>
            <SelectField  values={["Causes", "Side Effect", "Other", "What"]} />
          </div>
      </div>
    
    </div>

    <div className="form-group">
      <label>Assigned To</label>
      <SelectField  values={["Causes", "Side Effect", "Other", "What"]} maxHeight="150px" />      
    </div>

      <Button buttonClasses="btn btn-success float-right" label="test button"/>
  </div>

  </form>
  
  
  
  
  
  
  let content = projects === null || !issueTypes.length
              ? working
              : form 
                      

  return (

      <div className="modal-background d-flex justify-content-center align-items-center"
      onClick={()=>props.dismissCb(false)}
      >          
        {content}
      </div>


  )

}

export default NewIssue