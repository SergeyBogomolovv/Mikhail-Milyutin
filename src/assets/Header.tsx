import { Button } from '@/components/ui/button'
import { ClipboardCopyIcon, PersonIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import ContactsButton from './ContactsButton'
import { useRef } from 'react'
import Logo from './Logo'

export default function Header() {
  const ref: React.Ref<HTMLButtonElement> = useRef(null)
  return (
    <div className='bg-zinc-950 xl:pb-[28px] xl:pt-[14px] pt-[12px] pb-[24px]  xl:px-[50px] lg:px-[40px] md:px-[35px] px-[20px] flex gap-4 items-end justify-between'>
      <Link
        to='/'
        className='font-Fluence font-thin tracking-widest lg:text-4xl md:text-3xl ssm:text-2xl text-2xl leading-tight'
      >
        <Logo className='xl:w-60 lg:w-52 md:w-48 w-44' />
      </Link>
      <div className='flex gap-2'>
        <ContactsButton>
          <Button
            variant='ghost'
            className='lg:text-lg md:text-md text-sm dark flex'
          >
            <PersonIcon className='ssm:mr-2 lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4 ' />
            <div className='hidden ssm:block'>Контакты</div>
          </Button>
        </ContactsButton>

        <Button
          variant='ghost'
          className='lg:text-lg md:text-md text-sm dark hidden sm:flex'
          ref={ref}
          onClick={async () => {
            await navigator.clipboard.writeText('+7 925 985 98-40')
            toast('Скопировано в буфер обмена')
          }}
        >
          <ClipboardCopyIcon className='mr-2 lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4 ' />
          +7 925 985 98-40
        </Button>
      </div>
    </div>
  )
}
