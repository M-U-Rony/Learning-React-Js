import Nav from "./Nav";
import Dashboard from "./Dashboard";
import { useState,useEffect } from "react";
import {Route,Routes} from "react-router-dom";
import Details from "./details";
import Favourite from "./Favourite";

export default function App(){

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

        <>
            
        <Nav Fetch={fetchRecipe}/>

        <Routes>

            <Route path="/" element={<Dashboard recipe={recipe} fetchRecipeDetails={fetchRecipeDetails}/>}/>
            <Route path="/favourite" element={<Favourite favourite={favourite} fetchRecipeDetails={fetchRecipeDetails}/>}/>
            <Route path="/details" element={ <Details details={details}  addToFavourite={addToFavourite} deleteFromFavourite={deleteFromFavourite} addOrRemove={addOrRemove} > </Details>}/>
        
        </Routes>

        </>


    );
}