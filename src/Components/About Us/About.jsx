import './About.css';

const About = () => {
  return (
    <>
      <div className='page-banner'>
        <h3 className='text-white'>About Us</h3>
      </div>
      <div className='about-us-box w-[80%] h-[50vh] mx-auto'>
        <p>
          Gethire was Founded by <b>Mr. Mayur Samadhan Potdar</b> with the
          vision to solve &quot;Employment As A Problem.&quot; We use
          combination of AI and Human Efforts to ensure people coming on Gethire
          find the right fit for them, they convert this into opportunity to
          work together and though out the journey keep learning from various
          modes like communities, skill development courses, events, seminars
          and much more. This can help them to define their growth path.
        </p>

        <div className='slogan-container flex flex-col md:flex-row justify-evenly items-center gap-[20px]'>
          <div className='slogan-box'>
            <h5>Vision:</h5>
            <p>
              Our vision is to become Global Leader in the recruitment space.
            </p>
          </div>
          <div className='slogan-box'>
            <h5>Mission:</h5>
            <p>
              Our vision is to become Global Leader in the recruitment space.
            </p>
          </div>
          <div className='slogan-box'>
            <h5>Principle:</h5>
            <p>
              &quot;Listen - Learn - Implement&quot; We follow this as our
              principle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
