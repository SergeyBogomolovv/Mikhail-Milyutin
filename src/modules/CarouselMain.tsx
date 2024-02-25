import React from 'react'
import { Carousel } from 'antd'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const CarouselMain: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <AspectRatio ratio={16 / 9}>
        <img src='./1.jpeg' alt='' />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <img src='./2911395.jpg' alt='' />
      </AspectRatio>
    </Carousel>
  )
}

export default CarouselMain
