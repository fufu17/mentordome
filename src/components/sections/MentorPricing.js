import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const MentorPricing = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const paddingBottom = {
    paddingBottom: "50px"
}

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <h2 className="center-content reveal-from-bottom"><span className="text-color-primary">Junior</span> Engineer Mentorship</h2>
                    <p style={paddingBottom} className="center-content reveal-from-bottom">We offer mentorship services for junior devs to have monthly 1:1's with high level engineers from Top Tech Companies to help them become awesome devs!</p>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                <span className="text-color-primary">Monthly</span> Plan
                  </h3>
                <p className="m-0">
                  Each of our mentors are high level engineers from top tech companies including Facebook and Google that will help you to write better and cleaner code with monthly 1:1 sessions in order to help you become a better developer and get promoted. Each of our devs charge differently based on level. Please ask us about pricing if you are interested in this option!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mentorship2.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

MentorPricing.propTypes = propTypes;
MentorPricing.defaultProps = defaultProps;

export default MentorPricing;