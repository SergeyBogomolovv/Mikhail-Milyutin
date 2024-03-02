import { Separator } from '@/components/ui/separator'
import AboutFull from '@/modules/AboutFull'
import Achievments from '@/modules/Achievments'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AboutPage() {
  return (
    <div className='container my-20'>
      <AboutFull />
      <Separator className='dark my-10' />
      <Tabs defaultValue='достижения' className='container dark'>
        <TabsList className='w-full bg-transparent mb-10'>
          <TabsTrigger
            className='w-full text-xl tracking-widest'
            value='достижения'
          >
            Достижения
          </TabsTrigger>
          <TabsTrigger
            className='w-full text-xl tracking-widest'
            value='интересное'
          >
            Интересное
          </TabsTrigger>
        </TabsList>
        <TabsContent value='достижения'>
          <Achievments />
        </TabsContent>
        <TabsContent value='интересное'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}
