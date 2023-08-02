import React from 'react';
import VarietyPage from '../components/VarietyPage';

const Taco = () => {
  return (
    <VarietyPage
      varietyName='Street Taco'
      shadowClassName='shadow'
      imageSrc='/images/pack-over-board/papa_gs_tofu_taco_board.png'
      imageAlt='Street Taco Tofu'
    >
      Spice up any meal with Papa G&apos;s Organic Street Taco Tofu! We all know
      tofu is a great vegan alternative to meat, but some of us just don&apos;t
      have time to prep it from scratch. This is where Papa G&apos;s Street Taco
      Tofu crumbles save the day! Our taco tofu crumbles are made from organic
      soybeans, combined with organic spices and lime juice. We then bake and
      season the crumbles to bring you a delicious plant-based alternative to
      meat. This protein-rich alternative is naturally low in fat and
      cholesterol-free, offering 30g of protein to energize your day. We use
      only the highest quality organic ingredients to provide you with superior
      taste and nutrition in every bite. Street Taco Tofu crumbles are perfect
      for taco nights, burrito afternoons, and morning scrambles. Papa G&apos;s
      Street Taco Tofu brings the taco feel and flavor you remember to any meal
      instantly!
    </VarietyPage>
  );
};

export default Taco;
