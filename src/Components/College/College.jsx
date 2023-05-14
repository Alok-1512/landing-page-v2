import React from 'react';
import '../College/College.css';
import { factory, mentor, training } from '../../assets';
import { Link } from 'react-router-dom';

const College = () => {
  return (
    <>
      <div className='main-container px-10 md:h-[80vh] flex justify-evenly items-center flex-col py-10 md:py-0'>
        <h3 className='heading-clg'>
          Get In Touch To Place Students <br />
          As Interns or Freshers
        </h3>
        <div className='feature-row flex mx-auto w-[100%] md:w-[55%] gap-[25px] md:gap-[50px] items-center justify-center'>
          <div className='feature-1 flex feature-box items-center'>
            <img src={factory} alt='' />
            <span>Industry Connects</span>
          </div>
          <div className='feature-2 flex feature-box items-center'>
            <img src={mentor} alt='' />
            <span>Student Mentors</span>
          </div>
          <div className='feature-3 flex feature-box items-center'>
            <img src={training} alt='' />
            <span>Student Training</span>
          </div>
        </div>
        <p className='clg-description'>
          Customised services as per institutional requirement to meet
          industrial <br /> training, projects, internship and placement needs.
        </p>
        <Link to='/contact'>
          <button className='contact-cta'> Contact Us </button>
        </Link>
      </div>
    </>
  );
};

export default College;
