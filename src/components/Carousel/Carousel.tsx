import Image from "next/image"

function Carousel({animation}: {animation: string}) {
  return (
    <div className="overflow-hidden  whitespace-nowrap">
        <div className={`flex justify-evenly ${animation}`}>
        <Image src='/dog-walking.jpeg' width={250} height={250} alt="service-image"/>
        <Image src='/gym-spot.jpg' width={250} height={250} alt="service-image"/>
        <Image src='/musician.jpeg' width={250} height={250} alt="service-image"/>
        <Image src='/study help.jpeg' width={250} height={250} alt="service-image"/>
        </div>
    </div>
  )
}

export default Carousel
