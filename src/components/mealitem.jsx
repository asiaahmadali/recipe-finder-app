import { useNavigate } from "react-router-dom";

function MealItem(Props) {
  const navigate = useNavigate();
  return (
    <>
      {!Props.data ? (
        "Not found data"
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Props.data.map((item) => {
            return (
              <div key={item.idMeal} className="p-4">
                <div
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden group"
                  onClick={() => navigate(`/${item.idMeal}`)}
                >
                  <img
                    src={item.strMealThumb}
                    alt="an image"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h1 className="text-lg font-bold text-purple-700 group-hover:text-purple-900 transition-colors duration-300">
                      {item.strMeal}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MealItem;
