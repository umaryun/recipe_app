import { CookingPot, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    return(
        <div className="w-full h-50 bg-yellow-400 flex items-center">
            <div className="flex mx-25">
                <CookingPot size={50}/> <span className="ml-3 font-bold text-[1.8rem]">Recipe Hub</span>
            </div>
            <div className="h-20 w-28 ml-30">
                <p className="font-bold text-[1.3rem]">Socials:</p>
                <div className="flex justify-around">
                    <Youtube />
                    <Twitter />
                    <Facebook />
                    <Instagram />
                </div>
            </div>
        </div>
    )
} 
export default Footer

