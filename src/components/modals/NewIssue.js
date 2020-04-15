import React from 'react'
import TextField from '../atomic/TextField'
import Button from '../atomic/Button'
import SelectField from '../atomic/SelectField'
function NewIssue(props){


  return (

      <div className="modal-background d-flex justify-content-center align-items-center"
      onClick={()=>props.dismissCb(false)}
      >
        {/* <div> */}
          <form className="card bg-gray-100 w-50" onClick={(e)=>{ e.stopPropagation(); console.log("FORM CLICKED")}}>
            <div className="card-body">
              <div className="form-group">
                <label>Title / Summary</label>
                <TextField  placeholder="A brief overview"/>
              </div>
              <div className="row">
                {/* <div className=" col-6 pl-0">
                  <div className="form-group">
                    <label>Issue type</label>
                    <select className="selectpicker" data-style="btn-primary">
                      <option data-icon="fas fa-times-circle"> Bug</option>
                      <option data-icon="fas fa-chevron-circle-up"> Improvement</option>
                      <option data-icon="fas fa-check-circle"> Task</option>
                      <option data-icon="fas fa-plus-circle"> New Feature</option>
                    </select>
                  </div>
                </div> */}
              
                <div className="col-6">



                <div className="form-group">
                  <label>Issue type</label>
                  <SelectField  values={["Bug", "Task", "New Feature", "Epic"]} />
                </div>




                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea className="w-100"></textarea>
              </div>


                <Button buttonClasses="btn btn-success float-right" label="test button"/>
            </div>

          </form>


        {/* </div> */}


      </div>


  )

}

export default NewIssue