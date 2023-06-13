import StepCard from '../StepCard/StepCard';

const ReusableCTA = ({ ctaData }) => {
  return (
    <>
      <div className='cta-section h-[100%] md:h-[80vh] text-center'>
        <h3 className='cta-title font-semibold'>{ctaData.title}</h3>
        <p className='cta-description '>{ctaData.description}</p>
        <div className='cards-row flex flex-col md:flex-row justify-evenly items-center mt-8 md:mt-16 mb-0 md:mb-16'>
          {ctaData.steps.map((stepData, index) => {
            return <StepCard key={index} stepData={stepData} />;
          })}
        </div>
        <a href={ctaData.main_cta.link}>
          <button className='mt-8'>{ctaData.main_cta.label}</button>
        </a>
      </div>
    </>
  );
};

export default ReusableCTA;
