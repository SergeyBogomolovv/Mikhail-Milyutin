import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { FC, ReactElement } from 'react'
import { Button } from '@/components/ui/button'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Separator } from '@/components/ui/separator'
import TelegramIcon from '@/icons/TelegramIcon'
import VKIcon from '@/icons/VKIcon'
import MapIcon from '@/icons/MapIcon'
import PointIcon from '@/icons/PointIcon'

interface Props {
  children: ReactElement
}

const ContactsButton: FC<Props> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='dark' side='top'>
        <SheetHeader>
          <SheetTitle className='tracking-wide text-center text-3xl'>
            Контакты
          </SheetTitle>
        </SheetHeader>
        <Separator className='dark mb-5 mt-3' />
        <div className='grid 940:grid-cols-4 md:grid-cols-3 ssm:grid-cols-2 mx-auto 2xl:mx-32 xl:mx-20 lg:mx-14 gap-6 items-center ssm:justify-center'>
          <div className='flex flex-col gap-3 items-start w-fit'>
            <Button
              variant='link'
              className='dark flex gap-2 tracking-wider sm:text-md text-sm'
            >
              <EnvelopeClosedIcon className='sm:w-5 w-4 h-4 sm:h-5' />
              m-milutin@mail.ru
            </Button>
            <Button
              variant='link'
              className='dark flex gap-2 tracking-wider sm:text-md text-sm'
            >
              <EnvelopeClosedIcon className='sm:w-5 w-4 h-4 sm:h-5' />
              m-millutin@hotmail.com
            </Button>
          </div>
          <Separator className='dark ssm:hidden' />
          <div className='flex flex-col gap-3 items-start w-fit'>
            <Button
              variant='link'
              className='dark flex gap-2 tracking-wider sm:text-md text-sm'
            >
              <WhatsAppOutlined />
              WhatsApp
            </Button>
            <Button
              variant='link'
              className='dark flex gap-2 tracking-wider sm:text-md text-sm'
            >
              <PhoneOutlined />
              +7 925 985 98-40
            </Button>
          </div>
          <Separator className='dark ssm:hidden' />
          <div className='flex flex-col gap-3 items-start  w-fit'>
            <a href='https://t.me/CqsnbeaJ7do4MTc6'>
              <Button
                variant='link'
                className='dark flex gap-2 tracking-wider sm:text-md text-sm'
              >
                <TelegramIcon />
                Телеграмм
              </Button>
            </a>
            <a href='https://vk.com/id710234058'>
              <Button
                variant='link'
                className='dark flex gap-2 tracking-wider sm:text-md text-sm'
              >
                <VKIcon />
                ВКонтакте
              </Button>
            </a>
          </div>
          <Separator className='dark ssm:hidden' />
          <div className='flex flex-col gap-5 items-start tracking-wider sm:text-md text-sm'>
            <Button
              variant='link'
              className='dark flex gap-2 tracking-wider sm:text-md text-sm'
            >
              <MapIcon />
              Шоу рум, 115419, Россия, г. Москва
            </Button>

            <Button
              variant='link'
              className='dark flex gap-2 tracking-wider sm:text-md text-sm'
            >
              <PointIcon />
              ул. Орджоникидзе, д.11 стр.3
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default ContactsButton
