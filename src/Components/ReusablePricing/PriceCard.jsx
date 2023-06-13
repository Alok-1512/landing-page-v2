import FeatureLine from './FeatureLine';
import './Price.css';
const PriceCard = ({ priceData }) => {
  return (
    <>
      <div className='price-card w-[85%] md:w-[30%]'>
        <h3 className='card-name'>{priceData.title}</h3>
        <p className='price-card-description'>{priceData.description}</p>

        <div className='pricing'>
          <h3 className='price-amt'> Rs. {priceData.amount}</h3>
          <p className='plan-duration'>{priceData.duration}</p>
        </div>
        <div className='price-cta'>
          <a href=''>
            <button></button>
          </a>
        </div>

        <div className='feature-column'>
          <h5>Features:</h5>
          {priceData.features.map((feature, index) => {
            return <FeatureLine key={index} feature={feature} />;
          })}
          <FeatureLine />
        </div>
      </div>
    </>
  );
};

export default PriceCard;
