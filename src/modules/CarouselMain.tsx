import React from 'react'
import { Carousel } from 'antd'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Link } from 'react-router-dom'

const CarouselMain: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      <Link to='/Жемчуг'>
        <AspectRatio ratio={16 / 9}>
          <img src='./banner1.png' alt='' />
        </AspectRatio>
      </Link>
      <AspectRatio ratio={16 / 9}>
        <img src='./2911395.jpg' alt='' />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <img src='./1.jpeg' alt='' />
      </AspectRatio>
    </Carousel>
  )
}

export default CarouselMain
