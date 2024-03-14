import React from 'react'
import Layout from '../layout/Layout.js';
import { useState } from 'react'

function Login() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[address,setAddress] = useState("");
    const[phoneNo,setPhone] = useState("");
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
    }
  return (
    <Layout>
        <div className="row justify-content-center" style={{marginBottom:"50px"}}>
          <div className="col-md-4">
            <div className="card mt-5">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control form-control-lg"
                      id="exampleInputName1"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control form-control-lg"
                      id="exampleInputAddress1"
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={phoneNo}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control form-control-lg"
                      id="exampleInputPhoneNo"
                      placeholder="Phone No"
                      required
                    />
                  </div>
      
                  <div className="text-center mb-3">
                    <button type="submit" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#4cbb17' }}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Login