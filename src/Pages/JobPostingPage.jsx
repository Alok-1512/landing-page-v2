import React from 'react';
import { PlayStore,AppleStore } from '../assets';

const JobPostingPage = () => {
    return(
        <>
            <div className='flex-column font-bold description bg-stone-300'>
                <div className='text-4xl'>
                   Find The Best Suitable <p></p> Career Opportunity
                   </div>
                   <div className=' py-6'>Download The App 
                    <img src={AppleStore} alt="" className='h-8' />
                    <img src={PlayStore} alt="" className='h-8'/>
                    </div>
            </div>

            <div className='flex-column font-bold description'>
                <div className='text-4xl'>
                   Find The Best Suitable <p></p> Career Opportunity
                   </div>
                   <div className=' py-6'>Download The App 
                    <img src={AppleStore} alt="" className='h-8' />
                    <img src={PlayStore} alt="" className='h-8'/>
                    </div>
            </div>
        </>
    );
}

export default JobPostingPage;