import React, {useState} from 'react'
import logo from '../logo.svg';
import SidebarItem from './atomic/SidebarItem'
import SidebarDivider from './atomic/SidebarDivider'
import SidebarSection from './SidebarSection'

function Sidebar(props){
  
  const LEFT = "105px" 

  const [sidebarCSS, setSidebarCSS] = useState({
    width: LEFT,
  })

  const [overlayCSS, setOverlayCSS] = useState({
    display: "none",
  })

  const [myState, setMyState] = useState({
    open : false
  })


  const notify = (state) =>{

    if(props.cb !== undefined)
      props.cb(state)
  }

  const openSidebar = () =>{
      setSidebarCSS({ width: "225px" , transition: "width " +
                                        props.speed!=undefined? props.speed : " 2s"})
      setOverlayCSS({ display: "inline" })
      setMyState({open : true})
      notify(true) // myState.open does not update in time
  }

  const closeSidebar = () =>{
    setSidebarCSS({ width: LEFT , transition: "width " +
                                        props.speed!=undefined? props.speed : " 2s"})
      setOverlayCSS({ display: "none" })
      setMyState({open : false})
      notify(false) // myState.open does not update in time




}

const toggleSidebar = () =>{

  myState.open ? closeSidebar() : openSidebar()



}


return(
  
  <React.Fragment>
  <div className="sidebar-wrapper px-3" style={sidebarCSS} >

    <div className="logo w-100 py-3" onClick={toggleSidebar} >
        <img src={logo} className="App-logo d-block mx-auto" alt="logo"
        
        style={{height : "40px",
        transition : "margin "+ props.speed==undefined ? ".1s" : props.speed,
        // marginRight : myState.open ? "40%" : "25px",
      
      }} 
        />
    </div>
    
    <SidebarDivider open={myState.open} />
    
    <SidebarSection title="Modules" open={myState.open}>
      <SidebarItem title="Organizations" to="/" icon="fas fa-home" open={myState.open} />
      <SidebarItem title="Tasks" to="/tasks"  icon="fas fa-clipboard-list" open={myState.open} />
      <SidebarItem title="Mission Control"  to="/home" icon="fas fa-rocket"  open={myState.open} />
      <SidebarItem title="Projects"  to="/projects" icon="fas fa-drafting-compass"  open={myState.open} />
    </SidebarSection>

  </div>


  <div className="sidebar-overlay" style={overlayCSS} onClick={closeSidebar}></div>
  </React.Fragment>



)


}

export  default Sidebar