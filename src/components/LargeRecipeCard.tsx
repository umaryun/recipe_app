import React from "react";

interface Recipe{
    id: number;
    name: string;
    image: string;
}

const LargeRecipeCard: React.FC<Recipe> = ({ id, name, image }) => {
    
    const handleClick = () => {
        window.location.href = `/recipes/${id}`;
    }


    return (
        <div className="mt-5 mb-9 w-full flex h-60 rounded-xl">
            <div className="w-[40%] h-full rounded-l-xl">
                <img src={image} alt={name} className="w-full h-[100%] rounded-l-xl object-cover"/>
            </div>
            <div className="flex items-center justify-center w-[60%] bg-[#ECECEC] rounded-r-xl h-full px-5">
                <div className="w-[95%] h-[75%]">
                <div className="h-14">
                    <p className="text-[1.8rem] font-bold leading-tight">{name}</p>
                </div>
                
                <p className="text-[1.2rem] text-gray-700 break-words pt-2">irresistible homemade {name} with soft dough and delicious toppings</p>
                    <button
                        onClick={handleClick}
                        className="cursor-pointer bg-yellow-300 text-black font-bold px-5 py-[3px] rounded-full mt-6">View recipe</button>
                </div>
            </div>
        </div>
    )
}
export default LargeRecipeCard