import { useState } from 'react';
import { Link } from 'react-scroll';
import { useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuVisible,setIsMenuVisible] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuVisible(false);
      }
    };

    if (isMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside); // 🔥 Added for mobile support
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuVisible]);

  const handleCloseMenu = () => {
    setIsMenuVisible(false);
  }

  return (
    <div className='flex items-center fixed justify-between lg:justify-around bg-gray-900 w-full z-50 p-2 lg:p-4'>
        <div className='text-2xl text-white'>Ritik Dubey</div>
        <div className='hidden lg:block'>
            <ul className='flex space-x-8 text-gray-300'>
                <Link className='hover:cursor-pointer' to='home' duration={1000} smooth={true}>Home</Link>
                <Link className='hover:cursor-pointer' to='about' duration={1000} smooth={true}>About</Link>
                <Link className='hover:cursor-pointer' to='experience' duration={1000} smooth={true}>Experience</Link>
                <Link className='hover:cursor-pointer' to='work' duration={1000} smooth={true}>Projects</Link>
                <Link className='hover:cursor-pointer' to='skills' duration={1000} smooth={true}>Skills</Link>
                <Link className='hover:cursor-pointer' to='ContactUs' duration={1000} smooth={true}>Contact</Link>
            </ul>
        </div>
        <div className='lg:hidden' ref={menuRef}>
            <svg onClick={()=>setIsMenuVisible(!isMenuVisible)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide text-white lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            {isMenuVisible && <div className='bg-gray-700 p-2 w-32 rounded-lg right-1 mt-1 absolute'>
              <ul className='flex flex-col space-y-4 text-white w-full items-center'>
                  <Link onClick={handleCloseMenu} className='hover:cursor-pointer w-full text-center' to='home' duration={1000} smooth={true}>Home</Link>
                  <Link onClick={handleCloseMenu} className='hover:cursor-pointer  w-full text-center' to='about' duration={1000} smooth={true}>About</Link>
                  <Link onClick={handleCloseMenu} className='hover:cursor-pointer w-full text-center' to='experience' duration={1000} smooth={true}>Experience</Link>
                  <Link onClick={handleCloseMenu} className='hover:cursor-pointer w-full text-center' to='work' duration={1000} smooth={true}>Projects</Link>
                  <Link onClick={handleCloseMenu} className='hover:cursor-pointer w-full text-center' to='skills' duration={1000} smooth={true}>Skills</Link>
                  <Link onClick={handleCloseMenu} className='hover:cursor-pointer w-full text-center' to='ContactUs' duration={1000} smooth={true}>Contact</Link>
              </ul>
            </div>}
        </div>

    </div>
  )
}

export default Navbar