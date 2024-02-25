import { collections } from '@/collections'
import Collection from '@/components/Collection'
import { Separator } from '@/components/ui/separator'

export default function Categories() {
  return (
    <>
      <h1 className='sm:text-5xl ssm:text-4xl text-3xl text-center sm:mt-10 ssm:mt-7 mt-5 tracking-widest'>
        Коллекции
      </h1>
      <Separator className='dark sm:my-5 my-3' />
      <div className='grid md:grid-cols-3 ssm:grid-cols-2 md:gap-8 gap-6 lg:gap-10'>
        {collections.map((collection) => (
          <Collection collection={collection} />
        ))}
      </div>
    </>
  )
}
