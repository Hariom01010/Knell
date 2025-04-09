import Image from "next/image"
import {RATING} from "../../constants"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function Ratings() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 my-24'>
      {
        RATING.map((rating)=>(
            <div key={rating.id} className='flex flex-wrap flex-col shadow-lg bg-[#F2FBF5] text-primaryTextColor shadow-[#bfbfbf] dark:shadow-[#000000] mx-3 md:mx-10 my-4 px-3 md:px-6 py-5 sm:my-5 rounded-md'>
                <div className='flex my-5'>
                    {[...Array(5)].map((_,i)=>{
                        if(i < Math.floor(rating.stars)){
                            return <FaStar className='bg-darkBackground text-darkTextColor mx-1 p-1' key={i} size={20}/>
                        } else if(i < rating.stars){
                            return <FaStarHalfAlt className='bg-darkBackground text-darkTextColor mx-1 p-1' key={i} size={20}/>
                          }else{
                            return <FaRegStar className='bg-darkBackground text-darkTextColor mx-1 p-1' key={i} size={20}/>
                          }
                        })}
                </div>
                <p className='italic my-5 text-[13px] md:text-md'>{rating.review}</p>
                <div className="flex items-center">
                  <Image src='/defaultPFP.png' width={50} height={50} alt='default profile icon' className="mb-5 mr-2"/> 
                  <h1 className='font-bold'>{rating.name}</h1>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Ratings
