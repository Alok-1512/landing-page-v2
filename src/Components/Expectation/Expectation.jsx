import { HeroImg } from '../../assets';
import './Expectation.css';

const Expectation = () => {
  return (
    <div className='expect-section flex justify-evenly items-center my-[10vh]'>
      <div className='feature-col text-left w-[100%] md:w-[27%]'>
        <h3 className='w-[75%] mx-auto'>What One Can Expect From GetHire</h3>
        <div className='redirect-btn-col flex flex-col justify-center items-center gap-1 '>
          <a href=''>
            <button className='redirection-btn'>Find Right Fit</button>
          </a>
          <a href=''>
            <button className='redirection-btn'>Get Opportunity</button>
          </a>
          <a href=''>
            <button className='redirection-btn'>Growth Path</button>
          </a>
        </div>
      </div>
      <div className='expectation-hero-img h-[55vh]'>
        <img className='h-[100%]' src={HeroImg} alt='' />
      </div>
    </div>
  );
};

export default Expectation;
