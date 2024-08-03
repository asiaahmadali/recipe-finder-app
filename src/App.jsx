import Meal from "./components/Meal";
import ItemRecipeInfo from "./components/Item-Recipe-Info";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal></Meal>}></Route>
        <Route
          path="/:MealId"
          element={<ItemRecipeInfo></ItemRecipeInfo>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
