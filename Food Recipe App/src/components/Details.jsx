import { useContext } from "react";
import { GlobalContext } from "../context/Context";

export default function Details(){

    const {details,addToFavourite,deleteFromFavourite,addOrRemove} = useContext(GlobalContext);

    if (!details || !details.ingredients) {
        return <div>Loading...</div>;
    }


    return(

        <div className="flex p-16 justify-center">

            <img src={details.image_url} alt={details.title}  className="h-[300px] w-[600px] bg-no-repeat bg-center rounded-xl"/>

            <div className="flex flex-col ml-14">

                <p className="text-sky-500 truncate">{details.publisher}</p>

                <p className="text-xl truncate font-bold">{details.title}</p>

                { addOrRemove ? 
                <button className="text-white h-[50px] w-[180px] bg-black rounded-md font-bold mt-4" onClick={()=> addToFavourite(details)}>Add to Favourite</button>
                :
                <button className="text-white h-[50px] w-[210px] bg-black rounded-md font-bold mt-4" onClick={()=> deleteFromFavourite(details)}>Remove From Favourite</button>

                }

                <p className="text-xl truncate font-bold mt-4">Ingredients:</p>

                <ul>

                {details.ingredients.map((ingrediant,ind) =>{
                    return <li className="mt-2 font-medium" key={ind}>{ingrediant}</li>
                })}

                </ul>

            </div>

        </div>

    );

}