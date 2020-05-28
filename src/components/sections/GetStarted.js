import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import firebase from 'firebase';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

//initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyCe7C6TU9Mp_WzqfqnJs_C12RvG98kDrpU",
    authDomain: "mentordome-886a6.firebaseapp.com",
    databaseURL: "https://mentordome-886a6.firebaseio.com",
    projectId: "mentordome-886a6",
    storageBucket: "mentordome-886a6.appspot.com",
    messagingSenderId: "817983847446",
    appId: "1:817983847446:web:44b5290f804dbac8ae4937",
    measurementId: "G-DWL2YJJJKY"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const confirmButtonStyling = {
    float: "right"
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

    function submitForm(e) {
        e.preventDefault();
        const applicantsRef = firebase.database().ref('applicants');
        const applicant = {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            occupation: document.getElementById('occupation').value,
            reason: document.getElementById('reason').value,
            questions: document.getElementById('questions').value
        }
        applicantsRef.push(applicant);
        document.getElementById('first_name').value = "";
        document.getElementById('last_name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('occupation').value = "student";
        document.getElementById('reason').value = "";
        document.getElementById('questions').value = "";

        confirmAlert({
            title: 'Thanks for joining us!',
            message: 'We look forward to working with you and will get back to you within the next day.',
            buttons: [
                {
                    label: 'Done',
                    onClick: () =>  setTimeout(function(){
                        window.location.reload();
                      })
                }
            ],
            customUI: ({ onClose }) => {
                return (
                  <div className='custom-ui'>
                    <h1><span className="text-color-primary">Thanks</span> for joining us!</h1>
                    <p className="text-color-low" >We look forward to working with you and will get back to you within the next day.</p>
                    <Button style={confirmButtonStyling} color="primary" onClick={onClose}>Done</Button>
                  </div>
                );
              },
            afterClose: () => { setTimeout(function(){
                window.location.reload();
              }); },
            onClickOutside: () => { setTimeout(function(){
                window.location.reload();
              }); },
            onKeypressEscape: () => { setTimeout(function(){
                window.location.reload();
              }); }
        })
    }

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

    // const formColor = {
    //     backgroundColor: '#E8E8E8',
    //     paddingTop: '40px',
    //     paddingBottom: '40px',
    //     borderRadius: '20px',
    // }

    const inputDec = {
        borderRadius: "11px"
    }

    const marginBottom = {
        marginBottom: "60px"
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
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style = {marginBottom}>
                                This application only takes a few minutes and we will get back to you through email within the next day
                </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <div>
                                    <form>
                                        <label>
                                            <span className="text-color-primary"> <b>First Name:</b></span> &nbsp;
                                        <input id="first_name" style={inputDec} type="text" name="first_name" />
                                        </label>
                                        <br />
                                        <br />
                                        <label>
                                            <span className="text-color-primary"> <b>Last Name:</b></span> &nbsp;
                                        <input id="last_name" style={inputDec} type="text" name="last_name" />
                                        </label>
                                        <br />
                                        <br />
                                        <label>
                                            <span className="text-color-primary"> <b>Email:</b></span> &nbsp;
                                        <input id="email" style={inputDec} type="text" name="email" />
                                        </label>
                                        <br />
                                        <br />
                                        <label>
                                            <span className="text-color-primary"> <b>Occupation:</b></span> &nbsp;
                                            <select id="occupation">
                                                <option selected value="student">Student</option>
                                                <option value="junior engineer">Junior Engineer</option>
                                                <option value="freelancer">Freelancer</option>
                                                <option value="non-tech">Non-Tech</option>
                                            </select>
                                        </label>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <span className="text-color-primary"> <b>Reason For Joining:</b></span> &nbsp;
                                        <textarea id="reason" style={inputDec} type="text" name="reason" rows="4" cols="50" />
                                        </label>
                                        <br />
                                        <br />
                                        <br />
                                        <label>
                                            <span className="text-color-primary"> <b>Questions and Concerns:</b></span> &nbsp;
                                        <textarea id="questions" style={inputDec} type="text" name="questions" rows="4" cols="50" />
                                        </label>
                                        <br />
                                        <br />
                                        <br />
                                        <Button type="submit" tag="a" color="primary" onClick={submitForm}>
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