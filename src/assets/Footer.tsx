import { Button } from '@/components/ui/button'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import TelegramIcon from '@/icons/TelegramIcon'
import VKIcon from '@/icons/VKIcon'
import { toast } from 'sonner'

export default function Footer() {
  return (
    <div className='bg-zinc-950 py-[24px] px-[50px] flex gap-16 items-center justify-center'>
      <div className='hidden lg:flex flex-col gap-3 items-start'>
        <Button
          variant='link'
          className='dark flex gap-2 tracking-wider'
          onClick={async () => {
            await navigator.clipboard.writeText('m-milutin@mail.ru')
            toast('Скопировано в буфер обмена')
          }}
        >
          <EnvelopeClosedIcon className='w-5 h-5' />
          m-milutin@mail.ru
        </Button>
        <Button
          variant='link'
          className='dark flex gap-2 tracking-wider'
          onClick={async () => {
            await navigator.clipboard.writeText('m-millutin@hotmail.com')
            toast('Скопировано в буфер обмена')
          }}
        >
          <EnvelopeClosedIcon className='w-5 h-5' />
          m-millutin@hotmail.com
        </Button>
      </div>

      <div className='hidden sm:flex flex-col gap-3 items-start'>
        <Button variant='link' className='dark flex gap-2 tracking-wider'>
          <WhatsAppOutlined />
          WhatsApp
        </Button>
        <Button
          variant='link'
          className='dark flex gap-2 tracking-wider'
          onClick={async () => {
            await navigator.clipboard.writeText('+7 925 985 98-40')
            toast('Скопировано в буфер обмена')
          }}
        >
          <PhoneOutlined />
          +7 925 985 98-40
        </Button>
      </div>
      <div className='hidden md:flex flex-col gap-3 items-start'>
        <a href='https://t.me/CqsnbeaJ7do4MTc6'>
          <Button variant='link' className='dark flex gap-2 tracking-wider'>
            <TelegramIcon />
            Телеграмм
          </Button>
        </a>
        <a href='https://vk.com/id710234058'>
          <Button variant='link' className='dark flex gap-2 tracking-wider'>
            <VKIcon />
            ВКонтакте
          </Button>
        </a>
      </div>
      <Button variant='link' className='text-white'>
        <a
          href='https://yandex.ru/maps/213/moscow/house/ulitsa_ordzhonikidze_11s3/Z04Ycw5mSEAAQFtvfXtxd3tgZQ==/?indoorLevel=1&ll=37.596157%2C55.706731&z=17.11'
          target='_blanc'
          className='flex flex-col gap-5 items-start tracking-wider'
        >
          <div>Шоу рум, 115419, Россия, г. Москва</div>
          <div>ул. Орджоникидзе, д.11 стр.3</div>
        </a>
      </Button>
    </div>
  )
}
