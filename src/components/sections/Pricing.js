import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import PricingPageImage from './partials/PricingPageImage';
import Image from '../elements/Image';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Pricing = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const outerClasses = classNames(
        'hero section center-content',
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

    const pricingImageStyle = {
        marginTop: "-70px"
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Our <span className="text-color-primary">Pricing</span>
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                We have a variety of pricing options available in order to be more flexible for our students to help you reach your goals! If you have any questions about the pricing, feel free to email us at <span className="text-color-primary">mentordome@gmail.com</span>
                            </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <div>
                                </div>
                            </div>
                        </div>
                        <Image
                                src={require('./../../assets/images/teaching2.png')}
                                alt="Open"
                                width={1000}
                                height={1000} />
                    </div>
                </div>
            </div>
        </section>
    );
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;