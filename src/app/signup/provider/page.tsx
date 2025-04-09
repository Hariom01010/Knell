"use client";

import { useForm } from "react-hook-form"
import { SERVICES } from "@/constants"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { db } from "@/sdk-initialize";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4, validate } from "uuid";

type ProvideSignupForm = {
    fname: string;
    lname: string;
    email: string;
    services: string[]; // Since multiple checkboxes can be selected
    price: string;
    haveExperience: string; // 'yes' or 'no'
    socialMedia: string;
    location: string;
    availability: string[]; // Since multiple checkboxes can be selected
    phone: string;
}

function ProviderSignup() {
    const {register, formState:{errors}, handleSubmit} = useForm<ProvideSignupForm>();
    const onSubmit = async (data: ProvideSignupForm)=>{
        try {
            const userId = uuidv4()

            await setDoc(doc(db, "users", userId), {
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                services: data.services || [],
                price: data.price || "",
                experience: data.haveExperience || "",
                socialMedia: data.socialMedia || "",
                location: data.location || "",
                availability: data.availability || [],
                phone: data.phone || ""
            });

            console.log("User registered successfully!");
        } catch (err) {
            console.error(err);
        }
    }     

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:justify-center">
            <div className="w-[50%] mt-[-20em] hidden lg:block">
                <DotLottieReact src="https://lottie.host/dc2db7bd-5f68-455e-a2c6-fc8507f29f41/MjMfULsjoW.lottie" loop autoplay />
            </div>
            <div className="w-[100%] lg:w-[50%]">
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-8 rounded-md w-[100%]">
                    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mb-5">
                        <div className="mr-5">
                            <label htmlFor="fname" className="block font-semibold text-lg">First Name</label>
                            {errors.fname?.type==="required" && (
                                <p className="text-red-500 text-sm mb-2">First Name is required</p>
                            )}
                            <input type="text" className="block border-2 outline-none px-2 py-1 dark:text-primaryTextColor" {...register('fname', {required: true})}/>
                        </div>
                        <div className="lg:ml-5">
                            <label htmlFor="lname" className="block font-bold text-lg">Last Name</label>
                            {errors.lname?.type==="required" && (
                                <p className="text-red-500 text-sm mb-2">Last Name is required</p>
                            )}
                            <input type="text" className="border-2 outline-none px-2 py-1 dark:text-primaryTextColor" {...register('lname', {required: true})}/>
                        </div>
                        
                    </div>

                    <div className="my-10">
                        <label htmlFor="social-account" className="block font-semibold text-lg">What’s your email?</label>
                        {errors.email?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Email is required</p>
                        )}
                        {errors.email?.type==="pattern" && (
                            <p className="text-red-500 text-sm mb-2">Enter a valid email</p>
                        )}
                        <input type="text" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('email', {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}/>
                    </div>

                    <div className="my-10">
                        <label htmlFor="service-type" className="font-bold mb-20 text-lg">What type of services would you like to offer?</label>
                        {errors.services?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Select a service</p>
                        )}
                        {SERVICES.map((service: { id: number; name: string }) => (
                            <div key={service.id}>
                                <input type="checkbox" value={service.name} id={`${service.id}`} className="mx-2 p-2" {...register('services', {required: true})} />
                                <label htmlFor={`service-${service.id}`} className="text-lg my-2">{service.name}</label>
                            </div>
                        ))}
                    </div>

                    <div className="my-10">
                        <label htmlFor="price" className="block font-bold text-lg">How much would you like to charge for your service?</label>
                        {errors.price?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Price is required</p>
                        )}
                        {(errors.price?.type==='min' || errors.price?.type==='max') && (
                            <p className="text-red-500 text-sm mb-2">Price should be between 150 and 1000</p>
                        )}
                        <input type="text" {...register('price')} className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('price', {required: true, min:150, max:1000})}/>
                    </div>

                    <div className="my-10">
                        <label htmlFor="price" className="block font-bold text-lg">Do you have any prior experience in this service?</label>
                        {errors.haveExperience?.type==='required' && (
                            <p className="text-red-500 text-sm mb-2">Do you have any experience</p>
                        )}
                        <div className="flex">
                            <div className="mr-4">
                                <input type="radio" name="experience" id="experience-yes" className="mx-1" {...register('haveExperience', {required: true})}/>
                                <label htmlFor="price" className="font-bold">Yes</label>
                            </div>
                            <div className="mx-4">
                                <input type="radio" name="experience" id="experience-no" className="mx-1" {...register('haveExperience', {required: true})}/>
                                <label htmlFor="price" className="font-bold">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <label htmlFor="social-account" className="block font-bold text-lg">Your Social Media or Linkedin Account</label>
                        <input type="text" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('socialMedia')}/>
                    </div>



                    <div className="my-5">
                        <label htmlFor="social-account" className="block font-bold text-lg">Where are you located?</label>
                        {errors.location?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Location is required</p>
                        )}
                        <select name="location" id="location" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('location', {required: true})}>
                            <option value="">Please select your area in Delhi</option>
                            <option value="noida">Noida</option>
                            <option value="new-delhi">New Delhi</option>
                            <option value="central">Central</option>
                            <option value="east">East</option>
                            <option value="south">South</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="my-5">
                        <label htmlFor="" className="block font-bold text-lg">What is your availability?</label>
                        {errors.availability?.type==='validate' && (
                            <p className="text-red-500 text-sm mb-2">{errors.availability.message}</p>
                        )}
                        <div>
                            <input type="checkbox" name="weekday-days" id="" value='weekday-days' className="mr-2" {...register('availability', {validate: (value)=> value.length>0 || "Please select one option"})}/>
                            <label htmlFor="">Weekdays (Daytime)</label>
                        </div>
                        <div>
                            <input type="checkbox" name="weekday-night" id="" value='weekday-night' className="mr-2" {...register('availability')}/>
                            <label htmlFor="">Weekdays (Evenings)</label>
                        </div>
                        <div>
                            <input type="checkbox" name="weekend" id="" value='weekend' className="mr-2" {...register('availability')}/>
                            <label htmlFor="">Weekends</label>
                        </div>
                    </div>

                    <div className="my-5">
                        <label htmlFor="phone" className="block font-bold text-lg">Phone Number</label>
                        {errors.phone?.type==="required" && (
                            <p className="text-red-500 text-sm mb-2">Phone Number is required</p>
                        )}
                        {(errors.phone?.type==="maxLength" || errors.phone?.type==="minLength") && (
                            <p className="text-red-500 text-sm mb-2">Enter a valid phone number</p>
                        )}
                        <input type="text" className="border-2 outline-none px-2 py-1 w-[90%] dark:text-primaryTextColor" {...register('phone', {required: true, maxLength: 10, minLength: 10})}/>
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