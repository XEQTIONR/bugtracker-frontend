import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from "../atomic/TextField";
import Button from "../atomic/Button";

import axios from "axios";


class Login extends Component {

    constructor(props){
        super(props);

        this.state = {email : '', password : ''};

        this.login = this.login.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }


    login(e){
        e.preventDefault();
        //console.log("login function");
        //console.log("EMAIL : " + this.state.email + "  PASSWORD :" + this.state.password)

        let email = this.state.email;
        let password = this.state.password;
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
                              }
                            )
                            .catch(error => {
                              console.log("MIDDLEWARE ERROR : " + error)
                              console.log(error.toJSON())
                            
                            })
                            
                    }
                })
                .catch(function(error){
                    console.log("LOGIN CATCH");
                    console.log( error.toJSON());
                });
        }).catch(function(error){
            console.log("CSRF COOKIE catch");
            console.log(error.toJSON())
        });

    }

    emailChange(e){
        e.preventDefault();
        this.setState({email : e.target.value});
    }

    passwordChange(e){
        e.preventDefault();
        this.setState({password : e.target.value});
    }



    render() {
        return (

          <div className="card">
              <div className="card-header">
                  Login Component
              </div>
              <div className="card-body justify-content-center">
                  <TextField change={this.emailChange} label="E-Mail Address" placeholder="Enter E-Mail Address" type="email" inputGroup="Y"/>
                  <TextField change={this.passwordChange} label="Password" placeholder="Enter Password" type="password"/>
                  <div className="form-group">
                      <div className="col-md-8 offset-md-4 mt-4 px-0 px-md-2">
                          <Button onClick={this.login} label="Login" buttonClasses="btn btn-primary " blockThreshold="768"/>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Login;

ReactDOM.render(<Login />, document.getElementById('root'));
