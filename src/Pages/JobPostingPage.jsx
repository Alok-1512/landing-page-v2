import React from 'react';
import { AppleStore, PlayStore } from '../assets';

const JobPostingPage = () => {
  return (
    <>
      <div className='find-cta dark flex justify-center items-center h-[50vh]'>
        <div className='left-text-box space-y-5 w-[33%] lg:w-[35%]'>
          <h2 className='lg:w-[80%]'>
            Find the Best Suitable Career Opportunity
          </h2>
          <div className='download-cta flex w-[80%]'>
            <span className='border-r-4 w-[50%] md:w-[30%]'>
              {' '}
              Download The App{' '}
            </span>
            <div className='flex items-center justify-evenly w-[50%] md:w-[30%]'>
              <img src={AppleStore} alt='' className='h-8' />
              <img src={PlayStore} alt='' className='h-8' />
            </div>
          </div>
        </div>
        <div className='right-btn-box first flex md:w-[40%] lg:w-[30%]'>
          <button>Internship</button>
          <button>Freelance</button>
          <button>Full Time</button>
          <button>Work From Home</button>
          <button>On Site</button>
          <button>Hybrid</button>
          <button>Sales job</button>
          <button>Marketing job</button>
          <button>Tech job</button>
        </div>
      </div>
      <div className='find-cta flex justify-center items-center h-[50vh]'>
        <div className='left-text-box space-y-5 w-[33%] lg:w-[35%]'>
          <h2 className='lg:w-[80%]'>Find the Best Suitable Candidate</h2>
          <div className='download-cta flex w-[80%]'>
            <span className='border-r-4 w-[50%] md:w-[30%]'>
              {' '}
              Download The App{' '}
            </span>
            <div className='flex items-center justify-evenly w-[50%] md:w-[30%]'>
              <img src={AppleStore} alt='' className='h-8' />
              <img src={PlayStore} alt='' className='h-8' />
            </div>
          </div>
        </div>
        <div className='right-btn-box w-[40%] lg:w-[30%] flex justify-center'>
          <button className='dark'>Post Job Now </button>
        </div>
      </div>
    </>
  );
};

export default JobPostingPage;
