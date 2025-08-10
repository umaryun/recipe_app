//import vegetables from "../images/vegetables.jpg";
import React from "react";

interface Recipe{
    id: number;
    name: string;
    image: string;
}

const RecipeCard: React.FC<Recipe> = ({ id, name, image }) => {

    const handleClick = () => {
        window.location.href = `/recipes/${id}`;
    }

    return (
        <div className="w-65 h-80 rounded-xl">
            <div className="w-full h-[43%] rounded-t-xl">
                <img src={image} alt="" className="w-full h-[100%] rounded-t-xl object-cover"/>
            </div>
            <div className=" bg-[#ECECEC] rounded-b-xl h-[57%] px-5">
                <div className="h-14">
                    <p className="text-[1.5rem] font-bold leading-tight">{name}</p>
                </div>
                
                <p className="text-gray-700 break-words pt-2">Cool recipe to eat with friends in the morning.</p>
                <button
                    onClick={handleClick}
                        className="cursor-pointer bg-yellow-300 text-black font-bold px-5 py-[3px] rounded-full mt-6"
                    >
                        View recipe
                    </button>
            </div>
        </div>
    )
}
export default RecipeCard