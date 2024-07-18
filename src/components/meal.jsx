import MealItem from "./mealitem";
import MealIndex from "./mealindex";
import { useState, useEffect } from "react";

function Meal() {
  const baseUrl1 = import.meta.env.VITE_API_BASE_URL1;
  const [url, setURL] = useState(`${baseUrl1}search.php?f=a`);
  const [items, setitems] = useState();
  const [search, setsearch] = useState("");
  const [showitems, setshowitems] = useState(false);

  // to handle external effects
  useEffect(() => {
    const fetchdata = fetch(url);
    fetchdata.then((response) => {
      const jsondata = response.json();
      jsondata.then((data) => {
        setitems(data.meals);
        setshowitems(true);
      });
    });
  }, [url]);

  // seturl function
  const setindexURL = (alphabet) => {
    setURL(`${baseUrl1}search.php?f=${alphabet}`);
  };

  // search recipe function
  const searchRecipe = (e) => {
    if (e.key === "Enter") {
      setURL(`${baseUrl1}search.php?s=${search}`);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 min-h-screen p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Search Your Food Recipe here
          </h1>
          <p className="text-purple-200">
            Find delicious recipes with ease. Enter a keyword or browse by
            initial letter.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <input
            className="bg-white border border-gray-300 rounded-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="search"
            placeholder="Search here..."
            onChange={(e) => setsearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>

        {/* meal item component */}
        <div className="mb-8">
          {showitems ? (
            <MealItem data={items}></MealItem>
          ) : (
            <p className="text-center text-purple-100">
              No results found for this search term.
            </p>
          )}
        </div>

        {/* mealindex component */}
        <div className="flex justify-center">
          <MealIndex
            alphabetindex={(alphabet) => setindexURL(alphabet)}
          ></MealIndex>
        </div>
      </div>
    </>
  );
}

export default Meal;
