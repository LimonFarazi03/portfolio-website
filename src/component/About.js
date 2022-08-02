import React from "react";
import './CSS/About.css';
import circle from "../assents/images/circle.png";
import circle2 from "../assents/images/circle-2.png";
import circle3 from "../assents/images/circle-3.png";
import { FcDebian } from 'react-icons/fc';

const About = () => {
  return (
    <div className="my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <div class="card lg:max-w-lg relative">
        <figure class="px-10 pt-10">
          <img src={circle} alt="Shoes" class="rounded-xl brush absolute" />
          <FcDebian className="svgIcon"/>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl">Pixel Perfect</h2>
          <p className="w-4/5 text-lg">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
        </div>
      </div>
      <div class="card lg:max-w-lg relative">
        <figure class="px-10 pt-10">
          <img src={circle} alt="Shoes" class="rounded-xl brush absolute" />
          <FcDebian className="svgIcon"/>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl">High Quality</h2>
          <p className="w-4/5 text-lg">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
        </div>
      </div>
      <div class="card lg:max-w-lg relative">
        <figure class="px-10 pt-10">
          <img src={circle} alt="Shoes" class="rounded-xl brush absolute" />
          <FcDebian className="svgIcon"/>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl">Awesome Idea's</h2>
          <p className="w-4/5 text-lg">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
