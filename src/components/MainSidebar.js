import React, {useState} from 'react'


function MainSidebar(props){


  const [sidebarCSS, setSidebarCSS] = useState({
    left: "-190px",
  })

  const [overlayCSS, setOverlayCSS] = useState({
    left: "-190px",
  })

  const [myState, setMyState] = useState({
    open : false
  })


  const notify = (state) =>{

    if(props.cb !== undefined)
      props.cb(state)
  }

  const openSidebar = () =>{
      setSidebarCSS({ left: "0px" })
      setOverlayCSS({ display: "inline" })
      setMyState({open : true})
      notify(true) // myState.open does not update in time
  }

  const closeSidebar = () =>{
    setSidebarCSS({ left: "-190px"  })
      setOverlayCSS({ display: "none" })
      setMyState({open : false})
      notify(false) // myState.open does not update in time


}


return(
  
  <React.Fragment>
  <div className="sidebar-wrapper" style={sidebarCSS} onClick={openSidebar}>
    <div className="w-100 m-0 py-4">
      <span>Bugfixer</span>
    </div>
    <ul className="list-group" style={{display : sidebarCSS.left == "-190px" ? "none" : "inherit"}}>
      <li className="list-group-item">Item 1</li>
      <li className="list-group-item">Item 2</li>
      <li className="list-group-item">Item 3</li>

    </ul>
  </div>
  <div className="sidebar-overlay" style={overlayCSS} onClick={closeSidebar}></div>
  </React.Fragment>



)


}

export  default MainSidebar