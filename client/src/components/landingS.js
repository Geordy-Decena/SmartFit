import React, { Fragment, useState, useEffect } from 'react'
import '../css/landingS.css'
import { Transition } from 'react-transition-group'
import githubLogo from '../images/githubLogo.png'
import Logo from '../images/logo.png'


function LandingS() {

    const [isTitle, setTitle] = useState({
        activeTitle1: 'S-softwareOff1',
        activeTitle2: 'S-softwareOff2',
        inActiveTitle1: 'S-fullstackOff1',
        inActiveTitle2: 'S-fullstackOff2',
        activeStatic1: 'S-softwareStatic1',
        activeStatic2: 'S-softwareStatic2',
        counter: 0,
        counter2: 0,
        name1: '',
        name2: '',
        nextName1: '',
        nextName2: '',
        division: false
    })



    const [isGlare, setGlare] = useState({
        counter: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {

            setTitle({ ...isTitle, counter: `${isTitle.counter++}`, counter2: `${isTitle.counter2++}` })

            if (isTitle.counter === 1) {
                isTitle.activeTitle1 = 'S-engineerOff1'
                isTitle.activeTitle2 = 'S-engineerOff2'
                isTitle.inActiveTitle1 = 'S-softwareOff1'
                isTitle.inActiveTitle2 = 'S-softwareOff2'
                isTitle.activeStatic1 = 'S-softwareStatic1'
                isTitle.activeStatic2 = 'S-softwareStatic2'
                isTitle.name1 = 'Fullstack'
                isTitle.name2 = 'Enthusiast'
                isTitle.nextName1 = 'Software'
                isTitle.nextName2 = 'Developer'
                isTitle.division = !isTitle.division
            }

            if (isTitle.counter === 2) {
                isTitle.activeTitle1 = 'S-softwareOff1'
                isTitle.activeTitle2 = 'S-softwareOff2'
                isTitle.inActiveTitle1 = 'S-fullstackOff1'
                isTitle.inActiveTitle2 = 'S-fullstackOff2'
                isTitle.activeStatic1 = 'S-fullstackStatic1'
                isTitle.activeStatic2 = 'S-fullstackStatic2'
                isTitle.name1 = 'Computer'
                isTitle.name2 = 'Engineering'
                isTitle.nextName1 = 'Fullstack'
                isTitle.nextName2 = 'Enthusiast'
                isTitle.division = !isTitle.division
            }

            if (isTitle.counter === 3) {
                isTitle.activeTitle1 = 'S-fillerOff1'
                isTitle.activeTitle2 = 'S-fillerOff2'
                isTitle.inActiveTitle1 = 'S-engineerOff1'
                isTitle.inActiveTitle2 = 'S-engineerOff2'
                isTitle.activeStatic1 = 'S-engineerStatic1'
                isTitle.activeStatic2 = 'S-engineerStatic2'
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
        const interval = setInterval(() => {
            setGlare({ counter: `${isGlare.counter++}` })
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // in this case useEffect will execute only once because
    // it does not have any dependencies.

    function github() {
        window.location.href = "https://github.com/Geordy-Decena";
    }

    return (
        <Fragment>
            <div className="S-extendDiv">
                <div className="S-extend"></div>
            </div>
            <div className="S-color"></div>
            <div className="S-expBG"></div>
            <div className="S-coffee"></div>
            <div className="S-expTitle">
                <div className={`S-exp`}>Experience</div>
                <div className={`S-exp2`}>Experience</div>
            </div>
            <div className="S-projTitleDiv">
                <div className="S-projTitle">
                    Projects
                </div>
                <div className="S-projTitle2">
                    Projects
                </div>
            </div>
            <div className="S-githubLogoContainer">
                <div className="S-githubLogoDiv">
                    <img src={githubLogo} className="S-githubLogo" onClick={() => github()}></img>
                </div>
            </div>
            <div className="S-whiteSpace">
                <div className="S-outerLanding">
                    <div className="S-spacer">
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
                    </div>
                    <div className="S-landingDiv">
                        <div className="S-landing">
                        </div>
                        <div className="S-introNamesWhiteSpace">
                            <div className="S-introNames">
                                <h1>I'm</h1>
                                <h2 className="S-geordy">GEORDY</h2>
                                <h2 className="S-GEORDY">GEORDY</h2>
                                <h3 className="S-decena">DECENA,</h3>
                                <h3 className="S-DECENA">DECENA,</h3>
                            </div>
                        </div>
                        <div className="S-intro">
                            {(isTitle.division) && (
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`S-division S-division-${status}`}></div>
                                )}
                                </Transition>
                            )}
                            {(!isTitle.division) && (
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <div className={`S-division2 S-division2-${status}`}></div>
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
                        <div className="S-title2Div">

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
            </div>
        </Fragment >
    )
}


export default LandingS