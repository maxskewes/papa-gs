import React from 'react';
import VarietyPage from '../components/VarietyPage';

const BBQ = () => {
  return (
    <VarietyPage
      varietyName='Organic BBQ Tofu'
      shadowClassName='shadow_bbq'
      imageSrc='/images/pack-over-board/bbq_pack_on_board_120psi.png'
      imageAlt='Organic BBQ Tofu'
      description="BBQ tofu just got better. Papa G&apos;s Organic Barbeque Tofu is our plant-based version of the popular southern favorite. Just heat, eat, and enjoy! We marinate Organic Tofu in our secret recipe organic bbq sauce with just the right blend of sweet, savory, and smoke, and bake to perfection. Devour bbq tofu sandwiches with coleslaw, BBQ bowls with rice, pineapple and vegetables, on top of a salad, or straight out of the bag!"
    />
  );
};

export default BBQ;
