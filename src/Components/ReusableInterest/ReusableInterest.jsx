import { AppleStore, PlayStore } from '../../assets';
import './ReusableInterest.css';

const ReusableInterest = ({ intData }) => {
  return (
    <>
      <div className='interest-container flex'>
        <div className='grey-section px-10 py-10 basis-2/5'>
          <h3 className='W-[80%] mb-8'>{intData.leftSide.heading}</h3>
          <p className='int-description'>{intData.leftSide.description}</p>
          <div className='left-btn-grp flex flex-col gap-[15px] mt-10'>
            {intData.leftSide.buttons.map((btn, index) => {
              return (
                <button
                  className='info-btn w-[55%] md:w-[40%] mx-auto'
                  key={index}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div className='download-cta flex mt-10'>
            <span className='border-r-4 border-white w-[35%] md:w-[22%]'>
              {' '}
              Download The App
            </span>
            <div className='flex items-center justify-evenly w-[35%] md:w-[22%]'>
              <img src={AppleStore} alt='' className='h-9' />
              <img src={PlayStore} alt='' className='h-9' />
            </div>
          </div>
        </div>
        <div className='right-section basis-3/5 py-10 px-5'>
          <p>{intData.rightSide.headline}</p>
          <div className='flex interest-btn-group flex-wrap  gap-[15px] w-[75%] mx-auto my-12'>
            {intData.rightSide.buttons.map((btn, index) => {
              return (
                <button className='info-btn' key={index}>
                  {btn}
                </button>
              );
            })}
          </div>
          <div>
            <p className='many-more text-right'>and many more...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusableInterest;
