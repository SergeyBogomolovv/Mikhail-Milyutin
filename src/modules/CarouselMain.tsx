import React from 'react'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'
// alicafon
const CarouselMain: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <Link to='/Жемчуг'>
        <img src='/alicafon1.jpg' alt='' className='w-full object-cover' />
      </Link>
      <Link to='/Жемчуг'>
        <img src='/alicafon.jpg' alt='' className='w-full object-cover' />
      </Link>
    </Carousel>
  )
}

export default CarouselMain
