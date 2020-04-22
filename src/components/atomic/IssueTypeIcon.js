import React from 'react'


class IssueTypeIcon extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return (

      <div className={"d-flex justify-content-center align-items-center badge-" + this.props.color }
        style={{width : "16px", height: "16px", borderRadius : "3px" }}>
        
        <i style={{fontSize : "9px"}} className={this.props.icon}></i>
      </div>

    )

  }

}

export default IssueTypeIcon