import React, { useState } from 'react';
import { GetHire, MenuImg } from '../../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='nav flex justify-between px-[5vw] py-4 items-center'>
        <img src={GetHire} alt='' className='w-[160px]' />
        <div className='menu-items'>
          <button className='MenuImg' onClick={toggleMenu}>
            <img src={MenuImg} alt='' className='w-[30px]' />
          </button>
        </div>
      </nav>
      {isOpen && (
        <>
          <div className='menu-content flex flex-col justify-between'>
            <div className='menu-top'>
              <div className='close-btn flex justify-end'>
                <button className='MenuImg' onClick={toggleMenu}>
                  <img src={MenuImg} alt='' className='w-[30px]' />
                </button>
              </div>
              <div className='ham-menu-items'>
                <ul>
                  <li>Courses</li>
                  <li>Community</li>
                  <li>Event</li>
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
