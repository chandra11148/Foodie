import recipeOne from "../../assets/recipe-one.jpg";

export const Landing = () => {
  return (
    <div className="bg-black text-white h-[100%] flex flex-col-reverse md:flex-row w-full">
      <div className="w-full h-full"></div>
      <div className="w-full h-full saturate-200">
        <img
          src={recipeOne}
          alt="A dish with food recipes"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};
