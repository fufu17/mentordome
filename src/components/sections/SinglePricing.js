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
const SinglePricing = ({
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

    const paddingTop = {
        paddingTop: "60px"
    }
    const paddingBottom = {
        paddingBottom: "50px"
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
                    <h2 className="center-content reveal-from-bottom"><span className="text-color-primary">1:1</span> Tech Career Tutoring <span className="text-color-primary">(Currently all 20% off!)</span></h2>
                    <p style={paddingBottom} className="center-content reveal-from-bottom">If you want direct one on one tutoring with a mentor from a top tech company, use this option! This will include all of our services including general tech path mentorship, resume editing, recruiting mentoring, and also interview preparation</p>
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                    <div className="mb-16">
                                        <h1><span style={moneyFont} className="text-color-primary">$72</span></h1>
                                    </div>
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Basic</span> Package
                    </h4>
                                    <p className="m-0 text-sm">
                                        Our basic package is also our hourly rate for 1:1 tutoring and includes <span className="text-color-primary"><b>1</b></span> flexible hour of tutoring.
                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                    <div className="mb-16">
                                        <h1><span style={moneyFont} className="text-color-primary">$324</span></h1>
                                    </div>
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Standard</span> Package
                    </h4>
                                    <p className="m-0 text-sm">
                                    Our standard package includes <span className="text-color-primary"><b>5</b></span> flexible hours of tutoring.
                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                    <div className="mb-16">
                                        <h1><span style={moneyFont} className="text-color-primary">$612</span></h1>
                                    </div>
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        <span className="text-color-primary">Advanced</span> Package
                    </h4>
                                    <p className="m-0 text-sm">
                                        Our standard package includes <span className="text-color-primary"><b>10</b></span> flexible hours of tutoring.
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

SinglePricing.propTypes = propTypes;
SinglePricing.defaultProps = defaultProps;

export default SinglePricing;