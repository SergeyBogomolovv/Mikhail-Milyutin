import ContactsButton from './ContactsButton'
import { Button } from '@/components/ui/button'
import { PersonIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <div className='bg-zinc-950 py-[24px] md:px-[50px] mt-10 px-[30px] flex gap-6 items-center justify-between tracking-wide'>
      <div>Посещение только по предварительной записи</div>
      <ContactsButton>
        <Button variant='ghost' className='lg:text-lg md:text-md text-sm dark'>
          <PersonIcon className='ssm:mr-2 lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4 ' />
          <div className='ssm:block hidden'>Контакты</div>
        </Button>
      </ContactsButton>
    </div>
  )
}
