import React from 'react'
import { Link } from 'react-router-dom'

function Tester_login() {
  return (
    <div className="container">
          <h1 className="label">Tester Login</h1>
          <form className="login_form">
              <div className="font">Email or Phone</div>
              <input autoComplete="off" type="text" name="email" />
              <div id="email_error">Please fill up your Email or Phone</div>
              <div className="font font2">Password</div>
              <input type="password" name="password" />
              <div id="pass_error">Please fill up your Password</div>
              <Link to='/Tester_home'><button type="submit">Login</button>  </Link>
          </form>
      </div>

  )
}

export default Tester_login