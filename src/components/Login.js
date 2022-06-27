import React from 'react'
import {login, logout} from '../features/user'
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <p><button onClick={()=> {
        dispatch(login({name:"Vysakh", age:19, email:"vysakh@vmail.com"}));
      }}>LOGIN</button></p>
      <p><button onClick={()=>{
        dispatch(logout({name:"", age:0, email:""}));
      }}>LOGOUT</button></p>
    </div>
  )
}

export default Login