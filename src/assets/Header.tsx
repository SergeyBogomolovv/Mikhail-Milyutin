import { Button } from '@/components/ui/button'
import { ClipboardCopyIcon, PersonIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import ContactsButton from './ContactsButton'

export default function Header() {
  return (
    <div>
      <div className='bg-zinc-950 xl:py-[12px] lg:py-[10px] py-[8px] xl:px-[50px] lg:px-[40px] md:px-[35px] px-[20px] flex gap-4 items-center ssm:justify-between justify-center'>
        <Link
          to='/'
          className='font-Fluence font-thin tracking-widest lg:text-4xl md:text-3xl sm:text-2xl sssm:text-3xl text-2xl leading-tight'
        >
          Mikhail Milyutin
        </Link>
        <ContactsButton>
          <Button variant='ghost' className='sm:hidden hidden ssm:flex dark'>
            <PersonIcon className='w-5 h-5 mr-2' />
            Контакты
          </Button>
        </ContactsButton>
        <div className='hidden sm:block'>
          <ContactsButton>
            <Button
              variant='ghost'
              className='lg:text-lg md:text-md text-sm dark'
            >
              <PersonIcon className='mr-2 lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4 ' />
              Контакты
            </Button>
          </ContactsButton>

          <Button
            variant='ghost'
            className='lg:text-lg md:text-md text-sm dark'
            onClick={() => toast('Скопировано в буфер обмена')}
          >
            <ClipboardCopyIcon className='mr-2 lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4 ' />
            +7 925 985 98-40
          </Button>
        </div>
      </div>
    </div>
  )
}
