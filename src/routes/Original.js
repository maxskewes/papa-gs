import React from 'react';
import '../styles.css';
import VarietyPage from '../components/VarietyPage';

const Original = () => {
  return (
    <VarietyPage
      varietyName='the Organic Original Recipe Tofu'
      shadowClassName='shadow'
      imageSrc='/images/pack-over-board/original_pack_on_board_120psi.png'
      imageAlt='Original Recipe Tofu'
      description="Sure, we all have our own favorite way to enjoy tofu. But the thing is, it doesn't matter how you devour our organic tofu—you'll still be getting an amazing plant-based experience. We start with organic tofu that’s been hand selected and marinated in our secret blend of lemon pepper, thyme and spices. Then we bake it to perfection for an incredibly tender, chewy bite, bursting with flavor. We use only the highest quality, organic ingredients to provide you with superior taste, and nutrition in every bite! Naturally low in fat and cholesterol-free, each bag is packed with over 30 grams of protein, calcium, and iron to give you the fuel you need to live your best life! Whether you add it to salads, throw it on top of ramen, combine it with mashed potatoes and gravy, or cook your own tofu scramble this weekend...we can guarantee that you'll make each bite disappear fast (because they're just so delicious). Your best nutritional bet? Eat guilt-free anytime with any dish... or as a snack straight from the bag!"
    />
  );
};

export default Original;
