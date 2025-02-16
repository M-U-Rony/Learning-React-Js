import { Link,Outlet,useNavigate } from "react-router-dom"

export default function Nav({Fetch}){

    const navigate = useNavigate();

    
    return(

        <div className="h-[80px] flex items-center justify-between p-7 bg-sky-200">

            <p className="text-gray-600 font-bold text-[20px]"><Link to="/">FoodRecipe</Link></p>

            <form action={(formdata)=> {Fetch(formdata.get("recipename")); navigate("/")}}>

            <input type="text" name="recipename" placeholder="Search Recipe" className="p-2 rounded-full w-[320px]"/>

            <button className="h-[38px] w-[100px] bg-black text-white rounded-lg ml-4">Search</button>
            
            </form>

            <p className="text-gray-600 font-bold text-[20px]"><Link to="/favourite">Favourite</Link></p>

            <Outlet/>

        </div>
    )
}