import React, { Fragment, useState, useEffect } from 'react'
import '../css/aboutMeS.css'
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap'
import { Transition } from 'react-transition-group'
import axios from 'axios'
import pfp from '../images/pfp.png'

export var exportToggle = false

function AboutMeS() {

    const [isEmail, setEmail] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        projectName: '',
        subject: '',
        message: '',
        isValid: false
    })

    const handleChange = (e) => {
        setEmail({ ...isEmail, [e.target.name]: e.target.value })
        setSubmit({ submit: false })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit({ submit: true })
        const { name, email, phoneNumber, companyName, projectName, subject, message } = isEmail

        if (name == '' || email == '' || subject == '' || message == '') {
            setEmail({ ...isEmail, isValid: false })
            console.log("DID NOT GO THROUGH", isEmail.isValid)
        }
        else {
            setEmail({ ...isEmail, isValid: true })
            console.log("WENT THROUGH", isEmail.isValid)
            const form = axios.post('/api/form', {
                name,
                email,
                subject,
                message
            })
            exportToggle = false
            e.target.reset()
        }
    }

    const [isGlare, setGlare] = useState({
        counter: 0
    })

    const [isSubmit, setSubmit] = useState({
        submit: false
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setGlare({ counter: `${isGlare.counter++}` })
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <div className="S-aboutMeContainer">
                {/* <img src={space} className="S-space4" /> */}
                <div className="S-aboutLanding2">
                </div>
                <div className="S-aboutOuterLanding">
                    <div className="S-aboutSpacer">
                        {(isGlare.counter % 2 === 0) && (
                            <Transition
                                timeout={3000}
                                in={true}
                                appear
                            >{(status) => (
                                <Fragment>
                                    <div className={`S-glare S-glare-${status}`}>
                                    </div>
                                </Fragment>
                            )}
                            </Transition>
                        )}
                        <div className="S-contact">
                            <div className="S-contactTitleDiv">
                                <div className="S-contactTitle">Let's Chat</div>
                                <div className="S-contactTitle2">Let's Chat</div>
                            </div>
                            <div className="S-contactForm">
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup className="S-formGroupName">
                                        <Label className="S-nameLabel" for="name">Name:</Label>
                                        <Input className="S-nameInput" type="text" onChange={true} name="name" required placeholder="first and last" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup className="S-formGroupEmail">
                                        <Label className="S-emailLabel" for="email">Email:</Label>
                                        <Input className="S-emailInput" type="email" onChange={true} name="email" required placeholder="email" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup className="S-formGroupSubject">
                                        <Label className="S-subjectLabel" for="subject">Subject:</Label>
                                        <Input className="S-subjectInput" type="text" onChange={true} name="subject" required placeholder="subject" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup className="S-formGroupMessage">
                                        <Label className="S-messageLabel" for="message"></Label>
                                        <Input className="S-messageInput" type="textarea" onChange={() => setSubmit({ submit: false })} name="message" required placeholder="message" onChange={handleChange} />
                                    </FormGroup>
                                    {(isSubmit.submit) && (
                                        <Transition
                                            timeout={3000}
                                            in={true}
                                            appear
                                        >{(status) => (
                                            <div className="S-submitAniDiv">
                                                <div className={`S-sent S-sent-${status}`}>Sent!</div>
                                                <button className={`S-submitAni S-submitAni-${status}`}>Submit</button>
                                            </div>
                                        )}
                                        </Transition>
                                    )}
                                    {(!isSubmit.submit) && (
                                        <div className="S-submitDiv">
                                            <button className="S-submit">Submit</button>
                                        </div>
                                    )}
                                </Form>
                                <div className="S-resume">
                                    Want a copy of my resume?
                                </div>
                                <div className="S-resumeDownload">Click here for one!</div>
                            </div>
                        </div>
                    </div>
                    <div className="S-aboutLandingDiv">
                        <div className="S-aboutMeTitleDiv">
                            <div className="S-aboutMeTitle">About Me</div>
                            <div className="S-aboutMeTitle2">About Me</div>
                        </div>
                        <div className="S-profileImg">
                            <img src={pfp} className="S-pfp"></img>
                        </div>
                        <div className="S-aboutMeBio">
                            <h1>
                                Hi, my name is Geordy Decena and I am a Computer engineering student at the University of Waterloo.
                                I wrote my first line of code back in grade 10, and ever since then, I have embarked in this journey to learn and master the art of computer programming;
                                both through my school and at home endeavours. As a proud undergraduate at one of Canada's top engineering schools, I can describe myself as a hard worker, colloborator, and leader but most importantly an individual who has grit.
                                Resiliance is what made me the person I am today. I am hungry to learn new things and will fearlessly accept challenges along the way.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="S-copyright">
                    © geordydecena, All rights reserved 2020
                </div>
            </div>
        </Fragment >
    )
}

export default AboutMeS

