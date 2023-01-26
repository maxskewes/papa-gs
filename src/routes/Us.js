import React from 'react';
import FlexContainer from '../components/FlexContainer';
import PageHead from '../components/PageHead';
import RouteContainer from '../components/RouteContainer';
import SectionHead from '../components/SectionHead';

const Us = () => {
  return (
    <RouteContainer>
      <FlexContainer column>
        <PageHead title={'Us.'} />

        <SectionHead
          title={'Seasoned. Baked. Organic.'}
          subtitle={
            "Every bite made with love at Papa G's. We're all about delicious tofu that actually tastes like something."
          }
        />
        <PageHead subtitle={'Not just another Brick of Bland Tofu'} />
        <SectionHead
          subtitle={
            "You won't find any of our tofu sold in bricks; we cut it small, so that every bite is marinated, seasoned, and baked to perfection. It's the only way to get that perfect blend of flavor and texture. Other baked tofu on the shelves is sold in big bricks. Bricks don't give tofu a chance to marinate, and take in seasoning, coming out bland, and… kinda pointless."
          }
        />
        <PageHead
          subtitle={
            "At Papa G's Tofu, we believe that no one should have to settle for boring tofu!"
          }
        />
        <SectionHead
          title="Papa G's Vegan Organics"
          subtitle={
            'We use all organic ingredients and fresh locally produced organic tofu, right here in Portland Oregon. We marinate, season, and bake our tofu with love that you can taste it.            Papa G’s Tofu is the perfect addition to any meal, or straight out of the bag!uses organic, local, sustainable ingredients and is committed to providing the best tasting, highest quality vegan food on the market. We specialize in offering options for people with food allegies.'
          }
        />
      </FlexContainer>
    </RouteContainer>
  );
};

export default Us;
