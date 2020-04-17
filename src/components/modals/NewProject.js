import React, {useState} from 'react'
import TextField from '../atomic/TextField'
import Button from '../atomic/Button'
import SelectField from '../atomic/SelectField'
import TextArea from '../atomic/TextArea'
import axios from 'axios'

function NewProject(props){


  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [abbr, setAbbr] = useState("")

  const [myStatus, setMyStatus] = useState("idle")

  const [dismissable, setDismissable] = useState(true)

  const submit = (e) =>{

    e.stopPropagation()
    e.preventDefault()

    setMyStatus("working")

    axios.post('http://bugtracker.local/api/projects',
          {name, description, abbr}      
        )
        .then(res =>{
          console.log("res")
          console.log(res)
        })
        .catch(error =>{

          console.log('error')
          console.log(error)
        })

    console.log("SUBMIT CLICKED")

    console.log("name :" + name)
    console.log("description :" + description)
    console.log("abbr :" + abbr)


  }


  const idle = 
  
  <form className="card bg-gray-100 w-50" onClick={(e)=>{ e.stopPropagation(); console.log("PROJECT FORM CLICKED")}}
  style={{ overflowY : "auto", maxHeight: "90%"}}
  >
    <div className="card-body">

      <div className="form-group">
        <label>Project Name</label>
        <TextField change={setName}  placeholder="A brief overview"/>
      </div>

      <div className="form-group">
        <label>Description</label>
        <TextArea change={setDescription} classes="w-100" />
      </div>

      <div className="row">
        <div className="col-6">
            <div className="form-group">
              <label>Project Identifier</label>
              <TextField change={setAbbr} placeholder="A small 2-3 Letter Identifier"/>
            </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12 mb-1">
          <Button buttonClasses="btn btn-success float-right" label="test button" onClick={submit}/>
        </div>
      </div>

    </div>
  </form>





  return (

    <div className="modal-background d-flex justify-content-center align-items-center"
    onClick={()=> {if(dismissable) {props.dismissCb(false)}}}
    >
      {idle}
    </div>


)



}

export default NewProject