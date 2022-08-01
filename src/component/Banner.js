import React from 'react';
import bgImage from '../assents/images/bg.jpg';
import avatar from '../assents/images/avatar.png';

const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${bgImage})`}}>
      <div class="hero min-h-screen">
  <div class="mt-10 hero-content flex-col lg:flex-row">
    <div>
      <h1 class="text-3xl text-green-600 mb-3 font-bold">Hello, I'm</h1>
      <h1 class="text-5xl font-bold">Limon Farazi</h1>
      <h1 class="text-3xl text-green-600 mt-3 font-bold">MERN Stack Developer</h1>
      <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn px-5 rounded-full btn-primary">About me</button>
    </div>
    <img width={'390px'} src={avatar} alt="avatar"/>
  </div>
</div>
    </div>
  );
};

export default Banner;