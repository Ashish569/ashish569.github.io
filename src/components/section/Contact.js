import React, { useState } from 'react'
import { contact, section5Title, social } from '../../profile'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xzbyovzk");
    const [alert, setAlert] = useState({
        showAlert: false
    });
    const onChange = () => {
        setAlert({
            showAlert: true
        })
    }
    if (state.succeeded) {

        return <div><span style={{ marginLeft: '39%', marginBottom: '30%' }}><b>{'Thanks for Submitting form.'}</b></span></div>

    }



    return (
        <React.Fragment >
            <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                        <div className="git-head-div text-center mx-auto">
                            <h1 id="Contact" className="git-head">{section5Title}</h1>
                        </div>
                    </>
                    <div className="container">
                        <div className="git-cont row">
                            <div className="col-12 col-sm-6 half">
                                {/* <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io/f/xzbyovzk"} method={contact.contactUrl ? "POST" : "GET"}>
                                <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                                <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                                <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                                <textarea id="msg" name="message" placeholder="Message" required></textarea>
                                <button style={{ cursor: 'pointer' }} type="submit">Send Message</button>
                            </form> */}
                                <form onSubmit={handleSubmit}>
                                    {/* <label htmlFor="email">
                                    Email Address
                                </label> */}
                                    <input type="text" id="full-name" name="name" placeholder="Your name" required></input>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Please type in your message here"
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                    <button style={{ cursor: 'pointer' }} type="submit" disabled={state.submitting}>Send Message</button>
                                    {alert.showAlert ? <div><span>{'Your message got successfully submited!!'}</span></div> : <React.Fragment></React.Fragment>}
                                </form>
                            </div>
                            <div className="col-12 col-sm-6 half">
                                <p className="lead">
                                    {contact.pitch}
                                </p>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="inline-block">
                                        {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                        {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                                        {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                                        {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                                        {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br />
                                    </div>
                                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
            </div>

        </React.Fragment>
    )

}

export default Contact
