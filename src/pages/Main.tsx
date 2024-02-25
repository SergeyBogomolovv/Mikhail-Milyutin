import { Separator } from '@/components/ui/separator'
import About from '@/modules/About'
import Achievments from '@/modules/Achievments'
import CarouselMain from '@/modules/CarouselMain'
import Categories from '@/modules/Categories'

export default function Main() {
  return (
    <div className='lg:container'>
      <CarouselMain />
      <div className='container'>
        <Categories />
        <Separator className='dark hidden sm:block my-5 sm:my-10' />
        <About />
        <Achievments />
      </div>
    </div>
  )
}
