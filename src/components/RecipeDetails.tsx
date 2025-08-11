import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFullRecipe } from "./api/recipe";
import Loading from "./Loading";
import { useParams } from "react-router-dom";


interface FullRecipe {
    
    id: number;
    name: string;
    ingredients: string[]
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number,
    mealType: string[]
}


const RecipeDetails = () => {
    let { id } = useParams<{ id: string }>()
    const iD = Number(id)
    
    
    const queryClient = useQueryClient();
    const { data, isPending, error } = useQuery<FullRecipe>({ queryKey: ["recipes"], queryFn: () => fetchFullRecipe(iD) })
    
    if (isPending) {
        return <Loading />
    }
    if (error) {
        return <p>Error fetching recipe: {error.message}</p>
    }
    if (!data) {
        console.log("no data")
        return <Loading />
    }

    return (
        <div className="w-full h-full bg-white">
            <div className="relative w-full h-[400px]">
                <img
                    src={data.image}
                    alt="vegetables banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col">
                    <h1 className="text-white text-4xl font-bold font-montserrat">{data.name}</h1>
                </div>
            </div>
            <div className="w-[80%] m-15">
                <h2 className="font-bold text-[23px]">Ingredients</h2>
                <div className="my-4 mx-4">
                    <ul className="list-disc list-inside block">
                        {data["ingredients"].map((ingredient, index) => (
                            <li key={index} className="text-[20px] text-gray-800 font-[400] font-serif">{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <h2 className="font-bold text-[23px]">Preparation Method</h2>
                <div className="my-4 mx-4">
                    <ol className="list-decimal list-inside">
                        {data["instructions"].map((instruction, index) => (
                            <li key={index} className="text-[20px] text-gray-800 font-[400] font-serif">{instruction}</li>
                        ))}
                    </ol>
                </div>

                <h2 className="font-bold text-[23px]">Additional Information</h2>
                <div className="my-4 mx-4">
                    <p className="text-[20px] text-gray-800 font-[400] font-serif">
                        Preparation time: {data.prepTimeMinutes} minutes <br />
                        Cooking time: {data.cookTimeMinutes} minutes <br />
                        Servings: {data.servings} <br />
                        Calories per serving: {data.caloriesPerServing}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default RecipeDetails



