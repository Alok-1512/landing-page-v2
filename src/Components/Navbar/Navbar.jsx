import { useState } from 'react';
import { GetHire, MenuImg } from '../../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='nav flex justify-between px-[5vw] py-4 items-center'>
        <Link to='/'>
          <img src={GetHire} alt='' className='w-[160px]' />
        </Link>
        <div className='menu-items flex justify-end w-[100%]'>
          <button className='MenuImg w-[10%] md:w-[5%] ' onClick={toggleMenu}>
            <img src={MenuImg} alt='' className='w-[30px]' />
          </button>
        </div>
      </nav>
      {isOpen && (
        <>
          <div className='menu-content flex flex-col justify-between'>
            <div className='menu-top'>
              <div className='close-btn flex justify-end'>
                <button className='MenuImg w-[30%]' onClick={toggleMenu}>
                  <img src={MenuImg} alt='' className='w-[30px]' />
                </button>
              </div>
              <div className='ham-menu-items'>
                <ul>
                  <Link to='/about-us'>
                    <li>About Us</li>
                  </Link>
                  <Link to='/blog'>
                    <li>Blogs</li>
                  </Link>
                  <Link to='/contact'>
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className='ham-menu-links'>
              <ul>
                <li>T&C</li>
                <li>Privacy</li>
                <li>Users</li>
                <li>Greivances</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
