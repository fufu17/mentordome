import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import LandingPageImage from './partials/LandingPageImage';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const headerLeft = {
    textAlign: 'left'
  };

  const leftBox = {
    marginTop: "60px",
    marginBottom: "140px",
  };

  const splitClasses = classNames(
    'split-wrap'
  );

  const align = {
    alignItems: 'center',
    // marginLeft: '100px'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" style={leftBox}>
        <div className={innerClasses}>
          <div className={splitClasses} style={headerLeft}>
            <div className="split-item" style={align}>
              <div className="split-item-content center-content-mobile" data-reveal-container=".split-item">
                <h1 className="mt-16 mb-32 reveal-from-bottom" data-reveal-delay="200">
                  Tier 1 Mentoring for<br></br><span className="text-color-primary">Engineers</span> and <span className="text-color-primary">Students</span>
                </h1>
                <p className="mb-32 reveal-from-bottom" data-reveal-delay="400">
                  We have engineers from top tier companies to <br></br> help you prepare for technical interviews and <br></br> gain advice to improve your career.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button tag="a" color="primary" wideMobile href="signup">
                      Get started
                    </Button>
                    <Button tag="a" color="dark" wideMobile href="/">
                      Contact Us
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom'
                  && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <LandingPageImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

{/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}