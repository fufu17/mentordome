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
const DualPricing = ({
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

    const paddingBottom = {
        paddingBottom: "50px"
    }

    const paddingTop = {
        paddingTop: "60px"
    }

    const moneyFont = {
        fontSize: "70px",
        fontFamily: "Helvetica"
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses} style={paddingTop}>
                <h2 className="center-content reveal-from-bottom"><span className="text-color-primary">Dual</span> Tech Career Tutoring</h2>
                    <p style={paddingBottom} className="center-content reveal-from-bottom">We offer dual tech career tutoring at a more affordable cost that covers all of the services in the 1:1 tutoring except you would attend sessions with another student that we match for you</p>
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                       <h1><span style={moneyFont} className="text-color-primary">$249</span></h1>
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Basic</span>  Package
                    </h4>
                                    <p className="m-0 text-sm">
                                        Our basic package includes <span className="text-color-primary"><b>5</b></span> flexible hours of dual mentoring
                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                    <h1><span style={moneyFont} className="text-color-primary">$499</span></h1>
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Advanced</span>  Package
                    </h4>
                                    <p className="m-0 text-sm">
                                    Our advanced package includes <span className="text-color-primary"><b>10</b></span> flexible hours of dual mentoring
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

DualPricing.propTypes = propTypes;
DualPricing.defaultProps = defaultProps;

export default DualPricing;