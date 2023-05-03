import React from 'react';
import{HeroImg, AppleStore, PlayStore} from '../assets';

const LandingPage = () => {
    return (
        <>
        <div className='flex items-center '>
        <div className='font-bold mx-40'>   
           <div className='text-4xl py-10'>Welcome To GetHire! </div> 
            <div>
            <p className='text-6xl py-10'>Let's Solve <p> Employment</p> As A Problem</p> 
                <div className='download border-r-4'>
                    Download The App 
                    <div className='flex-row'>
                    <img src={AppleStore} alt="" className='h-8' />
                    <img src={PlayStore} alt="" className='h-8' />
                    </div>
                </div>
            </div>  
        </div>

        <img src={HeroImg} alt=""  className='h-120 '/>
        </div>
        </>
    );
}

export default LandingPage;
