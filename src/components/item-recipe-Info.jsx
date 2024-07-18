import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemRecipeInfo() {
  const { MealId } = useParams();
  const [itemInfo, setItemInfo] = useState();
  const baseUrl1 = import.meta.env.VITE_API_BASE_URL1;

  useEffect(() => {
    const fetchData = async () => {
      if (MealId !== "") {
        try {
          const response = await fetch(`${baseUrl1}lookup.php?i=${MealId}`);
          const jsonData = await response.json();
          setItemInfo(jsonData.meals[0]);
          console.log(jsonData.meals[0]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [MealId, baseUrl1]);

  let instructions = "";
  if (itemInfo) {
    const URL = itemInfo.strYoutube;
    const str = URL.split("=");
    var videoId = str[str.length - 1];
    instructions = itemInfo.strInstructions.split(" ").slice(0, 150).join(" ");
  }
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-400 min-h-screen p-2 md:p-6 flex justify-center items-center">
      {!itemInfo ? (
        <p className="text-center text-xl text-white">Loading...</p>
      ) : (
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={itemInfo.strMealThumb}
              alt="an image"
              className="w-full md:w-1/2 object-cover md:rounded-full md:rounded-tr-none md:rounded-l-lg"
            />
            <div className="p-6 w-full md:w-1/2 bg-gradient-to-r from-purple-600 to-purple-400 text-white md:h-[450px] text-center md:rounded-full md:rounded-tl-none md:rounded-r-lg">
              <h1 className="text-2xl md:text-3xl font-bold">
                {itemInfo.strMeal}
              </h1>
              <h2 className="text-xl mt-2">{itemInfo.strArea} Food</h2>
              <h2 className="text-xl">Category: {itemInfo.strCategory}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-6 text-white flex flex-col gap-2 hover:shadow-md shadow-purple-800 transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <h4>
                {itemInfo.strIngredient1}: {itemInfo.strMeasure1}
              </h4>
              <h4>
                {itemInfo.strIngredient2}: {itemInfo.strMeasure2}
              </h4>
              <h4>
                {itemInfo.strIngredient3}: {itemInfo.strMeasure3}
              </h4>
              <h4>
                {itemInfo.strIngredient4}: {itemInfo.strMeasure4}
              </h4>
              <h4>
                {itemInfo.strIngredient5}: {itemInfo.strMeasure5}
              </h4>
              <h4>
                {itemInfo.strIngredient6}: {itemInfo.strMeasure6}
              </h4>
              <h4>
                {itemInfo.strIngredient7}: {itemInfo.strMeasure7}
              </h4>
              <h4>
                {itemInfo.strIngredient8}: {itemInfo.strMeasure8}
              </h4>
              <h4>
                {itemInfo.strIngredient9}: {itemInfo.strMeasure9}
              </h4>
              {/* Add more ingredients as needed */}
            </div>

            <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-md p-6 text-white hover:shadow-md shadow-purple-800 transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-4">Instructions</h2>
              <p>{instructions}</p>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div>
              <h2 className="text-2xl bg-gradient-to-r from-purple-400 via-purple-700 to-purple-400  text-white m-4 text-center p-2">
                Watch on Youtube
              </h2>
            </div>
            <iframe
              className="w-full aspect-video rounded-lg shadow-md"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={itemInfo.strMeal}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemRecipeInfo;
