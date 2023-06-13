import './ReusableService.css';

const ReusableService = ({ serviceData }) => {
  return (
    <>
      <div
        className='main-service-container h-[85vh] relative bg-cover'
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/adventure-background_23-2149048248.jpg?w=996&t=st=1685278880~exp=1685279480~hmac=2319bdd676497509b6ed2ea5a06f52ab5f70ece29c07ca5ee5af867aa914baee')",
        }}
      >
        <div className='overlay-box '>
          <p className='service-headline text-white'>{serviceData.headline}</p>
          <div className='btn-column flex flex-col gap-[20px] my-12'>
            {serviceData.buttons.map((btn, index) => {
              return (
                <button
                  className='service-btn w-[55%] md:w-[40%] mx-auto'
                  key={index}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusableService;
