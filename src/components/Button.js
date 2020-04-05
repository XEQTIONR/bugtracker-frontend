// @flow
import React, {Component} from 'react';



class Button extends Component {

    constructor(props) {

        super(props);
        let buttonClasses = props.buttonClasses;
        //buttonClasses =  buttonClasses + " btn-block";

        this.state = {small_screen : false};

        this.blockButton = this.blockButton.bind(this);
    }

    componentDidMount(){
        //this.updatePredecate();

        window.addEventListener("resize", this.blockButton);
        this.blockButton();
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.blockButton);
    }

    blockButton(){
        //console.log("UpdatePredicate :"+ (window.innerWidth < 768));
        this.setState({ small_screen :  window.innerWidth < 768});
    }


    //button does not need to know what it does
    // onClick(e){
    //     e.preventDefault();
    //     console.log("ONCLICK");
    // }

    render(){
        return (
            <button type="button" onClick={this.props.onClick} className={this.state.small_screen ? this.props.buttonClasses + " btn-block" : this.props.buttonClasses}> {this.props.label} </button>
        );
    }
}

export default Button;
