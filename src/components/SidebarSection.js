import React from 'react'
import SidebarDivider from './atomic/SidebarDivider'


function SidebarSection(props){

  let classes = (props.open ? "text-left mt-2" : "text-center mt-2") + " text-uppercase small text-white";

  let title = props.title!=undefined ? <span className={classes}>{props.title}</span>
                                      : "";

  return(
    <div className="w-100 d-flex flex-column sidebar-list-container">
    
      {title}
    
    {props.children}
    
    <SidebarDivider open={props.open} />
    </div>
  )


}

export default SidebarSection