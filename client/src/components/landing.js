import React, { Fragment, useState, useEffect } from 'react'
import '../css/landing.css'
import { Transition } from 'react-transition-group'
import githubLogo from '../images/githubLogo.png'
import Logo from '../images/logo.png'

function Landing() {

    const [isTitle, setTitle] = useState({
        activeTitle1: 'softwareOff1',
        activeTitle2: 'softwareOff2',
        inActiveTitle1: 'fullstackOff1',
        inActiveTitle2: 'fullstackOff2',
        activeStatic1: 'softwareStatic1',
        activeStatic2: 'softwareStatic2',
        counter: 0,
        counter2: 0,
        name1: '',
        name2: '',
        nextName1: '',
        nextName2: '',
        division: false
    })

    const [isAlertDemo, setAlertDemo] = useState(false)

    const [isGlare, setGlare] = useState({
        counter: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {

            setTitle({ ...isTitle, counter: `${isTitle.counter++}`, counter2: `${isTitle.counter2++}` })

            if (isTitle.counter === 1) {
                isTitle.activeTitle1 = 'engineerOff1'
                isTitle.activeTitle2 = 'engineerOff2'
                isTitle.inActiveTitle1 = 'softwareOff1'
                isTitle.inActiveTitle2 = 'softwareOff2'
                isTitle.activeStatic1 = 'softwareStatic1'
                isTitle.activeStatic2 = 'softwareStatic2'
                isTitle.name1 = 'Fullstack'
                isTitle.name2 = 'Enthusiast'
                isTitle.nextName1 = 'Software'
                isTitle.nextName2 = 'Developer'
                isTitle.division = !isTitle.division
            }

            if (isTitle.counter === 2) {
                isTitle.activeTitle1 = 'softwareOff1'
                isTitle.activeTitle2 = 'softwareOff2'
                isTitle.inActiveTitle1 = 'fullstackOff1'
                isTitle.inActiveTitle2 = 'fullstackOff2'
                isTitle.activeStatic1 = 'fullstackStatic1'
                isTitle.activeStatic2 = 'fullstackStatic2'
                isTitle.name1 = 'Computer'
                isTitle.name2 = 'Engineering'
                isTitle.nextName1 = 'Fullstack'
                isTitle.nextName2 = 'Enthusiast'
                isTitle.division = !isTitle.division
            }

            if (isTitle.counter === 3) {
                isTitle.activeTitle1 = 'fillerOff1'
                isTitle.activeTitle2 = 'fillerOff2'
                isTitle.inActiveTitle1 = 'engineerOff1'
                isTitle.inActiveTitle2 = 'engineerOff2'
                isTitle.activeStatic1 = 'engineerStatic1'
                isTitle.activeStatic2 = 'engineerStatic2'
                isTitle.name1 = 'Computer'
                isTitle.name2 = 'Engineering'
                isTitle.nextName1 = 'Software'
                isTitle.nextName2 = 'Developer'
                isTitle.division = !isTitle.division
            }

            if (isTitle.counter === 3) {
                isTitle.counter = 0
            }

        }, 2500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log("HEIGHT", window.scrollY)
            whichActive()
        })
    }, [])

    function whichActive() {
        if (window.scrollY > 1650) {
            setAlertDemo(true)
        }
    }

    function github() {
        window.location.href = "https://github.com/Geordy-Decena";
    }

    return (
        <Fragment>
            <Transition
                timeout={6000}
                in={true}
                appear
            >{(status) => (
                <div className={`loading loading-${status}`}>
                    <div className={`loadingModal loadingModal-${status}`}></div>
                    <div className="loadingLogoDiv">
                        <div className={`loadingLogo loadingLogo-${status}`}> <img alt="desc" src={Logo} className={`loadingLogoImg loadingLogoImg-${status}`}></img></div>
                    </div>
                    <div className="loadingDotDiv">
                        <div className={`loadingDot1 loadingDot1-${status}`}></div>
                        <div className={`loadingDot2 loadingDot2-${status}`}></div>
                        <div className={`loadingDot3 loadingDot3-${status}`}></div>
                    </div>
                </div>
            )}
            </Transition>
            <div className="color"></div>
            <div className="expBG"></div>
            <div className="coffee"></div>
            <div className="expTitle">
                <div className={`exp`}>Experience</div>
                <div className={`exp2`}>Experience</div>
            </div>
            <div className="projTitle">
                Projects
            </div>
            <div className="projTitle2">
                Projects
            </div>
            <div className="githubLogoContainer">
                <div className="githubLogoDiv">
                    <img alt="desc" src={githubLogo} className="githubLogo" onClick={() => github()}></img>
                </div>
            </div>
            {(isAlertDemo) && (
                <Transition
                    timeout={5000}
                    in={true}
                    appear
                >{(status) => (
                    <Fragment>
                        <div className={`alertDemoDiv alertDemoDiv-${status}`}>
                            <div className="alertDemoShadow">
                                <h1>Click on the boxes to see a demo!</h1>
                            </div>
                            <div className="alertDemo">
                                <h1>Click on the boxes to see a demo!</h1>
                            </div>
                        </div>
                    </Fragment>
                )}
                </Transition>
            )}
            <div className="outerLanding">
                <div className="spacer">
                    {(isGlare.counter % 2 === 0) && (
                        <Transition
                            timeout={3000}
                            in={true}
                            appear
                        >{(status) => (
                            <Fragment>
                                <div className={`glare glare-${status}`}>
                                </div>
                            </Fragment>
                        )}
                        </Transition>
                    )}
                </div>
                <div className="landingDiv">
                    <div className="landing">
                    </div>
                    <div className="introNames">
                        <h1>I'm</h1>
                        <h2 className="geordy">GEORDY</h2>
                        <h2 className="GEORDY">GEORDY</h2>
                        <h3 className="decena">DECENA,</h3>
                        <h3 className="DECENA">DECENA,</h3>
                    </div>
                    <div className="intro">
                        {(isTitle.division) && (
                            <Transition
                                timeout={4000}
                                in={true}
                                appear
                            >{(status) => (
                                <div className={`division division-${status}`}></div>
                            )}
                            </Transition>
                        )}
                        {(!isTitle.division) && (
                            <Transition
                                timeout={4000}
                                in={true}
                                appear
                            >{(status) => (
                                <div className={`division2 division2-${status}`}></div>
                            )}
                            </Transition>
                        )}
                        {(isTitle.counter2 % 3 === 2) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.inActiveTitle1} ${isTitle.inActiveTitle1}-${status}`}>{isTitle.name1}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeTitle1} ${isTitle.activeTitle1}-${status}`}>{isTitle.nextName1}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeStatic1} ${isTitle.activeStatic1}-${status}`}>{isTitle.name1}</div>
                                )}
                                </Transition>
                            </Fragment>
                        )}
                        {(isTitle.counter2 % 3 === 1) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.inActiveTitle1} ${isTitle.inActiveTitle1}-${status}`}>{isTitle.nextName1}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeTitle1} ${isTitle.activeTitle1}-${status}`}>{isTitle.name1}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeStatic1} ${isTitle.activeStatic1}-${status}`}>{isTitle.name1}</div>
                                )}
                                </Transition>
                            </Fragment>
                        )}
                        {(isTitle.counter % 3 === 0) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.inActiveTitle1} ${isTitle.inActiveTitle1}-${status}`}>{isTitle.nextName1}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeTitle1} ${isTitle.activeTitle1}-${status}`}>{isTitle.name1}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeStatic1} ${isTitle.activeStatic1}-${status}`}>Software</div>
                                )}
                                </Transition>
                            </Fragment>
                        )}

                    </div>
                    <div className="title2Div">

                        {(isTitle.counter % 3 === 2) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.inActiveTitle2} ${isTitle.inActiveTitle2}-${status}`}>{isTitle.name2}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeTitle2} ${isTitle.activeTitle2}-${status}`}>{isTitle.nextName2}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeStatic2} ${isTitle.activeStatic2}-${status}`}>{isTitle.name2}</div>
                                )}
                                </Transition>
                            </Fragment>
                        )}
                        {(isTitle.counter % 3 === 1) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.inActiveTitle2} ${isTitle.inActiveTitle2}-${status}`}>{isTitle.nextName2}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeTitle2} ${isTitle.activeTitle2}-${status}`}>{isTitle.name2}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeStatic2} ${isTitle.activeStatic2}-${status}`}>{isTitle.name2}</div>
                                )}
                                </Transition>
                            </Fragment>
                        )}
                        {(isTitle.counter % 3 === 0) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.inActiveTitle2} ${isTitle.inActiveTitle2}-${status}`}>{isTitle.nextName2}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeTitle2} ${isTitle.activeTitle2}-${status}`}>{isTitle.name2}</div>
                                )}
                                </Transition>

                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`${isTitle.activeStatic2} ${isTitle.activeStatic2}-${status}`}>Developer</div>
                                )}
                                </Transition>
                            </Fragment>
                        )}

                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Landing