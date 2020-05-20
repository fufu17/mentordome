import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Companies = ({
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

  const sectionHeader = {
    title: 'Companies that our Mentors come from',
  };

  const paddingTop = {
      paddingTop: "60px"
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses} style={paddingTop}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/apple-black.svg')}
                      alt="Company icon 01"
                      width={68}
                      height={68}  />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/facebook_logo.png')}
                      alt="Company icon 02"
                      width={76}
                      height={76}  />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/google-icon.svg')}
                      alt="Company icon 03"
                      width={76}
                      height={76}  />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/amazon-icon-1.svg')}
                      alt="Features tile icon 04"
                      width={76}
                      height={76}  />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/linkedin.svg')}
                      alt="Features tile icon 05"
                      width={76}
                      height={76}  />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/lyft-logo.svg')}
                      alt="Features tile icon 06"
                      width={184}
                      height={184} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/microsoft-logo.svg')}
                      alt="Features tile icon 06"
                      width={76}
                      height={76} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-12">
                    <Image
                      src={require('./../../assets/images/airbnb.svg')}
                      alt="Features tile icon 06"
                      width={84}
                      height={84} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Companies.propTypes = propTypes;
Companies.defaultProps = defaultProps;

export default Companies;