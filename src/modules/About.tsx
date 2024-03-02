import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='sm:mt-0 grid md:grid-cols-[2fr_3fr] gap-6 items-center justify-items-center'>
      <h1 className='md:hidden sm:text-5xl ssm:text-4xl text-center text-3xl sm:my-10 tracking-wide'>
        Об авторе
      </h1>
      <div className='flex justify-center'>
        <img
          src='./mikhail.jpg'
          alt=''
          className='rounded-lg md:w-full w-8/12'
        />
      </div>
      <div>
        <h1 className='hidden md:block sm:text-5xl ssm:text-4xl text-center text-3xl my-5 sm:my-10 tracking-wide'>
          Об авторе
        </h1>
        <div className='flex flex-col gap-8 items-center'>
          <p className='text-[#b0b0b0] text-center text-sm md:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, iure. Suscipit laboriosam veritatis nisi?
          </p>
          {window.innerWidth > 900 && (
            <Link to='/about' className=''>
              <Button variant='link' className='text-[#b0b0b0] mx-auto'>
                Подробнее
              </Button>
            </Link>
          )}
        </div>
      </div>
      {window.innerWidth < 900 && (
        <Link to='/about' className=''>
          <Button variant='link' className='text-[#b0b0b0] mx-auto'>
            Подробнее
          </Button>
        </Link>
      )}
    </div>
  )
}
