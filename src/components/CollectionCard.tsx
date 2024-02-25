import { ICard } from '@/models/Card'
import { Image } from 'antd'
import { Separator } from './ui/separator'
interface Props {
  card: ICard
}
export default function CollectionCard({ card }: Props) {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <Image src={card.src} alt='' className='rounded-lg' />
      {card.title && (
        <>
          <Separator className='dark' />
          <div className='text-lg'>{card.title}</div>
        </>
      )}
    </div>
  )
}
