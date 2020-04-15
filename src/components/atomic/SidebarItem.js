import React from 'react'
import {Link} from 'react-router-dom'

// import SidebarDivider from './atomic/SidebarDivider';

function SidebarItem(props){


  
  const is_icon = props.icon !=undefined
  
  return (
    
    // <React.Fragment>
  

    <div className="sidebar-list-item">
      
      <Link to={props.to}  style={{flexDirection : props.open ? 'row' : 'column'}}>
      <i className={props.open ? (is_icon ? props.icon : "")+" mr-2" : (is_icon ? props.icon : "")+" mb-2"}> </i>
      <span className="text-center" style={{fontSize : ".9rem", paddingBottom : ".1rem"}}>{props.title}</span>
      </Link>
     
      
    </div>
    
    // </React.Fragment>

  )


}

export default SidebarItem