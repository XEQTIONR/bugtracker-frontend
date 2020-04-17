import React, {Component} from 'react'


class TextArea extends Component{


    constructor(props){
      super(props)

      this.state = {
        val : props.val !== (undefined || null) ? props.val : "" 
      }

      this.render  = this.render.bind(this)
    }

    handle_change(e){
      e.preventDefault()
      this.setState({val : e.target.value});
      
      if(this.props.change != (undefined || null))
        this.props.change(e.target.value)

    }

    render(){

      const classes = this.props.classes != undefined ? this.props.classes : "form-control";      
      const placeholder = this.props.placeholder !== (undefined || null) ? this.props.placeholder : "";


      return (
        <textarea value={this.state.val} placeholder={placeholder} className={classes}
        onChange={(e)=>{ this.handle_change(e) }}
        ></textarea>

      )
    }


}


export default TextArea