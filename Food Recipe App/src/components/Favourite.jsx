import { Link,Outlet } from "react-router-dom";

export default function Favourite({favourite,fetchRecipeDetails}){

    function showDeatils(ele){
        fetchRecipeDetails(ele.recipe_id);
    }

    if(favourite.length===0){
        return <p>You dont have any favourite item</p>
      }

    return(
        <div  className="flex flex-wrap justify-evenly gap-y-4 mt-5">

            {
                favourite.map((ele,ind)=>{

                    return(

                        <div key={ind} className="h-[400px] w-[320px] shadow-xl rounded-xl flex flex-col p-5 justify-between">
                        <img src={ele.image_url} alt={ele.title} className="w-[280px] h-[200px] bg-no-repeat bg-center rounded-xl" />
            
                        <p className="text-sky-500 truncate">{ele.publisher}</p>
            
                        <h1 className="text-xl truncate font-bold">{ele.title}</h1>
            
                        <Link to="/details"  onClick={()=>showDeatils(ele)} className="flex items-center justify-center text-white h-[50px] w-[180px] bg-black rounded-md font-bold">Recipe Details</Link>
            
                        <Outlet/>
                        
                        </div>

                    )

                })
            }


        </div>
    )
}