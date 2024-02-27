import React from 'react'
import { Carousel } from 'antd'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Link } from 'react-router-dom'

const CarouselMain: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      <Link to='/Жемчуг'>
        <AspectRatio ratio={16 / 6.2}>
          <img src='./banner.png' alt='' className='w-full' />
        </AspectRatio>
      </Link>
      <AspectRatio ratio={16 / 6.2}>
        <img src='./1.jpeg' alt='' className='w-full' />
      </AspectRatio>
    </Carousel>
  )
}

export default CarouselMain
