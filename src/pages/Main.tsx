import { Separator } from '@/components/ui/separator'
import About from '@/modules/About'
import CarouselMain from '@/modules/CarouselMain'
import Categories from '@/modules/Categories'

export default function Main() {
  return (
    <div>
      <CarouselMain />
      <div className='container'>
        <Separator className='dark lg:my-20 my-5' />
        <About />
        <Separator className='dark lg:my-20 my-5' />
        <Separator className='dark lg:my-20 md:hidden' />
      </div>
      <div className='bg-neutral-700 h-40 mb-20 text-5xl flex items-center justify-center tracking-wider'>
        Коллекции
      </div>
      <div className='container'>
        <Categories />
      </div>
    </div>
  )
}
