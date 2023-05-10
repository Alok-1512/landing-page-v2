import React from 'react';
import { AppleStore, PlayStore } from '../assets';

const JobPostingPage = () => {
  return (
    <>
      <div className='find-cta dark flex justify-center items-center h-[50vh]'>
        <div className='left-text-box space-y-5 w-[33%]'>
          <h2>Find the Best Suitable Career Opportunity</h2>
          <div className='download-cta flex w-[80%]'>
            <span className='border-r-4 w-[25%]'> Download The App </span>
            <div className='flex items-center justify-evenly w-[30%]'>
              <img src={AppleStore} alt='' className='h-8' />
              <img src={PlayStore} alt='' className='h-8' />
            </div>
          </div>
        </div>
        <div className='right-btn-box first'>
          <button>Internship</button>
          <button>Internship</button>
          <button>Internship</button>
          <button>Work From Home</button>
          <button>Internship</button>
          <button>Internship</button>
          <button>Internship</button>
          <button>Internship</button>
          <button>Internship</button>
        </div>
      </div>
      <div className='find-cta flex justify-center items-center h-[50vh]'>
        <div className='left-text-box space-y-5 w-[33%]'>
          <h2>Find the Best Suitable Career Opportunity</h2>
          <div className='download-cta flex w-[80%]'>
            <span className='border-r-4 w-[25%]'> Download The App </span>
            <div className='flex items-center justify-evenly w-[30%]'>
              <img src={AppleStore} alt='' className='h-8' />
              <img src={PlayStore} alt='' className='h-8' />
            </div>
          </div>
        </div>
        <div className='right-btn-box w-[33%] flex justify-center'>
          <button className='dark'>Post Job Now </button>
        </div>
      </div>
    </>
  );
};

export default JobPostingPage;
