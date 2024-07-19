import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../Firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const Logina = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const user = await signInWithEmailAndPassword(
              auth,
              email,
              password
          )
          console.log(user)

          navigate('/home')
      } catch (error) {
          console.log(error)
      }
  }

  const googleClick = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider)

        navigate('/home');
    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
    <form className='logf' onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  
</form>
<Link to='/register'>Register New User</Link>
<div className="container text-center">
                    <div className='d-flex justify-content-center align-items-center'>

                        <button

                            onClick={googleClick}

                            className="btn d-flex justify-content-center align-items-center"
                            style={{
                                backgroundColor: 'white',
                                width: '72%'
                            }}
                        >
                            <div style={{ width: '12%' }}>
                                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <h2 style={{
                                    fontWeight: 'bold',
                                    color: 'red'
                                }}
                                >Login With Google</h2>
                            </div>
                        </button>
                    </div>
                </div>
    </>
    
  )
}
export default Logina;