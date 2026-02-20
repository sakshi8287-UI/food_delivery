import React from "react"
import pizza2 from "../assets/pizza2.png"
import pizza3 from "../assets/pizza3.png"
import pizza4 from "../assets/pizza4.png"
import Card from "../components/Card"

const PopularDishes = () => {
    const menu = [
        {
            id:1,
            pizza: pizza2,
            name:"peporani Pizza",
            desc: "Lorm ipsum dolor sit amet consctetur adipisicing elit. Assumenda commodi nemo dolorum.",
            rating:4
        },
        {
            id:1,
            pizza: pizza3,
            name:"sushi Pizza",
            desc: "Lorm ipsum dolor sit amet consctetur adipisicing elit. Assumenda commodi nemo dolorum.",
            rating:4
        },
        {
            id:1,
            pizza: pizza4,
            name:"margarita Pizza",
            desc: "Lorm ipsum dolor sit amet consctetur adipisicing elit. Assumenda commodi nemo dolorum.",
            rating:4
        },
    ]
    return(
        <div id="popularsdish" className="py-10 px-5 lg:px-0 lg:py-20 bg-gray-800">
            <div className="text-center max-w-7xl mx-auto">
                <h1 className="text-3xl lg:text-4xl font-bold text-red-500">Popular Dishes</h1>
                <p className="text-sm lg:text-xl text-white pt-2">Check out our most popular and highly rated dishes</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 pt-11 gap-7">
                    {
                        menu.map((item) => {
                            return <Card key={item.id} menu={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default PopularDishes