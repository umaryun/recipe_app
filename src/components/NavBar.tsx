import { CookingPot } from "lucide-react"
import { Link, Route, Routes } from "react-router-dom"
import Recipes from "./Recipes"
import RecipeDetails from "./RecipeDetails"

const NavBar = () => {
    return (
        <div>
            <div className="h-4 w-full bg-yellow-400"></div>
            <div className="w-full h-16 flex justify-between px-10 sm:px-20 items-center">
                <div className="flex">
                    <CookingPot /> <span className="ml-3 font-bold text-[1.3rem]">Recipe Hub</span>
                </div>
                
                    <div className="flex w-60 justify-between font-bold text-[20px]">
                    <span className="cursor-pointer" onClick={() => window.location.href = `/`}>Home</span>
                        <span className="cursor-pointer" onClick={() => window.location.href = `/recipes`}>Recipes</span>
                        <span>About</span>
                    </div> 
                <div>
                    <input
                        type="text"
                        className="text-black text-[20px] font-bold bg-gray-200 rounded-full pl-3 w-45 align-center"
                        placeholder={` Search recipe`}
                    />
                </div>
            </div>
            <Routes>
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<RecipeDetails />} />
            </Routes>
        </div>
    )
}
export default NavBar 