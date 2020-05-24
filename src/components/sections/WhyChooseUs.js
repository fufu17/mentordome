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
const WhyChooseUs = ({
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
        title: 'Why Choose Us?',
        paragraph: "We offer very flexible and competitive rates while allowing you to work based on your own schedule."
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
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/price.svg')}
                                            alt="Price"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Competitive</span>  Rates
                    </h4>
                                    <p className="m-0 text-sm">
                                        We offer cheaper prices and more flexible packages that all of our competitors in the tech career accelerator space and online tech interview coaching.
                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/schedule.svg')}
                                            alt="Schedule"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Flexible</span>  Schedule
                    </h4>
                                    <p className="m-0 text-sm">
                                        We allow you to have a flexible schedule in that you can decide when to have classes and give constant feedback on the performance of the mentors.
                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/class.svg')}
                                            alt="Class"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Class</span> Mentoring
                    </h4>
                                    <p className="m-0 text-sm">
                                        In case that 1:1's are too expensive or you prefer to work with others, we also offer class mentoring sessions for tech interview prep!
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

WhyChooseUs.propTypes = propTypes;
WhyChooseUs.defaultProps = defaultProps;

export default WhyChooseUs;