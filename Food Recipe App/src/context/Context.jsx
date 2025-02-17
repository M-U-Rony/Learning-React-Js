import { createContext,useState,useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){

    const [recipe,setrecipe] = useState([]);
    const [details,setdetails] = useState({});
    const [favourite,setfavourite] = useState([]);
    const [addOrRemove,setaddOrRemove] = useState(true);

    useEffect(()=>{

        let flag=0;

        favourite.forEach(ele=>{
            if(ele.recipe_id===details.recipe_id){
                flag=1;
            }
        })

        if(flag===1){
            setaddOrRemove(false);
        }
        else{
            setaddOrRemove(true);
        }

    },[details])


    async function fetchRecipe(recipename) {

        try {

            const req = await fetch( `https://forkify-api.herokuapp.com/api/search?q=${recipename}`);
            if (!req.ok) throw new Error(`HTTP error! Status: ${req.status}`);
            
            const res = await req.json();
            // console.log(res.recipes);
            setrecipe(res.recipes);
        } 
        
        catch (error) {
            console.error("Error fetching recipe:", error);
        }
    }

    async function fetchRecipeDetails(recipeId) {

        try {

            const req = await fetch( `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
            if (!req.ok) throw new Error(`HTTP error! Status: ${req.status}`);
            
            const res = await req.json();
            // console.log(res.recipe);
            setdetails(res.recipe);
            
        } 
        
        catch (error) {
            console.error("Error fetching recipe:", error);
        }
    }


    function addToFavourite(details){

        setfavourite(pre=>{
            return  [...pre,details];
            
        })

        setaddOrRemove(pre=> !pre);

    }

    function deleteFromFavourite(details){

        setfavourite(pre=>{
           
            const arr= pre.filter(ele =>{

                return (ele.recipe_id!==details.recipe_id)

            })

            return arr;
            
        })

        setaddOrRemove(pre=> !pre);

    }

    return(

   < GlobalContext.Provider value={{fetchRecipe,recipe,fetchRecipeDetails,favourite,details,addToFavourite,deleteFromFavourite,addOrRemove}}>

    {children}

   </GlobalContext.Provider>
   
    );

}