import React, { Fragment, useState, useEffect } from 'react'
import '../css/experience.css'
import { Transition } from 'react-transition-group'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function EduShare() {

    const [isEduShareContent, setEduShareContent] = useState(true)

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const [isEduActive, setEduActive] = useState(false)

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
            experienceActive()
        })
    }, [])

    function experienceActive() {
        if (window.scrollY > 650) {
            setEduActive(true)
        }
        else {
            setEduActive(false)
        }
    }

    return (
        <Fragment>
            {(isEduShareContent) && (
                <Transition
                    timeout={4000}
                    in={true}
                    appear
                >{(status) => (
                    <Fragment>
                        <div className="eduContainer" onClick={() => { setEduShareContent(!isEduShareContent) }}>
                            <div className={`eduShare eduShare-${status}`}>
                                <div className="eduShareFront">
                                    Hello
                                                </div>
                                <div className="eduShareBack">
                                    <h1>FullStack Developer @ EduShare</h1>
                                    <h2>
                                        EduShare is an educational platform startup where students from grade 1 to 12 can advance their mathematical skills.
                                                </h2>
                                    <h3>
                                        I was responsible for creating dynamic user interactive components for the application including an infinite quiz section, navbar and landing page.
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
                                    <p>
                                        Mathquill, Axios, React-Strap (Bootstrap), Git
                                                </p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
                </Transition>
            )}
            {(!isEduShareContent) && (
                <Transition
                    timeout={4000}
                    in={true}
                    appear
                >{(status) => (
                    <Fragment>
                        <div className="eduContainer" onClick={() => { setEduShareContent(!isEduShareContent) }}>
                            <div className={`eduShare eduShare-${status}`}>
                                <div className="eduShareBack2">
                                    Hello
                                                </div>
                                <div className="eduShareFront2">
                                    <h1>FullStack Developer @ EduShare</h1>
                                    <h2>
                                        EduShare is an educational platform startup where students from grade 1 to 12 can advance their mathematical skills.
                                                </h2>
                                    <h3>
                                        I was responsible for creating dynamic user interactive components for the application including an infinite quiz section, navbar and landing page.
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
                                    <p>
                                        Mathquill, Axios, React-Strap (Bootstrap), Git
                                                </p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
                </Transition>
            )}
        </Fragment>
    )
}

export default EduShare