import Loading from "./Loading";
import RecipeCard from "./RecipeCard"
import { fetchAllRecipes } from "./api/recipe"
import { useQuery, useQueryClient } from "@tanstack/react-query"

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

const Recipes = () => {

    const queryClient = useQueryClient()

    const { data, isPending, error } = useQuery<RecipesResponse>({ queryKey: ["recipes"], queryFn: fetchAllRecipes })
    if (isPending) {
        return <Loading />
    }
    if (error) {
        return <p>Error fetching recipes: {error.message} </p>
    }
    if (!data) {
        return <Loading />
    }

    const recipes = data.recipes

    return (
        <div className="flex justify-around flex-wrap w-full h-[100%] py-3">
            {recipes.map((recipe: Recipe) => (
                <div className="my-3 mx-2">
                    <RecipeCard id={recipe.id} name={recipe.name} image={recipe.image} />
                </div>
            ))}
        </div>
    )
}
export default Recipes