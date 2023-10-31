import React from 'react';
import PricingCard from './PricingCard'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <PricingCard
          icon={Single}
          title="Single User"
          price="149"
          storage="500 GB Storage"
          users="1 Grand User"
          sendLimit="Send up to 2 GB"
        />
        <PricingCard
          icon={Double}
          title="Young Startup"
          price="249"
          storage="1100 GB Storage"
          users="30 Users"
          sendLimit="Send up to 2 GB"
        />
        <PricingCard
          icon={Triple}
          title="Big corporation"
          price="349"
          storage="1750 GB Storage"
          users="30+ Grand User"
          sendLimit="Send up to 2 GB"
        />
      </div>
    </div>
  );
}

export default Cards;