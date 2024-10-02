"use client"
import "../globals.css"
import { signOut, useSession } from "next-auth/react";
function Header()
{
  const session=useSession();
  console.log(session);
  const status=session.status;
  let userName="guest";
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  else if (status === 'unauthenticated') {
    // return null; // Or handle unauthenticated state appropriately
  }
  else{
     userName=session.data.user.name;
  }
  
  
  return <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ml-10 mr-10" style={{
    // position: 'absolute',
    top: '0',
    left: '0',
    width: '95%',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
 
    color: 'white',
    zIndex:"1"
  }}>
  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    
    <span className="text-gray-300 text-5xl header-glow" style={{ fontFamily: 'Poppins', fontStyle: 'italic' }}>Bite and Bliss</span>
  </a>

  <ul className="nav nav-pills">
    <li className="nav-item"><a href="/" className="nav-link hover:bg-blue-600 "  style={{ color: '#E0E0E0' }} aria-current="page">Home</a></li>
    <li className="nav-item"><a href="#" className="nav-link hover:bg-blue-600"style={{ color: '#E0E0E0' }} >About us</a></li>
    {
      status==="authenticated" &&(
        <>
        
                <button type="button " className="btn btn-outline-light hover:text-gray-950 text-white mr-5" 
  ><a className="no-underline" href="/profile" >Welcome {userName}</a></button>
        <button type="button " className="btn btn-outline-light hover:text-gray-950 text-white" onClick={() => {
    signOut({ redirect: false, callbackUrl: "/" })
      .then(() => {
        window.location.href = '/';
      });
  }}><a className="no-underline" href="/" >Logout</a></button>
        </>
      )
    }
    {
      status==='unauthenticated' && (
        <>
         <div className="ml-2 flex gap-2">
    <button type="button" className="btn btn-outline-light" ><a className="no-underline" href="/login">Login</a></button>
    <button type="button " className="btn btn-outline-light hover:text-gray-950 text-white" ><a className="no-underline" href="/register">Register</a></button>
    </div>
        </>
      )
    }
   
    
  </ul>
</header>

}
export default Header;

