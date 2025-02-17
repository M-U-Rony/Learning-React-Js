import { useContext } from "react";
import { Link,Outlet } from "react-router-dom"
import { GlobalContext } from "../context/Context";

export default function Card({ item }) {

    const {fetchRecipeDetails} = useContext(GlobalContext);

    return (

        <div className="h-[400px] w-[320px] shadow-xl rounded-xl flex flex-col p-5 justify-between">

            <img src={item.image_url} alt={item.title} className="w-[280px] h-[200px] bg-no-repeat bg-center rounded-xl" />

            <p className="text-sky-500 truncate">{item.publisher}</p>

            <h1 className="text-xl truncate font-bold">{item.title}</h1>

            <Link to="/details" onClick={()=> fetchRecipeDetails(item.recipe_id)} className="flex items-center justify-center text-white h-[50px] w-[180px] bg-black rounded-md font-bold">Recipe Details</Link>

            <Outlet/>

        </div>
    );
}