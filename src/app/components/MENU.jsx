import Card from "./Card";
import "../globals.css"
function MENU()
{
  return <div class="font-semibold text-center text-6xl italic text-glow font-poppins bg-yellow-300 p-10">
     <div className="text-center text-8xl">MENU</div>
    <div className="flex justify-between">
      <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-appetizer-clipart-traditional-danish-food-platter-in-cartoon-vector-illustration-png-image_11065952.png" alt="" className="h-48 roundabout -mt-20" />
      <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-appetizer-clipart-traditional-danish-food-platter-in-cartoon-vector-illustration-png-image_11065952.png" alt="" className="h-48 roundabout -mt-20"/>
   
    </div>
    <div className="text-2xl -mt-10">Discover Best Dishes</div>
    <div className="grid grid-cols-3 gap-5 ml-10 mt-20">
      <Card/>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
    </div>

{/* </> */}
}




export default MENU;