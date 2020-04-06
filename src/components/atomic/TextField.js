
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
        //this.state = {placeholder : props.placeholder, label : "INITIAL"};

        this.handleChange = props.change;
    }

    // handleChange(e){
    //     e.preventDefault();
    //     //this.setState({label : e.target.value});
    // }

    render() {

      let label =
          <label className="col-md-3 col-form-label text-left ">
            {this.props.label}
            </label> 

      let input_group_append = 
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span> {this.props.inputGroupAppend} </span>
                    </div>
                  </div>

      let label_set  = this.props.label != null ? true : false;

        
      return (
          <div className="form-group row justify-content-center">
                  { this.props.label != null ? label : ''}
              <div className={ label_set ? "col-md-9" : "col-12"}>
                <div className="input-group">
                  <input className="form-control" type={this.props.type !== undefined ? this.props.type : 'text'} onChange={this.handleChange} placeholder={this.props.placeholder}></input>
                      { this.props.inputGroupAppend != null ? input_group_append : ''}
                  </div>
                </div>
              </div>
            )            
        
    }



}


export default  TextField;
