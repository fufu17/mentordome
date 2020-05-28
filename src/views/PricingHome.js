import React from 'react';
// import sections
import Pricing from '../components/sections/Pricing';
import SinglePricing from '../components/sections/SinglePricing';
import DualPricing from '../components/sections/DualPricing';
import MentorPricing from '../components/sections/MentorPricing';

const PricingHome = () => {

  return (
    <>
      <Pricing className="illustration-section-01" />
      <SinglePricing/>
      <DualPricing topDivider/>
      <MentorPricing topDivider/>
    </>
  );
}

export default PricingHome;