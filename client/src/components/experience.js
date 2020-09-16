import React, { Fragment } from 'react'
import '../css/experience.css'
// import jprecision from '../images/jprecision.mp4'
// import jprecisionLogo from '../images/jprecisionLogo.png'

function Experience() {


    return (
        <Fragment>
            <div className="experience">
                <div className="lightWave"></div>
                <div className="smoothTrans"></div>
                <div className="expContent">
                    <div className="simpleEduShare">
                        <h1>Full-Stack Developer @ EduShare</h1>
                        <h2>
                            EduShare is an educational platform startup where students from grade 1 to 12 can advance their mathematical skills.
                                                </h2>
                        <h3>
                            I was responsible for creating dynamic user interactive components for the application including an infinite quiz section, navbar and landing page.
                                                </h3>
                        <h4>
                            Skills
                                                </h4>
                        <h5>
                            JavaScript, MongoDB, Express js, React js, Node js
                                                </h5>
                        <h6>
                            Tools:
                                                </h6>
                        <h5>
                            Mathquill, Axios, React-Strap (Bootstrap), Git
                                                </h5>
                    </div>
                    <div className="simple3jprecision">
                        <h1>Full-Stack Developer @ 3JPrecision</h1>
                        <h2>
                            3JPrecision is a CNC Milling company that specializes in Tool & Die, Wire EDM and of course, CNC Milling.
                                            </h2>
                        <h3>
                            The website features a very user friendly way for potential clients to contact the business owner and begin new business together.
                            API calls were created to connect the contact information to the backend server.
                                            </h3>
                        <h4>
                            Skills:
                                            </h4>
                        <h5>
                            JavaScript, Express js, React js, Node js
                                            </h5>
                        <h6>
                            Tools:
                                            </h6>
                        <h5>
                            NodeMailer, Axios, React-Strap (Bootstrap), Git
                                            </h5>
                    </div>
                    <div className="simpleDonsoul">
                        <h1>Full-Stack Developer @ Don Soul</h1>
                        <h2>
                            Brandon Longdon, stage name Don Soul, is a local Musician who's music covers that of soul, R&B and hip-hop.
                                            </h2>
                        <h3>
                            I was responsible for creating and designing Don Soul's fully interactive portfolio website that features his top listens and a biography about the musician.
                                            </h3>
                        <h4>
                            Skills:
                                            </h4>
                        <h5>
                            JavaScript, MongoDB, Express js, React js, Node js
                                            </h5>
                        <h6>
                            Tools:
                                            </h6>
                        <h5>
                            NodeMailer, Axios, React-Strap (Bootstrap), Git
                                            </h5>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Experience