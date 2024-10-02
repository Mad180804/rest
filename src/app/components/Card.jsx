function Card()
{
  return  <div className="card hover:bg-slate-200 transition-all hover:shadow-xl hover:shadow-black/50 hover:-translate-y-10" style={{width: "18rem"}}>
  <img src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1726706722~exp=1726707322~hmac=ecfc60777762f5378c4ef63b8b8d3b4c541b3bcf6f4e1fb3206cee22440c6d75" className="card-img-top h-[180px]" alt="..."/>
  <div className="card-body">
    <h5 className="text-xl">PIZZA</h5>
    <p style={{fontSize:"16px",color:"gray",fontStyle:"italic"}}>A delicious blend of crispy crust, savory sauce, melted cheese, and endless toppings. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  
</div>
}
export default Card;