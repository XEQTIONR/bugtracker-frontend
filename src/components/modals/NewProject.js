import React, {useState} from 'react'
import TextField from '../atomic/TextField'
import Button from '../atomic/Button'
import SelectField from '../atomic/SelectField'
import TextArea from '../atomic/TextArea'

import ToasterNotification from "../modules/ToasterNotification"
import axios from 'axios'

function NewProject(props){


  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [abbr, setAbbr] = useState("")

  const [myStatus, setMyStatus] = useState("idle")

  const [dismissable, setDismissable] = useState(true)

  const [formSize, getFormSize] = useState(null)

  const submit = (e) =>{

    e.stopPropagation()
    e.preventDefault()

    setMyStatus("working")
    setDismissable(false)


    axios.post('http://bugtracker.local/api/projects',
          {name, description, abbr}      
        )
        .then(res =>{
          console.log("res")
          console.log(res)
          setMyStatus("idle")
          ToasterNotification.success("Project Created")
          setDismissable(true)
          props.dismissCb(false)

        })
        .catch(error =>{
          setMyStatus("idle")
          console.log('error')
          console.log(error.response)
          ToasterNotification.error("Something went wrong")
          setDismissable(true)
        })

    console.log("SUBMIT CLICKED")

    console.log("name :" + name)
    console.log("description :" + description)
    console.log("abbr :" + abbr)


  }




  const idle = 
    <React.Fragment>

      

      <div className="form-group">
        <label className>Project Name</label>
        <TextField change={setName}  placeholder="Enter project name"/>
      </div>

      <div className="form-group">
        <label>Description</label>
        <TextArea change={setDescription} classes="form-control" placeholder="Small description of the project." />
      </div>

            <div className="form-group">
              <label>Project ID</label>
      <div className="row">
        <div className="col-6">
              <TextField change={setAbbr} placeholder="2-3 chars"/>
            </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12 mb-1">
          <Button buttonClasses="btn btn-success float-right" label="test button" onClick={submit}/>
        </div>
      </div>
    </React.Fragment>


const working = <h1 className="m-auto"><i className="fa fa-spinner fa-pulse"></i></h1>





  return (

    <div className="modal-background d-flex justify-content-center align-items-center"
          onClick={()=> {if(dismissable) {props.dismissCb(false)}}}
    >
        <form className="card bg-gray-100 " onClick={(e)=>{ e.stopPropagation(); console.log("PROJECT FORM CLICKED")}}
          style={{ overflowY : "auto", maxHeight: "90%", minWidth: myStatus!="working" ? "375px" : "auto"}}
          >
            <div className="card-body justify-content-center align-items-center">
                { myStatus=="working" ? working : idle }
            </div>
        </form>

    </div>


)



}

export default NewProject