import React from "react"
import chef from '../assets/Commercial Cookery Course.json'
import Lottie from 'lottie-react'
import google from '../assets/google.png'
import applestore from '../assets/applestore.png'

const KeyFeatures = () => {
    return(
        <div className=" bg-orange-50 py-10 px-4 lg:px-0 lg:py-25">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ">
                <div className="lg:w-1/2 flex items-center justify-between">
                    <Lottie animationData={chef} className="w-[500px]"/>
                </div>
                <div className="lg:w-1/2 flex flex-col space-y-3 lg:space-y-7 justify-center">
                <h2 className="text-red-500 font-semibold text-sm lg:text-xl">KEY FEATURES</h2>
                <h1 className="text-4xl lg:text-6xl font-bold">Enjoy a seamless <span className="text-red-500">ordering</span> Experience</h1>
                <p>From fast delivery to a wide selection of cuisines, our food ordering service has everything you need to satisfy your cravings.</p>
                <div className="flex gap-0 lg:gap-3 pt-4">
                    <img src={google} alt="" className="w-36 h-20"></img>
                    <img src={applestore} alt="" className="w-36 h-10 mt-5"></img>
                </div>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures