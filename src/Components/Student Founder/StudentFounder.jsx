import '../Student Founder/StudentFounder.css';
import { factory, mentor, training } from '../../assets';
import { Link } from 'react-router-dom';

const StudentFounder = () => {
  return (
    <>
      <div className='main-container px-10 md:h-[80vh] flex justify-evenly items-center flex-col py-10 md:py-0'>
        <h3 className='heading-clg'>
          Are you a student founder? <br />
          Still perusing education?
        </h3>
        <div className='feature-row flex mx-auto w-[100%] md:w-[55%] gap-[25px] md:gap-[50px] items-center justify-center'>
          <div className='feature-1 flex feature-box items-center'>
            <img src={factory} alt='' />
            <span>Industry Connects</span>
          </div>
          <div className='feature-2 flex feature-box items-center'>
            <img src={mentor} alt='' />
            <span>Mentoring</span>
          </div>
          <div className='feature-3 flex feature-box items-center'>
            <img src={training} alt='' />
            <span>Training</span>
          </div>
        </div>
        <p className='clg-description'>
          Gethire can help you to all possible extend, ensuring you have a
          succesful journey before you come out of college or university. Also
          get an opportunity to get Rs. 100,000 as funding.
        </p>
        <Link to='/contact'>
          <button className='contact-cta'> Apply Now</button>
        </Link>
      </div>
    </>
  );
};

export default StudentFounder;
