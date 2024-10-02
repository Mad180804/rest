"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from "../components/Header1"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import "../globals.css"
function Profile()
{
  const session = useSession();
  const status=session.status;
  if(status==='loading')
  {
    return "Loading...";
  }
  if(status==='unauthenticated')
  {
    return redirect("/login")
  }
  let image=session.data.user.image;
  let admin=session.data.user.admin;
  console.log(admin);
  if(!image)
  {
    image="https://i.pinimg.com/236x/02/72/35/02723528ae01d17bbf67ccf6b8da8a6b.jpg"
  }
  return<>
  <div className=' bg-yellow-400 min-h-full' style={{height:"800px"}}> <Header1/>
  <div className='flex justify-center gap-10'><button type="button" class="btn btn-primary"><a href='/profile'>Profile</a></button>
  <button type="button" class="btn btn-primary"><a href='/menu'>Menu</a></button>
  <button type="button" class="btn btn-secondary"><a href='/users'>Users</a></button>
  <button type="button" class="btn btn-primary"><a href='/categories'>Categories</a></button>

</div>
  <div className='m-10'>
    <h1 className='text-6xl text-center'>Profile</h1>
   <form>
  <div class="mb-3 grid">
  
    <img src={image} alt="nopejclkdszlvkzhkj" className='h-32 w-32 rounded-full flex justify-self-center m-10'/>
    <div className="flex justify-between">
      <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-appetizer-clipart-traditional-danish-food-platter-in-cartoon-vector-illustration-png-image_11065952.png" alt="" className="h-48 roundabout -mt-56" />
      <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-appetizer-clipart-traditional-danish-food-platter-in-cartoon-vector-illustration-png-image_11065952.png" alt="" className="h-48 roundabout -mt-56"/>
   
    </div>
    
    <div className='flex flex-col gap-3 justify-self-center align-middle'>
      <label className='text-2xl'>Name</label>
    <input type="email" class="form-control w-80 flex justify-self-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={session.data.user.name} disabled={true}/>
    <label className='text-2xl'>Email</label>
    <input type="text" className="form-control w-80 flex justify-self-center gap-5" disabled={true} placeholder={session.data.user.email} />
    <label className='text-2xl'>Contact Number</label>
    <input type="text" className="form-control w-80 flex justify-self-center mb-20" placeholder={session.data.user.contact} disabled={true}/>
    </div>
    <button type="button" className="btn btn-light -mt-10 w-20 justify-self-center">Edit</button>
    
  </div>
</form>
</div>
</div>
</>
}
export default Profile;