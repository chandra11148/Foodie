import { FormEvent } from "react";
import recipeOne from "../../assets/recipe-one.jpg";
import { Form, Input } from "../../components";

export const Landing = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{

    }
    const handleState = (e: FormEvent<HTMLFormElement>)=>{
        
    }
  return (
    <div className="bg-black text-white h-[100%] flex flex-col-reverse md:flex-row w-full">
      <div className="w-full h-full">
        <Form
            className="flex items-center justify-center w-full h-full p-10"
            onSubmit={handleSubmit}
        >
            <h2 className="text-orange-500 font-extrabold text-xl underline underline-offset-4 ">
                Foodie
            </h2>
           <Input
                name="email"
                placeholder="Email"
                handleChange={handleSate}
                type="text"
                className={`bg-zinc-900 py-1 px-4 w-full shadow-xl  placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none`}
          />
           
           <Input
            name="password"
            placeholder="Password"
            handleChange={handleState}
            type="password"
            className={`bg-zinc-900 py-1 px-4 w-full placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none`}
          />
        </Form>
      </div>
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
