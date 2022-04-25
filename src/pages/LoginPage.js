import React,{useState} from 'react'
import Layout from '../components/Layout'
import { Alert } from '@mui/material'
import { Link,useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const [error, seterror] = useState({
    status:false,
    msg:"",
    type:""
  })
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const actualData={
         email:data.get('email'),
         password:data.get('password')

    }
    if(actualData.email && actualData.password)
    {
      console.log(actualData)
      document.getElementById('login-form').reset()
      seterror({
        status:true,
        msg:"Login Success",
        type:"success"
      })
      navigate('/')
    }
    else{
      seterror({
        status:true,
        msg:"All Fields Are Required",
        type:"error"
      })
    }
  }
  return (
    <Layout>
<section className="banner">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="col-md-6"> </div>
        <div className="col-md-4 float-end">
          <div className="login-section">
            <div className="login-head">
              <h1>LOGIN</h1>
            </div>
            <form onSubmit={handleSubmit} id="login-form">
              <div className="mb-3">
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
              </div>
              <div className="mb-3">
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <div className="forgot"><Link to="/forget" className="forgot-password-link">Forgot password?</Link></div>
              <p>By clicking “Login” you are agreeing to be bound by 
                the <Link to="#">Term of Use</Link></p>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {error.status?<Alert severity={error.type}>{error.msg}</Alert>:""}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>
  )
}

export default LoginPage