interface Recipe{
    id: number;
    name: string;
    image: string;
}
interface RecipesResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}
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


export const fetchFewRecipes = async (): Promise<RecipesResponse> => {
    const response = await fetch("https://dummyjson.com/recipes?limit=4");
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return response.json()
}

export const fetchAllRecipes = async (): Promise<RecipesResponse> => {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return response.json()
}
export const fetchFullRecipe = async (id: number): Promise<FullRecipe> => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return response.json()
}


