
import React, {Component} from 'react';

// type
// Props = {
//
// };
// type
// State = {
//
// };

// function TextField(props) {
//     return (
//         <input type="text" placeholder={props.placeholder} style={{display: "block"}}></input>
//     )
// }


class TextField extends Component {

  constructor(props){
      super(props);
      this.state = {val : props.val};

      //this.handleChange = props.change;
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
      e.preventDefault();
      
      //set internal state
      this.setState({val : e.target.value});
      
      //call to change callback
      this.props.change(e.target.value);
  }

  render() {

    let input_group_append = 
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span> {this.props.inputGroupAppend} </span>
                  </div>
                </div>
    return (
      <div className="input-group">
        <input className="form-control" 
            type={this.props.type !== undefined ? this.props.type : 'text'} 
            value={this.state.val} onChange={ (event) => this.handleChange(event)} 
            placeholder={this.props.placeholder} />
        {this.props.inputGroupAppend != null ? input_group_append : ''}
      </div>
          )            
      
  }



}


export default  TextField;
