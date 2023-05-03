import React from 'react';
import {GetHire, Courses, Community, Event, MenuImg} from '../assets';

const Navbar = () => {
    return(
        <div className='nav mt-5 mr-5'>
            <div className='flex items-center justify-between'> 
            <img src={GetHire} alt="" className='w-[160px]'/>
            <div className=''>
            <ul className='flex gap-8'>
                <ul>
                <img src={Courses} alt="" className='h-6' />
                <li>Courses</li>
                </ul>
                <ul>
                <img src={Community} alt="" className='h-6'/>
                <li>Community</li>
                </ul>
                <ul>
                <img src={Event} alt="" className='h-6'/>
                <li>Event</li>
                </ul>
                <ul>
                <img src={MenuImg} alt="" className='h-6'/>
                <li>Menu</li>
                </ul>
            </ul></div>
            </div>
        </div>
        
    )
}

export default Navbar;