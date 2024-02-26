import { FormEvent, useState } from "react";
import { RecipeCard, SearchBox } from "../../components";
import { NoRecipe } from "../common";
import { IRECIPERESPONSE } from "../../@types";
import { useRecipe } from "../../hooks";

export const Home = () => {
    const { loading, searchRecipe } = useRecipe();
    const [query,setQuery] = useState<string>("");
    
    const [state,setState] = useState<IRECIPERESPONSE[]>([]);
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!query) return;
        const result: IRECIPERESPONSE[] | []= await searchRecipe(query);
        if(result){
            setState(result);
        }
    }
    const props = {
        title:"Recipes",
        onSearch: onSubmit,
        query,
        setQuery
    };
    return (
        <div className="text-white w-full h-full">
            <SearchBox {...props}/>
            {/* {loading ? (
          <SearchLoader />
        ) : ( */}
          <>
            {!!state?.length ? (
              <div className="flex flex-wrap gap-3 flex-col items-center justify-center md:justify-start md:items-start md:flex-row w-full">
                {state.map((recipe: IRECIPERESPONSE, index: number) => (
                  <RecipeCard
                    key={index + recipe._id}
                    {...recipe}
                    user={recipe?.user?.email as string}
                  />
                ))}
              </div>
            ) : (
              <>
                <NoRecipe />
              </>
            )}
          </>
        {/* )} */}
        </div>
    );
}