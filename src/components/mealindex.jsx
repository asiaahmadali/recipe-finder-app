function MealIndex(Props) {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="flex flex-wrap justify-center p-0">
      {alphabets.map((item) => (
        <div
          key={item}
          onClick={() => Props.alphabetindex(item)}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-purple-600 text-white text-sm md:text-md lg:text-lg font-bold rounded-full cursor-pointer hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 transition duration-300 shadow-md hover:shadow-lg m-1"
        >
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
}

export default MealIndex;
