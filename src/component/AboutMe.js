import React from 'react';
import './CSS/AboutMe.css';
import spring from '../assents/images/spring.png';
import lightEff from '../assents/images/lightEff.png';
import team from '../assents/images/team.jpg';

const AboutMe = () => {
  return (
    <div>
    <div className="">
      <img className="absolute z-50 spring ml-10" src={spring} alt="spring" />
    </div>
      <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src={team} width={'485px'} />
    <div className="lg:ml-20">
      <h1 class="text-4xl font-bold mb-4">Hello, I'm</h1>
      <h1 class="text-5xl font-bold">Limon Farazi</h1>
      <h1 class="text-3xl text-green-600 mt-3 font-bold">
        A MERN Stack Developer 
      </h1>
      <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn px-5 rounded-full btn-primary">About me</button>
    </div>
  </div>
</div>
<div className="">
      <img className="absolute z-50 lightEff" src={lightEff} alt="lightEff" />
    </div>
    </div>
  );
};

export default AboutMe;