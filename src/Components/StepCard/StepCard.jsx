import '../ResuableCTA/ReusableCTA.css';

const StepCard = ({ stepData }) => {
  return (
    <div className='step-card'>
      <p className='text-left'>{stepData.number}</p>
      <div className='step-img-wrapper'>
        <img
          src={stepData.step_img}
          alt={stepData.step_alt}
          className='h-[200px] min-w-[300px] mb-2'
        />
        <a
          href={stepData.step_cta_link}
          className='py-2 px-4 text-white bg-black '
        >
          <button className='w-[75%]'>{stepData.step_cta}</button>
        </a>
      </div>
    </div>
  );
};

export default StepCard;
