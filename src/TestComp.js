import React, {Component} from 'react';

//import axios from "axios"


class TestComp extends Component{


  constructor(props){
    super(props);

    //axios.get('httpy://bugtracker.local')


  }

  render(){ 
    return(
    <h1>{this.props.title}</h1>
  )
  }
}

export default TestComp;