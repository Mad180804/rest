import "../globals.css";
import { signOut, useSession } from "next-auth/react";
function Header1() {
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
  return (
    <header className="flex flex-wrap justify-center py-3 mb-4 border-b  bg-violet-300 pl-10 pr-10 w-full text-center">
      <a href="/" className="flex items-center mb-3 md:mb-0 mr-auto text-decoration-none text-gray-900">
        <span className="text-5xl italic" style={{ fontFamily: 'Poppins' }}>
          Bite and Bliss
        </span>
      </a>

      <ul className="flex space-x-4 items-center">
        <li className="nav-item">
          <a href="/" className="hover:bg-gray-300 px-3 py-2 text-gray-900 rounded">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="hover:bg-gray-300 px-3 py-2 text-gray-900 rounded">
            About us
          </a>
        </li>
        {status==='authenticated' && (<li>
        
        <button type="button " className="btn btn-outline-light hover:text-gray-950 text-white mr-5" 
><a className="no-underline" href="/profile" >Welcome {userName}</a></button>
          <button type="button" className="border text-gray-900 px-3 py-2 rounded hover:bg-gray-300 border-gray-500  " onClick={() => signOut({ callbackUrl: '/' })}>
            <a href="/" className="no-underline">Logout</a>
          </button>
        </li>)
        }
        
        {
          status==="unauthenticated" && (
            <>
          <li>

             <button type="button" className="border border-gray-500 text-gray-900 px-3 py-2 rounded hover:bg-gray-300">
             <a className="no-underline" href="/login">
               Login</a>
             </button>
           </li>
          <li>
            <button type="button" className="border text-gray-900 px-3 py-2 rounded hover:bg-gray-300 border-gray-500 ">
              <a href="/register" className="no-underline">Register</a>
            </button>
          </li>
          </>
          )
        }
      
      </ul>
    </header>
  );
}

export default Header1;

