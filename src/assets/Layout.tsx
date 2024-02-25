import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ContactsButton from './ContactsButton'
import { FloatButton } from 'antd'
import { ContactsOutlined } from '@ant-design/icons'

export default function Layout() {
  return (
    <div className='min-h-[100svh] flex flex-col'>
      <Header />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <ContactsButton>
        <FloatButton
          className='dark bg-white h-[50px] w-[50px] ssm:hidden'
          icon={<ContactsOutlined />}
        />
      </ContactsButton>
      <Footer />
    </div>
  )
}
