import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      rating: 5,
      text: "The flavors at this restaurant are absolutely incredible! Every dish I've tried has been a delightful experience."
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Great food and excellent service. The staff was attentive and knowledgeable about the menu."
    },
    {
      id: 3,
      name: "Sarah Thompson",
      rating: 5,
      text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable."
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 5,
      text: "I've been to many restaurants, but this one stands out. The ambiance, the service, and the food are all top-notch."
    },
    {
      id: 5,
      name: "Lisa Patel",
      rating: 4,
      text: "A wonderful dining experience! The fusion of flavors in their signature dishes is truly unique and delightful."
    }
  ]

  return (
    <div className='py-14 px-4 lg:px-0 bg-gray-50'>
      <h1 className='text-center text-3xl lg:text-4xl font-bold'>What our Customers Say</h1>

      <div className='max-w-7xl mx-auto py-10 px-4'>
        <Swiper 
        className='pb-20'
          style={{
            "--swiper-pagination-color": "#ef4444",
            "--swiper-pagination-bullet-inactive-color": "#999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 3000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ 
            clickable: true,
            el: ".custom-pagination"
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='bg-white border border-gray-200 rounded-xl p-6 m-5 shadow-lg shadow-orange-500 hover:shadow-orange-300 transition duration-300'>

                {/* Stars */}
                <div className='flex mb-3'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < item.rating ? "black" : "none"}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className='text-gray-600 mb-4'>{item.text}</p>

                {/* Name */}
                <div>
                  <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                  <p className='text-sm text-gray-500'>CEO, Website Builders</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        {/* Pagination dots niche */}
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  )
}

export default Testimonials