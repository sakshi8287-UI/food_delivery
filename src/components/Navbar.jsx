import React, { useEffect, useState } from "react"
import chili from "../assets/chili.png"
import { Menu } from "lucide-react"

const Navbar = () => {

    const [header, setHeader] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        });
        return () => window.removeEventListener('scroll', scrollYPos)
    })
    return(
        <header className={`sticky mx-auto z-50 top-0 bg-orange-100 border-2 border-orange-200 transition-all ${header ? 'py-4 bg-orange-200 shadow-lg':'py-6'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Mobile nav */}
                <div className="flex md:hidden justify-between px-4">
                    <div className="flex gap-1 items-center">
                        <img src={chili} alt="chili" width={40} height={40} />
                        <h1 className="text-red-500 font-bold text-2xl">Spicy <span className="text-gray-800 font-semibold">Bites</span></h1>
                    </div>
                    <div>
                        <button onClick={() => setMobileNavOpen(prev => !prev)} className="cursor-pointer">

                        <Menu />
                        </button>
                    </div>
                </div>
                {
                    mobileNavOpen && (
                        <ul onClick={() => setMobileNavOpen(false)}
                        className="md:hidden p-4 bg-orange-100 rounded-lg font-semibold text-xl mt-2 flex flex-col gap-2 text-center">
                            <li className="cursor-pointer hover:text-red-500">Home</li>
                            <li className="cursor-pointer hover:text-red-500">Popularsdish</li>
                            <li className="cursor-pointer hover:text-red-500">Partners</li>
                            <li className="cursor-pointer hover:text-red-500">Contact</li>
                        </ul>
                    )
                }

                {/* computer nav */}
                <div className="hidden md:flex justify-between items-center px-10">
                    <div className="font-semibold flex gap-1 items-center">
                        <img src={chili} alt="logo" className="w-10"/>
                        <h1 className="text-red-500 text-xl font-bold">Spicy<span className="text-gray-800 font-semibold">Bites</span></h1>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <ul className="flex items-center cursor-pointer gap-8 text-black font-semibold">
                            <li className="hover:text-red-500 transition-all"><a href="#home">Home</a></li>
                            <li className="hover:text-red-500 transition-all"><a href="#popularsdish">Popularsdish</a></li>
                            <li className="hover:text-red-500 transition-all"><a href="#partners">Partners</a></li>
                            <li className="hover:text-red-500 transition-all"><a href="#contact">Contact</a></li>
                            <button className="bg-red-500 px-4 py-2 text-white rounded-lg"><a href="#contact">Order Now</a></button>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar