import About from '@/modules/About'
import CarouselMain from '@/modules/CarouselMain'
import Categories from '@/modules/Categories'

export default function Main() {
  return (
    <div>
      <CarouselMain />
      <div className='container'>
        <About />
        <Categories />
      </div>
    </div>
  )
}
