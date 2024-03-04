import React from 'react'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'

const CarouselMain: React.FC = () => {
  // const ration = window.innerWidth > 900 ? 16 / 6 : 16 / 9
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      <Link to='/Жемчуг'>
        <img src='/alicafon1.jpg' alt='' className='w-full object-cover' />
      </Link>
      <img src='/alicafon.jpg' alt='' className='w-full object-cover' />
    </Carousel>
  )
}

export default CarouselMain
