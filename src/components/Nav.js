import React from 'react'



function Nav(){

  return ( 
    
    <nav className="navbar navbar-expand-md navbar-dark bg-dark  ">
      <div className="col-md-3 col-xl-4 px-0 px-md-auto">

      <a className="navbar-brand text-primary ml-5 float-md-left" href="#">Bugfixer</a>
      <button style={{float: "right"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="col-md-9 col-xl-8">
        
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link  mr-4" href="#"> Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link  mr-4" href="#">Issues</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  mr-4" href="#">Projects</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Organizations
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Create a New Organzization</a>
            </div>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      </div>
    </nav>

    


  )

}

export default Nav