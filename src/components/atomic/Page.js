import React from 'react'



function Page(props){


  return (

    <div className="ze-div" style={{ 
      transition: props.speed , 
      marginLeft: props.sidebarState ? '223px' : '105px',
      marginTop :  props.navbar ? "74px" : "0px",
      overflowX : "hidden"
      }}>
        {props.children}
    </div>

  )


}

export default Page