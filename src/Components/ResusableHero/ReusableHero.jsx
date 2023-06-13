import './ReusableHero.css';

const ReusableHero = ({ heroData }) => {
  return (
    <>
      <div className='hero-section flex flex-col-reverse md:flex-row h-[100%] md:h-[80vh] items-center justify-evenly'>
        <div className='hero-text-section w-[85%] md:w-[35%]'>
          <div className='looking_for'>{heroData.lookingFor}</div>
          <h3 className='hero-text-heading font-semibold mt-4'>
            {heroData.heading}
          </h3>
          <a href={heroData.cta_link}>
            <button className='mt-8'>{heroData.cta_label}</button>
          </a>
        </div>
        <div className='hero-img-section h-[45vh] md:h-[75%]'>
          <img
            src={heroData.hero_img}
            alt={heroData.hero_alt}
            className='h-[100%]'
          />
        </div>
      </div>
    </>
  );
};

export default ReusableHero;
