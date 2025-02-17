import { useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "../context/Context";

export default function Dashboard() {

  const {recipe}= useContext(GlobalContext)

  if(recipe.length===0){
    return <p className="relative  top-[200px] text-center text-[30px] font-semibold">Nothing to show. Please serach Something</p>
  }

  return (

    <div className="flex flex-wrap justify-evenly gap-y-4 mt-5">

      {recipe.map((item, index) => (

        <Card key={index} item={item}/>

      ))}

    </div>
  );
}