import teamMembers from '../../Constants/teamMembers';
import { linkedin } from '../../assets';

const Team = () => {
  return (
    <>
      <div className='text-center page-title'>
        <h3>Our Team</h3>
      </div>
      <div
        className='grid 
        sm:grid-cols-2 md:grid-cols-3 grid-flow-row place-items-center p-5 lg:grid-cols-4  gap-12 max-w-7xl mx-auto my-10 '
        style={{ gridAutoRows: '1fr' }}
        id='team-grid'
      >
        {teamMembers.map((teamMembers, id) => (
          <div
            key={id}
            className='flex w-full h-full flex-col rounded-2xl items-center p-4  relative'
            style={{ border: '1px solid #f7f7f7' }}
          >
            {/* box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px */}
            <img
              className=' h-36 w-36 rounded-full ring-2 ring-white'
              src={teamMembers.profilePicture}
              alt=''
            />
            <div className='text-lg font-light mt-4 text-center'>
              {teamMembers.fullName}
            </div>
            <a>
              <img
                src={linkedin}
                alt=''
                className='h-[35px] absolute -bottom-4 team-social'
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
