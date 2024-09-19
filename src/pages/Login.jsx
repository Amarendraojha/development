import React from 'react'
import '../Pages.css/Login.css'

function Login() {
  return (<>
    <h1 className='heading'>Organic Store</h1>
    <div className='maindivlog'>
      <div className='form'>
      <h1 className='login'> Login</h1>
      <form className='form'>
        <input className='inputlogin' type='text'  placeholder='Username or Email address..'></input>
        <input className='inputlogin' type='password'  placeholder='Password..*'></input>
        <label className='agreecondition'> <input className='check' type='checkbox'  placeholder='Password..*'></input> Remember me</label>
        <button className='butt' > LOG IN </button>
        <p> Lost your password?</p>
      </form>
      </div>
    </div>
    </>
  )
}

export default Login