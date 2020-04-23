import React from 'react'


class IssueTypeIcon extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return (

      <div className={"d-flex justify-content-center align-items-center badge-" + this.props.color }
        style={{width : "1em", height: "1em", borderRadius : "3px", position: "relative", top : "1px" }}>
        
        <i style={{fontSize : ".6em"}} className={this.props.icon}></i>
      </div>

    )

  }

}

export default IssueTypeIcon