"use client"
import { SERVICE_PROVIDER } from "@/constants"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { RxCross2 } from "react-icons/rx";

interface Provider {
    id: number;
    imgSrc: string;
    name: string;
    occupation: string;
    description: string;
}

function Page() {
    const [showModal, setShowModal] = useState(false);
    const [provider, setProvider] = useState<Provider | null>(null);

    const handleCardClick = (provider: Provider) => {
        setProvider(provider)
        setShowModal(true);
    }
    const modalClose = ()=>{
        setShowModal(false)
        setProvider(null);
    }

  return (
    <div className="grid grid-rows-1 md:grid-rows-2 grid-cols-2 gap-6 justify-center justify-items-center">
      {SERVICE_PROVIDER.map((provider)=>(
        <div className="bg-darkBackground text-darkTextColor m-5 p-5 rounded-md w-[60%] h-max cursor-pointer flex flex-col items-center" key={provider.id} onClick={()=>handleCardClick(provider)} onKeyDown={(e) => e.key === 'Enter' && handleCardClick(provider)} role="button" tabIndex={0}>
            <Image src={provider.imgSrc} width={150} height={150} className="rounded-md" alt={`${provider.name}-provider-profile-pic`}/>
            <h1 className="text-2xl font-bold pt-3">{provider.name}</h1>
            <h2 className="pb-3">{provider.occupation}</h2>
            <p>{provider.description.slice(0,130)}...</p>
        </div>
      ))}
        {
            showModal && provider
            ?   <div className="absolute bg-primaryBackground text-primaryTextColor w-[40%] my-12 p-8 shadow-md rounded-md">
                    <div className="w-[100%] flex justify-end">
                        <RxCross2 size={25} className="relative right-0 mb-5 cursor-pointer" onClick={()=>modalClose()}/>
                    </div>
                    <Image src={provider.imgSrc} width={150} height={150} className="rounded-md" alt={`${provider.name}-provider-profile-pic`}/>
                    <h1 className="text-2xl font-bold pt-3">{provider.name}</h1>
                    <h2 className="pb-3">{provider.occupation}</h2>
                    <p>{provider.description}</p>
                    <Link href='/signup/user'><button className="bg-darkBackground text-darkTextColor rounded-md py-2 px-8 my-5 text-center">Book an appointment</button></Link>
                </div>
            : <></>
        }
        
    </div>
  )
}

export default Page
