import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import AboutMobile from '@/components/AboutMobile'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'

export default function AboutMini() {
  return (
    <div className='container'>
      <Separator className='dark lg:my-20 my-5' />
      {window.innerWidth > 900 ? (
        <div className='grid grid-cols-2 gap-8 items-center justify-items-center mx-auto w-10/12'>
          <div className='flex justify-center'>
            <Link to={'/about'}>
              {' '}
              <motion.img
                whileHover={{ scale: 1.03 }}
                src='./mikhail.jpg'
                alt=''
                className='rounded-lg lg:w-full w-8/12'
              />
            </Link>
          </div>
          <div className='flex h-full flex-col justify-between'>
            <h1 className='sm:text-5xl ssm:text-4xl text-center text-3xl mb-4'>
              Об авторе
            </h1>
            <div className='flex flex-col gap-2 items-center text-[#b0b0b0] text-sm lg:text-lg font-poiret tracking-wider'>
              <p>
                Художник, создатель драгоценностей. Его работы становятся
                подарками сильным мира сего, а сам мастер считается одним из
                ведущих ювелиров современной России.
              </p>
              <p>
                Произведения Михаила Милютина – синтез ювелирного мастерства и
                художественной фантазии. Награды и подарки, изготовленные
                Милютиным, становятся атрибутами высокого общественного
                положения и подтверждением личных заслуг своих обладателей.
              </p>
              <Link to='/about' className=''>
                <Button variant='link' className='mx-auto text-base text-white'>
                  Подробнее
                  <ExternalLinkIcon className='ml-2' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <AboutMobile />
      )}
      <Separator className='dark lg:mt-20 mt-5' />
    </div>
  )
}
