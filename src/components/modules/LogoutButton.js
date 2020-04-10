import React from 'react'
import axios from 'axios'
import store from '../../store'
import {setLogoutState} from '../../store/actions'

function LogoutButton() {

  return(
  <button onClick={(e)=>{
    e.preventDefault();
    axios.post('http://bugtracker.local/logout')
          .then((res) =>{

            console.log("LOGOUT RESPONSE")
            console.log(res)
            store.dispatch(setLogoutState());
          })
          .catch((e)=>{
            console.log("LOGOUT EXcepTiON :")
            console.log(e)
          })

  }}>Logout</button>
  )

}

export default LogoutButton