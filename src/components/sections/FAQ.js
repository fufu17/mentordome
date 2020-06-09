import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  How much does mentordome cost?
                    </h4>
                  <p className="m-0 text-sm">
                    Our prices are listed at the top right hand corner under the pricing tab. If you have any questions, feel free to contact us about pricing!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Do I need to find a friend in order to do Dual Mentoring?
                    </h4>
                  <p className="m-0 text-sm">
                    No, you do not need to find a friend or someone else to do dual mentoring with you. This is because our program pairs you together with someone of the same relative skill as you in order to create a better experience through out mentorship.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Is there a return policy for the program?
                    </h4>
                  <p className="m-0 text-sm">
                  We do have a return policy for our packages. If after the first hour of your tutoring, you feel that the mentorship is not right for you, please contact us and we will refund you the rest of your money in the package.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Am I allowed to switch mentors between sessions?
                    </h4>
                  <p className="m-0 text-sm">
                    Yes you can! We ask for feedback from the students after each session and if you feel that you are not able to work well with your mentor, we will be happy to pair you up with someone else!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  What happens after I submit my application?
                    </h4>
                  <p className="m-0 text-sm">
                    After you submit your application on our "Get Started" page, one of our program managers with contact you via email for more specific information so that we can create a better mentorship program for you!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                  Do I have to specifically ask for which service that I want?
                    </h4>
                  <p className="m-0 text-sm">
                    All of our services are included within our packages except for the service offered as mentorship to junior engineers who already have a job but want to improve their dev skills.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  How are the mentors going to tutor us?
                    </h4>
                  <p className="m-0 text-sm">
                    If you are new to the program, each of our mentors will create a custom schedule for you based on your current skill level and your career goals.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                  When do I have to use my hours?
                    </h4>
                  <p className="m-0 text-sm">
                    You can use your hours within your package whenenver you want! We are very flexible and will work according to your schedule.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;