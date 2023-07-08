import Logo from '../../assets/Logo/1.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-32 mx-2'>
      <Link to='/'> 
        <div className='header-content flex items-center mr-4'>
          <h1 className=' text-2xl text-green-700 font-extrabold uppercase'>Gakii.Dev</h1>
          <img className='h-24 cursor-pointer' src={Logo} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Header

