import './About.css';

const About = () => {
  return (
    <div className='about-us-box w-[80%] h-[50vh] mx-auto'>
      <p>
        Gethire was Founded by Mr. Mayur Samadhan Potdar with the vision to
        solve &quot;Employment As A Problem.&quot; We use combination of AI and
        Human Efforts to ensure people coming on Gethire find the right fit for
        them, they convert this into opportunity to work together and though out
        the journey keep learning from various modes like communities, skill
        development courses, events, seminars and much more. This can help them
        to define their growth path.
      </p>

      <div className='slogan-container flex justify-evenly items-center gap-[20px]'>
        <div className='slogan-box'>
          <h5>Vision</h5>
          <p>Our vision is to become Global Leader in the recruitment space.</p>
        </div>
        <div className='slogan-box'>
          <h5>Vision</h5>
          <p>Our vision is to become Global Leader in the recruitment space.</p>
        </div>
        <div className='slogan-box'>
          <h5>Vision</h5>
          <p>Our vision is to become Global Leader in the recruitment space.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
