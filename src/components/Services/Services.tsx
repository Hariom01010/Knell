import { FaDog, FaBook, FaMusic } from "react-icons/fa";
import { PiHairDryerFill } from "react-icons/pi";
import { GiThreeFriends } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import Link from "next/link";

function Services() {
  return (
    <div className="bg-darkTextColor dark:bg-secondaryDarkBackground px-10 md:px-14 pt-14 pb-16">
      <h1 className="text-center font-bold text-2xl md:text-4xl pt-10 pb-20 ">Explore Our Comprehensive Range of Professional Services</h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-x-5 md:grid-rows-2 md:grid-cols-3">
        <div className="my-5 flex flex-col items-center">
          <FaDog size={80} className="mb-5 w-20" />
          <h2 className="font-bold text-lg mb-3">Dog Walking</h2>
          <p className="text-center sm:px-3 md:px-10 lg:px-14">Paws-itively the best walks for your furry friend!</p>
        </div>

        <div className="my-5 flex flex-col flex-wrap items-center">
          <FaBook size={80} className="mb-5 w-20" />
          <h2 className="font-bold text-lg mb-3">Study Help</h2>
          <p className="text-center sm:px-3 md:px-10 lg:px-14">Ace your studies with expert guidance!</p>
        </div>

        <div className="my-5 flex flex-col items-center">
          <PiHairDryerFill size={80} className="mb-5 w-20" />
          <h2 className="font-bold text-lg mb-3">Hair and Makeup</h2>
          <p className="text-center sm:px-3 md:px-10 lg:px-14">Glam up for any occasion, effortlessly!</p>
        </div>

        <div className="my-5 flex flex-col items-center">
          <GiThreeFriends size={80} className="mb-5 w-20" />
          <h2 className="font-bold text-lg mb-3">Event Companion</h2>
          <p className="text-center sm:px-3 md:px-10 lg:px-14">Your perfect plus-one for any event!</p>
        </div>

        <div className="my-5 flex flex-col items-center">
          <FaMusic size={80} className="mb-5 w-20" />
          <h2 className="font-bold text-lg mb-3">Musician</h2>
          <p className="text-center sm:px-3 md:px-10 lg:px-14">Bringing the perfect soundtrack to your moments!</p>
        </div>

        <div className="my-5 flex flex-col items-center">
          <MdContactSupport size={80} className="mb-5 w-20" />
          <h2 className="font-bold text-lg mb-3">Technical Support</h2>
          <p className="text-center sm:px-3 md:px-10 lg:px-14">Fast and reliable tech help, anytime!</p>
        </div>
      </div>
      <div className="w-[100%] flex justify-center">
        <Link href='/service-provider' className="bg-darkBackground text-darkTextColor px-10 py-3 my-5 rounded-md text-center">Check our Top Service Providers</Link>
      </div>
    </div>
  )
}

export default Services
