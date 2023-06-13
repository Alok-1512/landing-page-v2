import PriceCard from './PriceCard';
import './Price.css';

const ReusablePricing = ({ pricingData }) => {
  return (
    <>
      <div className='pricing-page-title text-center font-semibold'>
        Pricing
      </div>
      <div className='div flex flex-col md:flex-row justify-around my-[10vh] gap-6 md:gap-0'>
        {pricingData.map((priceData, index) => {
          return <PriceCard key={index} priceData={priceData} />;
        })}
      </div>
    </>
  );
};

export default ReusablePricing;
