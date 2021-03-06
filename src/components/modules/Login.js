import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import TextField from "../atomic/TextField";
import Button from "../atomic/Button";
import ToasterNotification from "./ToasterNotification";
import axios from "axios";
import { Route } from 'react-router-dom';

import store from "../../store"
import {setAuthState, setAuthFailedState}  from "../../store/actions"

function Login() {

        //local state
        const[email, setEmail] = useState('');
        const[password, setPassword] = useState('');
        const[status, setStatus] = useState('idle');


    const login = (e) => {
        e.preventDefault();
     

        let me = this;


        setStatus('working');

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

                              //me.props.onLoginStateChange(true)
                              store.dispatch(setAuthState({ email: res.data.email, name: res.data.name}));
                              
                              }
                            )
                            .catch(error => {
                              console.log("MIDDLEWARE ERROR : " + error)
                              console.log(error.response)
                              store.dispatch(setAuthFailedState({email}))
                            
                            })

                       
                            
                    }

                    setPassword('');
                    setStatus('idle')
                })
                .catch(function(error){
                    console.log("LOGIN CATCH");
                    //console.log( error.response.data.message);
                    console.log("ERROR");
                    console.log(error);

                    // store.dispatch(setAuthState());

                    // console.log("STORE get state");
                    // console.log( store.getState()   )

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
                    
                    store.dispatch(setAuthFailedState({email}))
                    
                    setPassword('');
                    setStatus('idle');
                });
        }).catch(function(error){
            console.log("CSRF COOKIE catch");
            console.log(error.response.data.message)

            store.dispatch(setAuthFailedState({email}))
            setStatus('idle');
        });

    }



      
      let idle = <div className="card-body">
        <div className="row justify-content-center mb-4">
          <small><strong>Sign in to your account</strong></small>
        </div>
        
        

        <div className="form-group row justify-content-center">
          <label className="col-md-3 col-form-label text-left ">
            Email
          </label> 
          <div className="col-md-9">
            {/* <div className="input-group">   */}
                <TextField change={setEmail} val={email}  label="Email" placeholder="Your Email Address" type="email"/>
            {/* </div> */}
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <label className="col-md-3 col-form-label text-left ">
            Password
          </label> 
          <div className="col-md-9">
            {/* <div className="input-group">   */}
                <TextField change={setPassword} val={password} label="Password" placeholder="Your Password" type="password"/>
            {/* </div> */}
          </div>
        </div>







        
        <div className="form-group row">
            <div className="col-md-3 offset-md-9 mt-1 mt-md-2 ">
                <Button onClick={login} label="Sign In" buttonClasses="btn btn-primary btn-block" blockThreshold="768"/>
            </div>
        </div>
    </div>
    
    let working =  
        <div className="card-body">
          <div className="row justify-content-center mb-4">
            <small><strong>Signing in to your account</strong></small>
          </div>
        </div>


    let alreadyLoggedIn =  
    <div className="card-body">
      <div className="row justify-content-center mb-4">
        <small><strong>Already Logged In</strong></small>
      </div>
    </div>
      
      
        return (

          <div className="card">
              {/* <div className="card-header">
                  Login Component
              </div> */}
              {/* { this.state.status == 'working' ? working : idle } */}

              { store.getState().AuthReducer.authState ? alreadyLoggedIn : (status == 'working' ? working : idle) }
              
          </div>
        );
}

export default Login;