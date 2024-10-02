"use client"
import Header1 from "../components/Header1"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { signIn } from 'next-auth/react';


function Login()
{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [logingoing,setLogingoing]=useState(false);
  async function handleOnSubmit(ev)
  {

    ev.preventDefault();
    setLogingoing(true);
    await signIn('credentials',{email,password,callbackUrl: '/' });
    // const res=await fetch('/api/login',{
    //   method:'POST',
    //   body:JSON.stringify({email,password}),
    //   headers:{'Content-Type':'application/json'}
    // })
    // if(res.ok)
    // {

    // }
    // else{

    // }
    setLogingoing(false)
    // setEmail(" ");
    // setPassword(" ");
  }
  return <>
  <Header1/>
  <h1 className="text-center mt-20">Login</h1>
  <div className="bg-gray-300 w-[700px] ml-80 rounded-3xl">
  
  <form className="ml-0 mt-10 p-20" onSubmit={handleOnSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"520px"}} onChange={event=>{setEmail(event.target.value)}} disabled={logingoing}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" style={{width:"520px"}}
    onChange={event=>{setPassword(event.target.value)}} disabled={logingoing}/>
  </div>
  <button type="submit" className="btn btn-primary w-full" disabled={logingoing}>Login</button>
  <button onClick={()=>signIn('google',{ callbackUrl: '/' })} type="button" class="btn btn-light mt-3 w-full">Continue With Google</button>
</form>

</div>
  </>
}
export default Login;