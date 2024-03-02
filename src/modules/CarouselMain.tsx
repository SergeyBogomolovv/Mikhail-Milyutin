import React from 'react'
import { Carousel } from 'antd'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Link } from 'react-router-dom'

const CarouselMain: React.FC = () => {
  const ration = window.innerWidth > 900 ? 16 / 6 : 16 / 9
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      <Link to='/Жемчуг'>
        <AspectRatio ratio={ration}>
          <img
            src={window.innerWidth > 900 ? './banner.png' : './banner1.png'}
            alt=''
            className='w-full'
          />
        </AspectRatio>
      </Link>
      <AspectRatio ratio={ration}>
        <img src='./1.jpeg' alt='' className='w-full' />
      </AspectRatio>
    </Carousel>
  )
}

export default CarouselMain
