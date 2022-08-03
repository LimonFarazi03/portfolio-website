import React from "react";
import "./CSS/Protfolio.css";
import thLine from '../assents/images/thLine.png';

const Protfolio = () => {
  return (
    <div className="my-10">
    
      <div className="desc text-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <h1 className="text-4xl font-bold my-2">My Amazing Works</h1>
        <p className="text-lg w-4/5 lg:w-2/5 mx-auto leading-7 mb-10">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-16">

        <div class="card max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card max-w-lg bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

      </div>
      <div>
        <img className="absolute z-50 circleEff" src={thLine} alt="" />
      </div>
    </div>
  );
};

export default Protfolio;
