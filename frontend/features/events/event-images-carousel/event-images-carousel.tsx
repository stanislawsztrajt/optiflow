import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

interface IProps {
  images: string[]
}

const EventImagesCarousel: React.FC<IProps> = ({ images }) => {

  const imagesMap = images?.map(image => {
    return (
      <div key={image} className='relative w-full h-56 sm:h-72 lg:h-96'>
        <Image
          src={`${image}`}
          fill={true}
          loading='lazy'
          className="object-cover object-center w-full rounded-lg shadow"
          alt=''
        />
      </div>
    )
  })


  return (
    <>
      <div>
        <Carousel
          slideInterval={2000}
          indicators={images.length > 1}
          leftControl={images.length <= 1}
          rightControl={images.length <= 1}
        >
          { imagesMap }
        </Carousel>
      </div>
    </>
  )
}

export default EventImagesCarousel;