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

const FeaturesSplit = ({
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

  const sectionHeader = {
    title: 'How It Works',
    paragraph: 'Whether you are a student trying to find a software engineering job or a junior engineer who wants to improve their general coding ability, Mentordome is here to help! We have a robust process that will allow us to pair you with top tier engineers.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step one
                  </div>
                <h3 className="mt-0 mb-12">
                <span className="text-color-primary">Pre-Screening</span> Interview
                  </h3>
                <p className="m-0">
                  In order to place you with our best mentor possible, we first need to figure out which area you will need the most help in. Therefore, we will schedule a 1:1 interview with you so that we can gauge what area you need help in.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/pre-screening.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step two
                  </div>
                <h3 className="mt-0 mb-12">
                  Mentorship <span className="text-color-primary">Pairing</span>
                  </h3>
                <p className="m-0">
                  After the pre-screening, Mentordome will reach out to you with a mentorship pairing. You and the mentor will be able to schedule the best time for a 1:1 mentorship and we will work closely with you to help you acheive your goals.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mentorship-pairing.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step Three
                  </div>
                <h3 className="mt-0 mb-12">
                <span className="text-color-primary">Mentorship</span>
                  </h3>
                <p className="m-0">
                  You and the mentor are now able to focus on completing hourly mentorship sessions in our various services with your own fixed schedule. We will help to closely monitor your progress through daily reports from the mentors.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mentorship.png')}
                  alt="Features split 03"
                  width={528}
                  height={500} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Step Four
                  </div>
                <h3 className="mt-0 mb-12">
                <span className="text-color-primary">Feedback</span> Consultation
                  </h3>
                <p className="m-0">
                After every mentorship/tutoring session, you will be able to give feedback to your mentor and we will be able to talk with you if you have any problems with the mentorship. You will also be allowed to ask to switch mentors in case there are any problems.
                  </p>
              </div>
              <div className={
                classNames(
                  'center-content-mobile reveal-from-bottom'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/feedback.png')}
                  alt="Features split 04"
                  width={428}
                  height={196} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;