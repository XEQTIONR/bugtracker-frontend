import React, {useState} from 'react'
import SidebarItem from './SidebarItem'
import logo from '../logo.svg';

function Sidebar(props){
  
  const LEFT = "-210px" 

  const [sidebarCSS, setSidebarCSS] = useState({
    left: LEFT,
  })

  const [overlayCSS, setOverlayCSS] = useState({
    left: LEFT,
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
    setSidebarCSS({ left:LEFT  })
      setOverlayCSS({ display: "none" })
      setMyState({open : false})
      notify(false) // myState.open does not update in time




}

const toggleSidebar = () =>{

  myState.open ? closeSidebar() : openSidebar()



}


return(
  
  <React.Fragment>
  <div className="sidebar-wrapper" style={sidebarCSS} >

    <div className="logo w-100 mt-4" onClick={toggleSidebar}>
        <img src={logo} className="App-logo d-block ml-auto" alt="logo"
        
        style={{height : "40px",
        transition : "margin .5s",
        marginRight : myState.open ? "40%" : "8px",
      
      }} 
        />
    </div>
    {/* <div className="w-100 m-0 d-flex justify-content-start align-items-center" style={{height: "74px"}}> */}
      {/* <h4 className="text-light ml-4">Main Options</h4> */}
    {/* </div> */}
    <ul className="list-group" style={{display : sidebarCSS.left == LEFT ? "none" : "inherit"}}>
      <SidebarItem title="Item 1" />
      <SidebarItem title="Item 2" />
      <SidebarItem title="Item 3" />
    </ul>
  </div>
  <div className="sidebar-overlay" style={overlayCSS} onClick={closeSidebar}></div>
  </React.Fragment>



)


}

export  default Sidebar