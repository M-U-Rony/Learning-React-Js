import Card from "./Card";

export default function Dashboard({ recipe,fetchRecipeDetails}) {

  if(recipe.length===0){
    return <p>Nothing to show. Please serach</p>
  }

  return (

    <div className="flex flex-wrap justify-evenly gap-y-4 mt-5">

      {recipe.map((item, index) => (

        <Card key={index} item={item} fetchRecipeDetails={fetchRecipeDetails} />

      ))}

    </div>
  );
}