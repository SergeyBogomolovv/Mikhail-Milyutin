import { Separator } from '@/components/ui/separator'
import AboutFull from '@/modules/AboutFull'
import Achievments from '@/modules/Achievments'
import { Tabs, TabsProps } from 'antd'

export default function AboutPage() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Достижения',
      children: <Achievments />,
    },
    {
      key: '2',
      label: 'Интересное',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Еще что то',
      children: 'Content of Tab Pane 3',
    },
  ]

  return (
    <div className='container my-20'>
      <AboutFull />
      <Separator className='dark my-10' />
      <Tabs
        centered
        hideAdd
        animated
        className='font-poiret'
        type='card'
        items={items}
      />
    </div>
  )
}
