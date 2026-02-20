import React from "react"
import pizza1 from "../assets/pizza1.png"
import google from "../assets/google.png"
import applestore from "../assets/applestore.png"
import time from "../assets/time.png"
import star from "../assets/star.png"
import str from "../assets/str.png"
import tomato from "../assets/tomato.png"
import cabbage from "../assets/cabbage.png"

const Hero = () => {
    return(
        <div id="home" className='bg-orange-50 min-h-[700px] flex'>
            <div className="flex lg:flex-row flex-col items-center justify-center p-5 max-w-7xl mx-auto relative">
                
                {/* Left Content */}
                <div className="lg:w-1/2 lg:space-y-6 lg:px-10 relative z-10">
                    
                    {/* Store Buttons */}
                    <div className="flex gap-0 gap-4 items-center">
                        <img 
                            src={google} 
                            alt="playstore" 
                            className="h-20 w-auto object-contain"
                        />
                        <img 
                            src={applestore} 
                            alt="applestore" 
                            className="h-11 w-auto object-contain"
                        />
                    </div>

                    <h1 className="text-5xl font-bold lg:text-6xl tracking-normal">
                        <span className="text-red-500">Delicious</span> Meals Delivered to Your Doorstep.
                    </h1>

                    <p className="text-sm text-gray-600 my-3">
                        Discover a world of culinary delights with our food delivery service. 
                        Enjoy fast, reliable delivery and a wide selection of mouthwatering dishes.
                    </p>

                    <div className="flex gap-3">
                        <a href="#contact">
                        <button className="bg-red-500 px-5 cursor-pointer z-10 mt-5 py-2 rounded-lg text-white hover:bg-red-600 hover:scale-105 transition-all">
                            Order Now
                        </button>
                        </a>
                        <a href="#contact">
                        <button className="bg-white px-5 cursor-pointer mt-5 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 hover:scale-105 transition-all">
                            Contact Now
                        </button>
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-end mt-30 lg:mt-0">
                    <img 
                        src={pizza1} 
                        alt="pizza" 
                        className="spin lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]"
                    />
                    <div className="bg-red-50 gap-1 text-lg flex border-red-200 border items-center absolute lg:bottom-28 right-5 bottom-10 px-4 py-2 rounded-full">
                        <img src={time} alt="time" className="w-18 h-12"></img>
                        <p className="leading-4 text-sm font-semibold">Super fast<br/> Delivery</p>
                    </div>
                    <div variant="outline" className="bg-red-50 leading-none flex flex-col gap-1 ext-lg px-4 py-2 border-red-200 border absolute lg:top-29
                    lg:right-17 right-4 rounded-full items-center">
                        <p className="leading-4 lg:text-sm font-semibold">Good Rating</p>
                        <div className="flex">
                            <img src={star} alt="star" width={15} height={15}></img>
                            <img src={star} alt="star" width={15} height={15}></img>
                            <img src={star} alt="star" width={15} height={15}></img>
                            <img src={star} alt="star" width={15} height={15}></img>
                            <img src={str} alt="str" width={15} height={15}></img>
                        </div>
                    </div>
                    <div className="flex flex-col bg-red-50 border-red-200 border px-6 py-2 absolute lg:top-39 lg:left-205 left-5 rounded-full items-center">
                        <h1 className="text-red-500 text-2xl font-bold">100+</h1>
                        <p className="text-sm font-semibold">Resturants</p>
                    </div>
                    <img src={tomato} alt="tomato" className="absolute w-32 lg:bottom-38 lg:left-185 left-5 w-[80px] lg:w-[120px] top-185 lg:top-120" />
                </div>
            </div>
            <img src={cabbage} alt="cabbage" className="absolute lg:top-[600px] top-[435px] lg:left-85 lg:w-44 w-30 z-0"/>
        </div>
    )
}


export default Hero


