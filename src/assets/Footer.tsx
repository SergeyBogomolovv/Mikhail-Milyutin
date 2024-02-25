import { CopyrightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-zinc-950 py-[24px] px-[50px] flex gap-16 items-center justify-between text-neutral-600 tracking-wide'>
      <Link to='/политика-конфиденциальности' className='hover:text-white'>
        Сайт использует файлы cookie
      </Link>
      <div className='flex gap-2 items-center'>
        <CopyrightOutlined />
        2024 Mikhail Milyutin
      </div>
    </div>
  )
}
