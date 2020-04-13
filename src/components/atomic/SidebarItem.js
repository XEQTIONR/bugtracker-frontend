import React from 'react'
// import SidebarDivider from './atomic/SidebarDivider';

function SidebarItem(props){


  
  const is_icon = props.icon !=undefined
  
  return (
    
    // <React.Fragment>
  

    <div className="sidebar-list-item" style={{flexDirection : props.open ? 'row' : 'column'}}>
      <i className={props.open ? (is_icon ? props.icon : "")+" mr-2" : (is_icon ? props.icon : "")+" mb-2"}> </i>
      <span className="" style={{fontSize : ".9rem", paddingBottom : ".1rem"}}>{props.title}</span>
      
    </div>
    
    // </React.Fragment>

  )


}

export default SidebarItem