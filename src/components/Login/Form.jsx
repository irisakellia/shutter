import React from 'react'

const Form = () => {
  return (
    <div>
      <p>Hello!</p>
      <p>Welcome Back</p>
      <div>
        <button> Sign in with Google</button>
        <div className='w-60 h-px bg-gray-400'></div>
        <div>or Sign in with Email </div>
        <div className='w-60 h-px bg-gray-400'></div>
      </div>
      <form>
        <label htmlFor='Email'></label>
       <input type='text' placeholder='irisakellia@gmail.com' id='name' />

        <label htmlFor='Password'></label>
       <input type='text' placeholder='gobitch' id='password' />
      </form>
      <p>Forgot password ?</p>
      <button>Login</button>
      <p>Not registered yet? Create an Account</p>
    </div>
  )
}

export default Form
