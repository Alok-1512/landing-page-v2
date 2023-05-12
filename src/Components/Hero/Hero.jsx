import { AppleStore, HeroImg, PlayStore } from '../../assets';

const Hero = () => {
  return (
    <>
      <div className='flex items-center hero-container h-[80vh] justify-evenly'>
        <div className='font-bold mx-16'>
          <div className='hero-title md:text-4xl md:pb-10'>
            Welcome To GetHire!{' '}
          </div>
          <div>
            <p className=' hero-subtitle md:text-6xl md:pb-10'>
              Lets Solve <p> Employment</p> As A Problem
            </p>
            <div className='download-cta flex'>
              <span className='border-r-4 w-[35%] md:w-[25%]'>
                {' '}
                Download The App
              </span>
              <div className='flex items-center justify-evenly w-[40%]'>
                <img src={AppleStore} alt='' className='h-8' />
                <img src={PlayStore} alt='' className='h-8' />
              </div>
            </div>
          </div>
        </div>

        <img src={HeroImg} alt='' className='h-[90%]' />
      </div>
    </>
  );
};

export default Hero;