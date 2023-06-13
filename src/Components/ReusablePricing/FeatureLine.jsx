import { checkmark } from '../../assets';
import './Price.css';

const FeatureLine = ({ feature }) => {
  return (
    <div className='feature-line flex'>
      <img
        src={checkmark}
        alt=''
        className='w-[5%] mr-[5px] h-[21px] checkmark'
      />
      <p>{feature}</p>
    </div>
  );
};

export default FeatureLine;
