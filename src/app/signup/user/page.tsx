"use client";

import { useForm } from "react-hook-form"
import { SERVICES } from "@/constants"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type ServiceRequestForm = {
    fname: string;
    lname: string;
    email: string
    services: string;
    serviceInfo: string;
    dateOfService: string;
    duration: string;
    address: string;
    priceRange: string;
    urgency: string;
    phone: string;
    instructions: string;
}

function ProviderSignup() {
    const {register, formState:{errors}, handleSubmit} = useForm<ServiceRequestForm>();
    const onSubmit = async (data: ServiceRequestForm)=>{
        try {
            console.log(data)
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log("Email sent successfully");
            } else {
                console.error("Email failed to send");
            }
        } catch(err) {
            console.error("Error:", err);
        }
    }     

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:justify-center">
            <div className="w-[50%] mt-[-20em] hidden">
                <DotLottieReact src="https://lottie.host/dc2db7bd-5f68-455e-a2c6-fc8507f29f41/MjMfULsjoW.lottie" loop autoplay />
            </div>
            <div className="w-[100%] lg:w-[50%]">
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-8 rounded-md w-[100%]">
                    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mb-5">
                        <div className="mr-5">
                            <label htmlFor="fname" className="block font-semibold text-lg ">First Name</label>
                            {errors.fname?.type==="required" && (
                                <p className="text-red-500 text-sm mb-2">First Name is required</p>
                            )}
                            <input type="text" className="block border-2 outline-none px-2 py-1 dark:text-primaryTextColor" {...register('fname', {required: true})}/>
                        </div>
                        <div className="lg:ml-5">
                            <label htmlFor="lname" className="block font-bold text-lg ">Last Name</label>
                            {errors.lname?.type==="required" && (
                                <p className="text-red-500 text-sm mb-2">Last Name is required</p>
                            )}
                            <input type="text" className="border-2 outline-none px-2 py-1 dark:text-primaryTextColor" {...register('lname', {required: true})}/>
                        </div>
                        
                    </div>

                    <div className="mb-10">
                        <label htmlFor="email" className="block font-bold text-lg ">Email Address</label>
                        {errors.email?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Email is required</p>
                        )}
                        {errors.email?.type==="pattern" && (
                            <p className="text-red-500 text-sm mb-2">Enter a valid email</p>
                        )}
                        <input type="email" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('email', {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}/>
                    </div>

                    <div className="my-8">
                        <label htmlFor="service-type" className="font-bold mb-20 text-lg my-2">What type of services do you need?</label>
                        {errors.services?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Select a service</p>
                        )}
                        {SERVICES.map((service: { id: number; name: string }) => (
                            <div key={service.id}>
                                <input type="radio" value={service.name} id={`${service.id}`} className="mx-2 p-2" {...register('services', {required: true})} name="services"/>
                                <label htmlFor={`service-${service.id}`} className="text-lg my-2">{service.name}</label>
                            </div>
                        ))}
                    </div>

                    <div className="my-8">
                        <label htmlFor="price" className="block font-bold text-lg ">Describe the service you require in detail?</label>
                        {errors.serviceInfo?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Service Details are required</p>
                        )}
                        <textarea className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('serviceInfo', {required: true})}></textarea>
                    </div>

                    <div className="my-8">
                        <label htmlFor="date-of-service" className="block font-bold text-lg ">When do you need this service?</label>
                        {errors.dateOfService?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Date of service is required</p>
                        )}
                        <input type="date" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('dateOfService', {required: true})}/>
                    </div>

                    <div className="my-8">
                        <label htmlFor="duration" className="block font-bold text-lg ">Time and duration of the service</label>
                        {errors.duration?.type==='required' && (
                            <p className="text-red-500 text-sm mb-2">Duration is required</p>
                        )}
                        <input type="text" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('duration', {required: true})}/>
                    </div>

                    <div className="my-8">
                        <label htmlFor="address" className="block font-bold text-lg ">Address of the place where service should be provided</label>
                        {errors.address?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Address is required</p>
                        )}
                        <input type="text" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('address', {required: true})}/>
                    </div>

                    <div className="my-8">
                        <label htmlFor="price-range" className="block font-bold text-lg ">Please type in your price range for the service</label>
                        {errors.priceRange?.type==='required' && (
                            <p className="text-red-500 text-sm mb-2">Price Range is required</p>
                        )}
                        {(errors.priceRange?.type==="max" || errors.priceRange?.type==="min") && (
                            <p className="text-red-500 text-sm mb-2">Price should be between 150 and 1000</p>
                        )}
                        <input type="range" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" max='1000' min="150" {...register('priceRange', {required: true, max:1000, min:150})}/>
                    </div>

                    <div className="my-8">
                        <label htmlFor="" className="block font-bold text-lg ">How urgent is your request?</label>
                        {errors.urgency?.type==='required' && (
                            <p className="text-red-500 text-sm mb-2">Urgency of request is required</p>
                        )}
                        <div>
                          <div>
                            <input type="radio" value='immediate' id='immediate' className="mx-2 p-2" {...register('urgency', {required: true})} name="urgency"/>
                            <label htmlFor='immediate' className="text-lg my-2">Immediate (within a few hours)</label>
                          </div>
                          <div>
                            <input type="radio" value='today' id='today' className="mx-2 p-2" {...register('urgency', {required: true})} name="urgency"/>
                            <label htmlFor='today' className="text-lg my-2">Within the day</label>
                          </div>
                          <div>
                            <input type="radio" value='upcoming' id='upcoming' className="mx-2 p-2" {...register('urgency', {required: true})} name="urgency"/>
                            <label htmlFor='upcoming' className="text-lg my-2">Within 2-3 days</label>
                          </div>
                          <div>
                            <input type="radio" value='flexible' id='flexible' className="mx-2 p-2" {...register('urgency', {required: true})} name="urgency"/>
                            <label htmlFor='flexible' className="text-lg my-2">Flexible</label>
                          </div>
                        </div>
                    </div>

                    <div className="my-8">
                        <label htmlFor="phone" className="block font-bold text-lg ">Phone Number</label>
                        {errors.phone?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Phone Number is required</p>
                        )}
                        {(errors.phone?.type==="maxLength" || errors.phone?.type==="minLength") && (
                            <p className="text-red-500 text-sm mb-2">Enter a valid phone number</p>
                        )}
                        <input type="tel" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('phone', {required: true, maxLength: 10, minLength: 10})}/>
                    </div>
                    <div className="my-8">
                        <label htmlFor="instructions" className="block font-bold text-lg ">Any additional comments or special instructions</label>
                        <input type="text" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('instructions')}/>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-button text-white px-8 py-2 rounded-md hover:border-[1px] hover:bg-transparent">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProviderSignup