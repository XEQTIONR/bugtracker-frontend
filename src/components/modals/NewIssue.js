import React from 'react'
import TextField from '../atomic/TextField'
import Button from '../atomic/Button'
import SelectField from '../atomic/SelectField'
import TextArea from '../atomic/TextArea'
function NewIssue(props){


  return (

      <div className="modal-background d-flex justify-content-center align-items-center"
      onClick={()=>props.dismissCb(false)}
      >
        {/* <div> */}
          <form className="card bg-gray-100" onClick={(e)=>{ e.stopPropagation(); console.log("FORM CLICKED")}}
            style={{ overflowY : "show", maxHeight: "90%"}}
          >
            <div className="card-body">
              <div className="form-group">
                <label>Title / Summary</label>
                <TextField  placeholder="A brief overview"/>
              </div>
              <div className="row">              
                <div className="col-6">

                  <div className="form-group">
                    <label>Issue type</label>
                    <SelectField  values={["Bug", "Task", "New Feature", "Epic"]} />
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
                      <SelectField  values={[{value : "Bug", icon : "fas fa-bug mr-3"}, 
                      {value : "Task", icon : "fas fa-check-square mr-3"}, 
                      {value :"New Feature", icon: "fas fa-star mr-3"}, 
                      {value :"Epic", icon : "fas fa-exclamation-triangle mr-3"}]} />
                      
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


        {/* </div> */}


      </div>


  )

}

export default NewIssue