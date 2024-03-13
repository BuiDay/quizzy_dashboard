
import LogoQSG from '../../../assets/images/logo-qsg.png'
import { Link } from 'react-router-dom'
import Avatar from '../../../assets/images/9.png'
import { Dropdown } from './Dropdown'
import NotificationsDropdown from './NotificationsDropdown'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 bg-pri border-zinc-800 border-b-[1px]'>
      <div className='h-[60px] flex items-center justify-between px-[50px]'>
        <div className='logo'>
          <Link to='/' className='logo-qsg'>
            <img src={LogoQSG} alt='logo-qsg' className='max-w-[150px]' />
          </Link>
        </div>
        <div className='h-full flex items-center justify-center gap-10 cursor-pointer'>
          <NotificationsDropdown />
          <Dropdown avatar={Avatar} displayName="Nhat Bui"/>
        </div>
      </div>
    </div>
  )
}

export default Header
