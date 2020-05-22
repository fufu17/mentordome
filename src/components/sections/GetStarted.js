import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const GetStarted = ({
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

    const formColor = {
        backgroundColor: '#E8E8E8',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderRadius: '20px',
        boxShadow: '10px 15px #C8C8C8'
    }

    const inputDec = {
        borderRadius: "11px"
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
                            <span className="text-color-primary">Application</span> Form
            </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                This application only takes a few minutes and we will get back to you through email within the next day
                </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <div>
                                    <form style={formColor}>
                                        <label>
                                        <span className="text-color-primary"> <b>First Name:</b></span> &nbsp;
                                        <input style={inputDec} type="text" name="name" />
                                        </label>
                                        <br />
                                        <br />
                                        <label>
                                        <span className="text-color-primary"> <b>Last Name:</b></span> &nbsp;
                                        <input style={inputDec} type="text" name="name" />
                                        </label>
                                        <br />
                                        <br />
                                        <label>
                                        <span className="text-color-primary"> <b>Email:</b></span> &nbsp;
                                        <input  style={inputDec}type="text" name="name" />
                                        </label>
                                        <br />
                                        <br />
                                        <label>
                                        <span className="text-color-primary"> <b>Occupation:</b></span> &nbsp;
                                            <select>
                                                <option selected value="student">Student</option>
                                                <option value="junior engineer">Junior Engineer</option>
                                                <option value="coconut">Freelancer</option>
                                                <option value="non-tech">Non-Tech</option>
                                            </select>
                                        </label>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                        <span className="text-color-primary"> <b>Reason For Joining:</b></span> &nbsp;
                                        <textarea style={inputDec} type="text" name="reason" rows="4" cols="50"/>
                                        </label>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                        <span className="text-color-primary"> <b>Questions and Concerns:</b></span> &nbsp;
                                        <textarea style={inputDec} type="text" name="questions" rows="4" cols="50" />
                                        </label>
                                        <br />
                                        <br />
                                        <br />
                                        <Button type="submit" tag="a" color="primary">
                                            Submit
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

GetStarted.propTypes = propTypes;
GetStarted.defaultProps = defaultProps;

export default GetStarted;