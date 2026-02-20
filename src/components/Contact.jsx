import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import emailjs from '@emailjs/browser'
import delivery from '../assets/Delivery.json'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_kxthwel",   // 👈 apna Service ID
      "template_z2gxpuf",  // 👈 apna Template ID
      form.current,
      "T4rD7l9srdbwnMOHg"       // 👈 apni Public Key
    )
    .then(() => {
      alert("Message Sent Successfully ✅")
      form.current.reset()
    })
    .catch((error) => {
      console.log(error)
      alert("Something went wrong ❌")
    })
  }

  return (
   <div>
        <div id="contact" className='pb-20'>
            <div className='mx-auto max-w-2xl text-center'>
                <h2 className='text-4xl font-bold tracking-tight text-red-500 mt-5'>Contact</h2>
                <p className='mt-2 text-xl leading-8 text-gray-600'>
                  Feel free to reach out!
                </p>
            </div>

            <div className='lg:grid lg:grid-cols-2 mt-10 lg:m-0'>
                <Lottie animationData={delivery} />

                {/* 👇 IMPORTANT CHANGES HERE */}
                <form 
                  ref={form}
                  onSubmit={sendEmail}
                  className='lg:mx-auto mt-16 max-w-xl sm:mt-20 bg-orange-50 p-8 rounded-lg mx-4'
                >

                    <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                        <div>
                            <label className='block text-sm font-semibold'>
                                First name *
                            </label>
                            <div className='mt-2.5'>
                                <input
                                  name='user_name'   // ✅ IMPORTANT
                                  type='text'
                                  required
                                  className='block w-full bg-white rounded-md px-3.5 py-2 ring-1 ring-gray-300'
                                />
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-semibold'>
                                Last name
                            </label>
                            <div className='mt-2.5'>
                                <input
                                  name='last_name'
                                  type='text'
                                  className='block w-full bg-white rounded-md px-3.5 py-2 ring-1 ring-gray-300'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className='block text-sm font-semibold'>
                            Email *
                        </label>
                        <div className='mt-2.5'>
                            <input
                              name='user_email'   // ✅ IMPORTANT
                              type='email'
                              required
                              className='block w-full bg-white rounded-md px-3.5 py-2 ring-1 ring-gray-300'
                            />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className='block text-sm font-semibold'>
                            Phone number
                        </label>
                        <div className='mt-2.5'>
                            <input
                              name='phone'
                              type='tel'
                              className='block w-full bg-white rounded-md px-3.5 py-2 ring-1 ring-gray-300'
                            />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className='block text-sm font-semibold'>
                            Message *
                        </label>
                        <div className='mt-2.5'>
                            <textarea
                              name='message'   // ✅ IMPORTANT
                              rows={4}
                              required
                              className='block w-full bg-white rounded-md px-3.5 py-2 ring-1 ring-gray-300'
                            />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <button 
                            type='submit'
                            className='block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-white hover:bg-red-600'>
                                Let's Talk
                        </button>
                    </div>

                </form>
            </div>
        </div>
   </div>
  )
}

export default Contact