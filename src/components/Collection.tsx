import { ICollection } from '@/models/Collection'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Separator } from './ui/separator'

interface Props {
  collection: ICollection
}

export default function Collection({ collection }: Props) {
  return (
    <Link to={collection.title} className='flex flex-col items-center gap-6'>
      <motion.img whileHover={{ scale: 1.03 }} src={collection.image} alt='' />
      <Separator />
      <div className='text-xl text-[#b0b0b0] hover:text-white'>
        {collection.title}
      </div>
    </Link>
  )
}
