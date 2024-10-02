// "use client"
// import { useState } from "react";
// import Header1 from "../components/Header1"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Link from "next/link";

// export default function RegisterPage()
// {
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   const [userCreated,setUserCreated]=useState(false);
//   const [creatingUser, setCreatingUser]=useState(false)
//   const [error,setError]=useState(false);
//   const [name,setName]=useState("");
//   const [contact,setContact]=useState(0);
//   async function handleFormSubmit(ev)
//   {
//     ev.preventDefault();
//     setUserCreated(false)
//     setCreatingUser(true);
//     setError(false);
//     // const resp=await fetch('/api/register',{
//     //   method:'POST',
//     //   body:JSON.stringify({email,password,name,cont}),
//     // headers:{'Content-Type':'application/json'}});
//     console.log({ email, password, name, contact: parseInt(contact) });

//     const resp = await fetch('/api/register', {
//       method: 'POST',
//       body: JSON.stringify({ email, password, name, contact }),
//       headers: { 'Content-Type': 'application/json' }
//     });
//     if(resp.ok)
//     {
      
//     setUserCreated(true);
//     setEmail("");
//     setPassword("");
//     }
//     else{
//       setError(true);
//     }
//     setCreatingUser(false);

    
//   }
//   return (
//   <>
//   <Header1/>
//   <h1 className="text-center mt-20">Register</h1>
//   {
//     userCreated && (
//       <div className="my-4 text-center">
//         User Created. Now you can login 
//         <Link href={'/login'}>  Login
//          &raquo;</Link>
//         </div>
//     )
//   }
//   {
//     error && (<div className="my-4 text-center">
//       This username already exists please try again
//     </div>)
//   }
//   <div className="bg-gray-300 w-[700px] ml-80 rounded-3xl">
  
//   <form className="ml-0 mt-10 p-20" onSubmit={handleFormSubmit}>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"520px"}} onChange={(event)=>{setEmail(event.target.value)}} disabled={creatingUser}/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" style={{width:"520px"}}  onChange={(event)=>{setPassword(event.target.value)}} disabled={creatingUser}/>
//   </div>
//   <div className="mb-3">
//     <label className="form-label">Name</label>
//     <input type="text" className="form-control" style={{width:"520px"}}  onChange={(event)=>{setName(event.target.value)}} disabled={creatingUser}/>
//   </div>
//   <div className="mb-3">
//     <label className="form-label">Contact</label>
//     <input type="text" className="form-control" style={{width:"520px"}}  onChange={(event)=>{setContact(event.target.value)}} disabled={creatingUser}/>
//   </div>

//   <button type="submit" className="btn btn-primary" disabled={creatingUser}>Register</button>
//   <button type="button" class="btn btn-light mt-3 w-full">Continue With Google</button>
// </form>
// </div>
//   </>
// )
// }



"use client"
import { useState } from "react";
import Header1 from "../components/Header1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const admin=false;
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setUserCreated(false);
    setCreatingUser(true);
    setError("");

    // Basic validation
    if (!email || !password || !name || !contact) {
      setError("All fields are required.");
      setCreatingUser(false);
      return;
    }
    console.log(email, password, name, contact);
    const resp = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, contact,admin }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (resp.ok) {
      setUserCreated(true);
      setEmail("");
      setPassword("");
      setName("");
      setContact("");
    } else {
      const errorData = await resp.json();
      setError(errorData.message || "An error occurred. Please try again.");
    }
    
    setCreatingUser(false);
  }

  return (
    <>
      <Header1 />
      <h1 className="text-center mt-20">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User Created. Now you can login 
          <Link href={'/login'}>  Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center text-danger">
          {error}
        </div>
      )}
      <div className="bg-gray-300 w-[700px] mx-auto rounded-3xl">
        <form className="p-20" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              style={{ width: "520px" }} 
              onChange={(event) => setEmail(event.target.value)} 
              disabled={creatingUser}
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              style={{ width: "520px" }}  
              onChange={(event) => setPassword(event.target.value)} 
              disabled={creatingUser}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              style={{ width: "520px" }}  
              onChange={(event) => setName(event.target.value)} 
              disabled={creatingUser}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact</label>
            <input 
              type="tel" 
              className="form-control" 
              style={{ width: "520px" }}  
              onChange={(event) => setContact(event.target.value)} 
              disabled={creatingUser}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={creatingUser}>Register</button>
          <button type="button" className="btn btn-light mt-3 w-full">Continue With Google</button>
        </form>
      </div>
    </>
  );
}
