import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function MainAlert() {
  return (
    <Alert variant='destructive' className='my-5 font-sans'>
      <ExclamationTriangleIcon className='h-4 w-4' />
      <AlertTitle>Внимание</AlertTitle>
      <AlertDescription>
        Просьба писать только по записи (дописать что тут будет)
      </AlertDescription>
    </Alert>
  )
}
