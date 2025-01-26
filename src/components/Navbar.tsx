import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex items-center fixed justify-around bg-gray-900 w-full z-50  p-4'>
        <div className='text-2xl text-white'>Ritik Dubey</div>
        <div>
            <ul className='flex space-x-8 text-gray-300'>
                <Link className='hover:cursor-pointer' to='home' duration={1000} smooth={true}>Home</Link>
                <Link className='hover:cursor-pointer' to='about' duration={1000} smooth={true}>About</Link>
                <Link className='hover:cursor-pointer' to='experience' duration={1000} smooth={true}>Experience</Link>
                <Link className='hover:cursor-pointer' to='skills' duration={1000} smooth={true}>Skills</Link>
                <Link className='hover:cursor-pointer' to='ContactUs' duration={1000} smooth={true}>Contact</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar