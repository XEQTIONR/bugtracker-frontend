import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import TextField from "../atomic/TextField";
import Button from "../atomic/Button";
import ToasterNotification from "./ToasterNotification";
import axios from "axios";
import { Route } from 'react-router-dom';


class Login extends Component {

    constructor(props){
        super(props);

        this.state = {email : '', password : '', status: 'idle'};

        this.login = this.login.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }


    login(e){
        e.preventDefault();
     
        let email = this.state.email;
        let password = this.state.password;

        let me = this;

        this.setState({'status': 'working'});

        axios.get('http://bugtracker.local/sanctum/csrf-cookie').then(response => {
            // Login...
            axios.post('http://bugtracker.local/login',
                {
                    email : email,
                    password : password
                },{
                    headers : { 'Accept' : 'application/json' }
                })
                .then(function(res){
                    console.log(res);

                    if(res.status == 204)
                    {
                        //window.location.href= 'http://bugify.local/home';
                        axios.get('http://bugtracker.local/api/user')
                            .then(res => {
                              console.log (" THEN RES :")
                              console.log (res)
                              ToasterNotification.success("Successfully logged in.");

                              me.props.onLoginStateChange(true)
                              }
                            )
                            .catch(error => {
                              console.log("MIDDLEWARE ERROR : " + error)
                              console.log(error.response)
                            
                            })

                       
                            
                    }
                    me.setState({password : ""});
                    me.setState({'status': 'idle'});
                })
                .catch(function(error){
                    console.log("LOGIN CATCH");
                    //console.log( error.response.data.message);
                    console.log("ERROR");
                    console.log(error);

                    if(error.response)
                    {
                      console.log("ERROR RESPONSE :")
                      console.log(error.response)
                      ToasterNotification.error(error.response.data.message);
                    }
                    else
                    {
                      //already logged in PROBABLY.
                      console.log("no error response")
                      ToasterNotification.error("No error response");
                    }
                      
                    
                    me.setState({password : ""});
                    me.setState({'status': 'idle'});
                });
        }).catch(function(error){
            console.log("CSRF COOKIE catch");
            console.log(error.response.data.message)
            me.setState({'status': 'idle'});
        });

    }

    emailChange(value){
        this.setState({email : value});
    }

    passwordChange(value){
        this.setState({password : value});
    }



    render() {

        let idle = <div className="card-body">
        <div className="row justify-content-center mb-4">
          <small><strong>Sign in to your account</strong></small>
        </div>
        <TextField change={this.emailChange} val={this.state.email} label="Email" placeholder="Your Email Address" type="email" inputGroup="Y"/>
        <TextField change={this.passwordChange} val={this.state.password} label="Password" placeholder="Your Password" type="password"/>
        <div className="form-group row">
            <div className="col-md-3 offset-md-9 mt-1 mt-md-2 ">
                <Button onClick={this.login} label="Sign In" buttonClasses="btn btn-primary btn-block" blockThreshold="768"/>
            </div>
        </div>
    </div>
    
        let working =  
        <div className="card-body">
          <div className="row justify-content-center mb-4">
            <small><strong>Signing in to your account</strong></small>
          </div>
        </div>
      
        return (

          <div className="card">
              {/* <div className="card-header">
                  Login Component
              </div> */}
              { this.state.status == 'working' ? working : idle }
              
          </div>
        );
    }
}

export default Login;

ReactDOM.render(<Login />, document.getElementById('root'));
