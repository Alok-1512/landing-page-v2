import { HeroImg } from '../../assets';

const Expertise = () => {
  return (
    <>
      <div className='text-center page-title mt-28'>
        <h3>Our Expertise</h3>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-evenly my-8'>
        <p>What Gethire can offer you: </p>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-evenly mb-28'>
        <p>What Gethire can offer you: </p>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
        <div className='offer-box'>
          <img src={HeroImg} alt='' className='offer-box-img h-[150px]' />
          <h4>Consulting</h4>
          <a href=''>
            <button className='offer-read-more'>Read More</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Expertise;
