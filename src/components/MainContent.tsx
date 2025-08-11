import vegetables from "../images/vegetables.jpg";
import { fetchFewRecipes } from "./api/recipe";
import LargeRecipeCard from "./LargeRecipeCard";
import Loading from "./Loading";
import RecipeCard from "./RecipeCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";


interface Recipe{
    id: number;
    name: string;
    image: string;
}

export interface RecipesResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
  }

const MainContent = () => {

    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery<RecipesResponse, Error>({queryKey: ["recipes"], queryFn: fetchFewRecipes})

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }
    
    if (!data) {
        return <Loading />
    }
    const recipes = data.recipes


    return (
        <div>
            <div className="relative w-full h-[400px]">
                <img
                    src={vegetables}
                    alt="vegetables banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center flex-col">
                    <h1 className="text-white text-4xl font-bold font-montserrat">Get inspired, cook with passion and savor</h1>
                    <h1 className="text-white text-4xl font-bold">unforgettable moments at the table.</h1>
                </div>
            </div>
            <div className="m-12 h-auto">
                <h2 className="text-center text-[1.7rem] font-bold">Most searched recipes</h2>
                <div className="flex flex-wrap w-full justify-between mt-4">
                    {recipes.map((recipe: Recipe) => (
                        <div className="my-2">
                            <RecipeCard
                                id={recipe.id}
                                name={recipe.name}
                                image={recipe.image}
                            />
                        </div>
                  ))}
                </div>
            </div>


            <div className="h-285 m-15 mr-30">
                <h2 className="text-center text-[1.7rem] font-bold">Most searched recipes</h2>
                <div className="w-full mt-4">
                    {recipes.map((recipe: Recipe) => (
                        <LargeRecipeCard
                            id={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                        />
                  ))}
                </div>
            </div>

        </div>
    )
}
export default MainContent;