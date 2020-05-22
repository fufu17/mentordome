import React from 'react';
// import sections
import GetStarted from '../components/sections/GetStarted';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Companies from '../components/sections/Companies';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const GetStartedHome = () => {

  return (
    <>
      <GetStarted className="illustration-section-01" />
      {/* <FeaturesTiles />
      <WhyChooseUs topDivider />
      <Companies topDivider />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
    </>
  );
}

export default GetStartedHome;