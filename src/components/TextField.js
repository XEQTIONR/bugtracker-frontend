
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
        return (
            <div className="form-group row ">
                <label className="col-md-4 col-form-label text-left text-md-right">
                {this.props.label}
                </label>
                <div className="col-md-6">
                <input className="form-control" type={this.props.type !== undefined ? this.props.type : 'text'} onChange={this.handleChange} placeholder={this.props.placeholder}></input>
                </div>
            </div>
        );
    }



}


export default  TextField;
