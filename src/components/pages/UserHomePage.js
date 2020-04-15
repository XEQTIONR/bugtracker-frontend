import React  from 'react';
import Page from '../atomic/Page'
import Nav from "../Nav";

function UserHomePage(props) {

    return (
      <Page speed={props.speed} navbar={props.navbar} sidebarState={props.sidebarState}>
      
      <div className="row  mx-2 mt-4">
        <div className="col-12">
        <h1 className="ml-1">Mission Control</h1>
        <h5 className="ml-1 text-muted">High level overview of all your work</h5>
        </div>
      </div>
      
      <div className="row  mx-2 mt-5 mb-3" >
        
        <div className="col-12">
          <h5 className="ml-1">Projects you been working on</h5>
        </div>
        
      </div>

      
      <div className="row mx-2">


        <div className="col-3">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Messages</span>
                <span class="info-box-number">1,410</span>
              </div>
            </div>
        </div>
        <div className="col-3">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Messages</span>
                <span class="info-box-number">1,410</span>
              </div>
            </div>
        </div>
        <div className="col-3">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Messages</span>
                <span class="info-box-number">1,410</span>
              </div>
            </div>
        </div>

        <div className="col-3">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Messages</span>
                <span class="info-box-number">1,410</span>
              </div>
            </div>
        </div>
        
        
      </div>
      <div className="row mx-2 mt-1">
        <div className="col-3">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="fas fa-plus"></i></span>

              <div class="info-box-content d-flex justify-content-center align-items-center">
                <span class="info-box-text ">Create a new Project</span>
                {/* <span class="info-box-number">1,410</span> */}
              </div>
            </div>
        </div>
      </div>

      <div className="row  mx-2 mt-5 mb-3" >
        
        <div className="col-md-6">
          <h5 className="ml-1 mb-4 w-100">Issued Tasks <button className="float-right mr-2">SOme</button></h5>
          <ul class="list-group">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
          </ul> 
        </div>
        <div className="col-md-6">
          <h5 className="ml-1 mb-4">Recently Completed</h5>
          <ul class="list-group">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
          </ul> 
        </div>
        
        
      </div>


    </Page>

    )

}

export default UserHomePage