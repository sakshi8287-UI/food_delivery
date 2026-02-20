import React from "react"
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"

const Partners = () => {
    return(
        <div id="partners" className="px-4 lg:px-0 py-10 bg-white">
            <div className="text-center">
                <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-red-500">Our Partners</h1>
                <p className="text-sm lg:text-xl">Lorem ipsum dolor sit amet consctetur adipisicing elit. cum reprehenderit nescium at?</p>
                <div
                style={{ 
                        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
                className="max-w-6xl mx-auto mt-10 py-2 flex gap-4 flex-nowrap overflow-hidden"    
                >
                    <div className="flex gap-4 loop-scroll">
                        
                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo} alt="logo" className="h-20 object-contain"/>
                        </div>

                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo2} alt="logo2" className="h-120 object-contain"/>
                        </div>

                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo3} alt="logo3" className="h-20 object-contain"/>
                        </div>

                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo4} alt="logo4" className="h-40 object-contain"/>
                            
                        </div>
                    </div>
                    <div className="flex gap-4 l loop-scroll">
                        
                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo} alt="logo" className="h-20 object-contain"/>
                        </div>

                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo2} alt="logo2" className="h-120 object-contain"/>
                        </div>

                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo3} alt="logo3" className="h-20 object-contain"/>
                        </div>

                        <div className="shadow-orange-200 shadow-md p-3 w-80 h-25 flex items-center justify-center bg-white rounded-lg">
                            <img src={logo4} alt="logo4" className="h-40 object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners