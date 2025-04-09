import { GiReceiveMoney } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import { FaClock } from "react-icons/fa";

function Feature() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='bg-darkBackground text-darkTextColor dark:bg-darkTextColor dark:text-primaryTextColor mx-5 my-10 md:mx-10 p-4 rounded-md'>
            <GiReceiveMoney size={50} className="mb-4"/>
            <div>
                <h3 className='font-bold md:text-xl sm:text-xl'>Affordable & Reliable Services</h3>
                <p className='text-md py-1'>Get quality services at student-friendly prices, provided by skilled students.</p>
            </div>
        </div>

        <div className='bg-darkBackground text-darkTextColor dark:bg-darkTextColor dark:text-primaryTextColor mx-5 my-10 md:mx-10 p-4 rounded-md'>
            <MdVerifiedUser size={50} className="mb-4"/>
            <div>
                <h3 className='font-bold md:text-xl sm:text-xl'>Verified Student Professionals</h3>
                <p className='text-md py-1'>Every service provider is vetted to ensure trust and quality.</p>
            </div>
        </div>

        <div className='bg-darkBackground text-darkTextColor dark:bg-darkTextColor dark:text-primaryTextColor mx-5 my-10 md:mx-10 p-4  rounded-md'>
            <FaClock size={50} className="mb-4"/>
            <div>
                <h3 className="font-bold md:text-xl sm:text-xl">Flexible Scheduling</h3>
                <p className='text-md py-1'>Book services at your convenience with easy scheduling and real-time updates.</p>
            </div>
        </div>
  </div>
  )
}

export default Feature
