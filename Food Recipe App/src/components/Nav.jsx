import { useContext } from "react";
import { Link,Outlet,useNavigate } from "react-router-dom"
import {GlobalContext} from '../context/Context'


export default function Nav(){

    const {fetchRecipe} = useContext(GlobalContext)

    const navigate = useNavigate();

    
    return(

        <div className="h-[80px] flex items-center justify-between p-7 bg-sky-200">

            <Link to="/"  className="text-gray-600 font-bold text-[20px]">FoodRecipe</Link>

            <form action={(formdata)=> {fetchRecipe(formdata.get("recipename")); navigate("/")}}>

            <input type="text" name="recipename" placeholder="Search Recipe" className="p-2 rounded-full w-[320px]"/>

            <button className="h-[38px] w-[100px] bg-black text-white rounded-lg ml-4">Search</button>
            
            </form>

            <Link to="/favourite" className="text-gray-600 font-bold text-[20px]">Favourite</Link>

            <Outlet/>

        </div>
    )
}