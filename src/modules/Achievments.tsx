import { Separator } from '@/components/ui/separator'
import { Image } from 'antd'

interface Achievments {
  src: string
  title: string
}

export default function Achievments() {
  return (
    <div>
      <h1 className='ssm:text-4xl text-3xl text-center mb-5 mt-10 tracking-wide'>
        Достижения
      </h1>
      <Separator className='my-5 dark' />
      <div className='lg:flex grid md:grid-cols-3  sm:grid-cols-2 gap-12 items-center justify-center justify-items-center leading-6 tracking-wider'>
        <div className='grid gap-4 text-center'>
          <Image src='./achievments/1.jpeg' alt='' />
          <Separator />
          <div className='xl:text-lg text-sm'>
            В 2022 году стал призером выставки «Гохран России», в номинации
            «Использование нетрадиционных материалов в авторских работах»
          </div>
        </div>
        <div className='grid gap-4 text-center'>
          <Image src='./achievments/2.jpg' alt='' />
          <Separator />
          <div className='xl:text-lg text-sm'>
            В 2021 году стал призером ювелирной выставки J – 1, в номинации
            «Лучшее ювелирное искусство»
          </div>
        </div>
        <div className='grid gap-4 text-center'>
          <Image src='./achievments/4.jpg' alt='' />
          <Separator />
          <div className='xl:text-lg text-sm'>
            В 2019 году стал призером выставки «Гохран России», в номинации
            «Ювелирные техники: традиции и мастерство»
          </div>
        </div>
        <div className='grid gap-4 text-center'>
          <Image src='./achievments/3.jpg' alt='' />
          <Separator />
          <div className='xl:text-lg text-sm'>
            С 2020 года состоит в «Международной Академии творчества
          </div>
        </div>
      </div>
      <Separator className='my-5 dark' />
    </div>
  )
}