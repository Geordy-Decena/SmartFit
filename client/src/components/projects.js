import React, { Fragment, useState, useEffect } from 'react'
import '../css/projects.css'
import { Transition } from 'react-transition-group'
import smartLogo from '../images/smartLogo.png'
import devLogo from '../images/devLogo2.png'
// import smartfit from '../images/smartfit.mp4'
import sportsLogo from '../images/sportsLogo.png'
import changeLogo from '../images/changeLogo.png'
import findLogo from '../images/findLogo.png'
import castleLogo from '../images/castleLogo.png'
import sportsVid from '../images/sportsVid.mp4'
import changeVid from '../images/changeVid.mp4'
import devVid from '../images/devVid.mp4'
import smartVid from '../images/smartVid.mp4'
import castleVid from '../images/castleVid.mp4'

function Projects() {
    const [isSportsNouvelleContent, setSportsNouvelleContent] = useState(true)
    const [isChangeItUpContent, setChangeItUpContent] = useState(true)
    const [isDevSocialContent, setDevSocialContent] = useState(true)
    const [isSmartFitContent, setSmartFitContent] = useState(true)
    const [isFindMyFamContent, setFindMyFamContent] = useState(true)
    const [isCastleDefenseContent, setCastleDefenseContent] = useState(true)

    const [isProject, setProject] = useState({
        first: true,
        second: true,
        third: true,
        fourth: true,
        fifth: true,
        sixth: true
    })

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 1100) {
                setProject({ ...isProject, first: false, second: false, third: false, fourth: false, fifth: false, sixth: false })

                setSportsNouvelleContent(true)
                setChangeItUpContent(true)
                setDevSocialContent(true)
                setSmartFitContent(true)
                setFindMyFamContent(true)
                setCastleDefenseContent(true)
            }

            if (window.scrollY > 1400 && window.scrollY < 1600) {
                setProject({ ...isProject, first: true, second: true, third: false, fourth: false })
                setDevSocialContent(true)
                setSmartFitContent(true)
            }

            if (window.scrollY > 1800 && window.scrollY < 2000) {
                setProject({ ...isProject, first: true, second: true, third: true, fourth: true, fifth: false, sixth: false })
                setFindMyFamContent(true)
                setCastleDefenseContent(true)
            }

            if (window.scrollY > 2300 && window.scrollY < 2700) {
                setProject({ ...isProject, first: true, second: true, third: true, fourth: true, fifth: true, sixth: true })
            }

            if (window.scrollY > 3100) {
                setProject({ ...isProject, first: true, second: true, third: true, fourth: true, fifth: true, sixth: true })
            }
        })
    }, [])



    return (
        <Fragment>
            <div className="smoothTrans2"></div>
            <div className="projects">
                <div className="projContent">
                    <div className="projDiv">

                        {(isProject.first) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <Fragment>
                                        <div className={`sportsDecoy sportsDecoy-${status}`} onClick={() => { setSportsNouvelleContent(!isSportsNouvelleContent) }}>
                                            <div className="devSocial">
                                                <div className="devSocialBack">
                                                    <h1> SportsNouvelles</h1>
                                                    <img alt="description" src={sportsLogo} className="devLogo"></img>
                                                    <h2>
                                                        SportsNouvelles is a web application that bundles all of North America's top sports news into a single page to get all the sports lovers up to date with the newest trades, draft picks and more.
                                            </h2>
                                                    <h4>
                                                        Skills:
                                            </h4>
                                                    <h5>
                                                        Python, Flask, JavaScript, React js
                                            </h5>
                                                    <h6>
                                                        Tools:
                                            </h6>
                                                    <p>
                                                        Bs4, React-Strap (Bootstrap), Git
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )}
                                </Transition>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status1) => (
                                    <div className={`devAni devAni-${status1}`}>
                                        {(isSportsNouvelleContent) && (
                                            <Fragment>
                                                <Transition
                                                    timeout={4000}
                                                    in={true}
                                                    appear
                                                >{(status) => (
                                                    <Fragment>
                                                        <div className="sportsContainer" onClick={() => { setSportsNouvelleContent(!isSportsNouvelleContent) }}>
                                                            <div className={`devSocial devSocial-${status}`}>
                                                                <div className="devSocialFront">
                                                                    <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                        <source src={sportsVid} type="video/mp4" />
                                                                    </video>
                                                                </div>
                                                                <div className="devSocialBack">
                                                                    <h1> SportsNouvelles</h1>
                                                                    <img alt="description" src={sportsLogo} className="devLogo"></img>
                                                                    <h2>
                                                                        SportsNouvelles is a web application that bundles all of North America's top sports news into a single page to get all the sports lovers up to date with the newest trades, draft picks and more.
                                            </h2>
                                                                    <h4>
                                                                        Skills:
                                            </h4>
                                                                    <h5>
                                                                        Python, Flask, JavaScript, React js
                                            </h5>
                                                                    <h6>
                                                                        Tools:
                                            </h6>
                                                                    <p>
                                                                        Bs4, React-Strap (Bootstrap), Git
                                            </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                )}
                                                </Transition>
                                            </Fragment>
                                        )}
                                        {(!isSportsNouvelleContent) && (
                                            <Transition
                                                timeout={4000}
                                                in={true}
                                                appear
                                            >{(status) => (
                                                <Fragment>
                                                    <div className="sportsContainer" onClick={() => { setSportsNouvelleContent(!isSportsNouvelleContent) }}>
                                                        <div className={`devSocial devSocial-${status}`}>
                                                            <div className="devSocialBack2">
                                                                <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                    <source src={sportsVid} type="video/mp4" />
                                                                </video>
                                                            </div>
                                                            <div className="devSocialFront2">
                                                                <h1> SportsNouvelles</h1>
                                                                <img alt="description" src={sportsLogo} className="devLogo"></img>
                                                                <h2>
                                                                    SportsNouvelles is a web application that bundles all of North America's top sports news into a single page to get all the sports lovers up to date with the newest trades, draft picks and more.
                                            </h2>
                                                                <h4>
                                                                    Skills:
                                            </h4>
                                                                <h5>
                                                                    Python, Flask, JavaScript, React js
                                            </h5>
                                                                <h6>
                                                                    Tools:
                                            </h6>
                                                                <p>
                                                                    Bs4, React-Strap (Bootstrap), Git
                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                            </Transition>
                                        )}
                                    </div>
                                )}
                                </Transition>
                            </Fragment>
                        )}

                        {(isProject.second) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <Fragment>
                                        <div className={`changeDecoy changeDecoy-${status}`} onClick={() => { setChangeItUpContent(!isChangeItUpContent) }}>
                                            <div className="devSocial">
                                                <div className="devSocialBack">
                                                    <h1>  ChangeItUp</h1>
                                                    <img alt="description" src={changeLogo} className="devLogo"></img>
                                                    <h2>
                                                        With image processing technologies, you can upload an image containing coins and its total value will be calculated for you in just a few seconds!
                                            </h2>
                                                    <h4>
                                                        Skills:
                                            </h4>
                                                    <h5>
                                                        Python, Flask, JavaScript, React js
                                            </h5>
                                                    <h6>
                                                        Tools:
                                            </h6>
                                                    <p>
                                                        OpenCV, MatPlotLib, React-Strap (Bootstrap), Git
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )}
                                </Transition>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status1) => (
                                    <div className={`devAni devAni-${status1}`}>
                                        {(isChangeItUpContent) && (
                                            <Fragment>
                                                <Transition
                                                    timeout={4000}
                                                    in={true}
                                                    appear
                                                >{(status) => (
                                                    <Fragment>
                                                        <div className="changeContainer" onClick={() => { setChangeItUpContent(!isChangeItUpContent) }}>
                                                            <div className={`devSocial devSocial-${status}`}>
                                                                <div className="devSocialFront">
                                                                    <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                        <source src={changeVid} type="video/mp4" />
                                                                    </video>
                                                                </div>
                                                                <div className="devSocialBack">
                                                                    <h1>  ChangeItUp</h1>
                                                                    <img alt="description" src={changeLogo} className="devLogo"></img>
                                                                    <h2>
                                                                        With image processing technologies, you can upload an image containing coins and its total value will be calculated for you in just a few seconds!
                                            </h2>
                                                                    <h4>
                                                                        Skills:
                                            </h4>
                                                                    <h5>
                                                                        Python, Flask, JavaScript, React js
                                            </h5>
                                                                    <h6>
                                                                        Tools:
                                            </h6>
                                                                    <p>
                                                                        OpenCV, MatPlotLib, React-Strap (Bootstrap), Git
                                            </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                )}
                                                </Transition>
                                            </Fragment>
                                        )}
                                        {(!isChangeItUpContent) && (
                                            <Transition
                                                timeout={4000}
                                                in={true}
                                                appear
                                            >{(status) => (
                                                <Fragment>
                                                    <div className="changeContainer" onClick={() => { setChangeItUpContent(!isChangeItUpContent) }}>
                                                        <div className={`devSocial devSocial-${status}`}>
                                                            <div className="devSocialBack2">
                                                                <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                    <source src={changeVid} type="video/mp4" />
                                                                </video>
                                                            </div>
                                                            <div className="devSocialFront2">
                                                                <h1>  ChangeItUp</h1>
                                                                <img alt="description" src={changeLogo} className="devLogo"></img>
                                                                <h2>
                                                                    With image processing technologies, you can upload an image containing coins and its total value will be calculated for you in just a few seconds!
                                            </h2>
                                                                <h4>
                                                                    Skills:
                                            </h4>
                                                                <h5>
                                                                    Python, Flask, JavaScript, React js
                                            </h5>
                                                                <h6>
                                                                    Tools:
                                            </h6>
                                                                <p>
                                                                    OpenCV, MatPlotLib, React-Strap (Bootstrap), Git
                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                            </Transition>
                                        )}
                                    </div>
                                )}
                                </Transition>
                            </Fragment>
                        )}

                        {(isProject.third) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <Fragment>
                                        <div className={`devDecoy devDecoy-${status}`} onClick={() => { setDevSocialContent(!isDevSocialContent) }}>
                                            <div className="devSocial">
                                                <div className="devSocialBack">
                                                    <h1>  DevSocial</h1>
                                                    <img alt="description" src={devLogo} className="devLogo"></img>
                                                    <h2>
                                                        DevSocial is a social media platform clone where developers can register, create their profile, and communicate with other online developers. User profiles, posts and comments are all stored in an AWS database.
                                            </h2>
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
                                                        Axios, React-Strap (Bootstrap), Git
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )}
                                </Transition>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status1) => (
                                    <div className={`devAni devAni-${status1}`}>
                                        {(isDevSocialContent) && (
                                            <Fragment>
                                                <Transition
                                                    timeout={4000}
                                                    in={true}
                                                    appear
                                                >{(status) => (
                                                    <Fragment>
                                                        <div className="devContainer" onClick={() => { setDevSocialContent(!isDevSocialContent) }}>
                                                            <div className={`devSocial devSocial-${status}`}>
                                                                <div className="devSocialFront">
                                                                    <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                        <source src={devVid} type="video/mp4" />
                                                                    </video>
                                                                </div>
                                                                <div className="devSocialBack">
                                                                    <h1> DevSocial</h1>
                                                                    <img alt="description" src={devLogo} className="devLogo"></img>
                                                                    <h2>
                                                                        DevSocial is a social media platform clone where developers can register, create their profile, and communicate with other online developers. User profiles, posts and comments are all stored in an AWS database.
                                            </h2>
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
                                                                        Axios, React-Strap (Bootstrap), Git
                                            </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                )}
                                                </Transition>
                                            </Fragment>
                                        )}
                                        {(!isDevSocialContent) && (
                                            <Transition
                                                timeout={4000}
                                                in={true}
                                                appear
                                            >{(status) => (
                                                <Fragment>
                                                    <div className="devContainer" onClick={() => { setDevSocialContent(!isDevSocialContent) }}>
                                                        <div className={`devSocial devSocial-${status}`}>
                                                            <div className="devSocialBack2">
                                                                <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                    <source src={devVid} type="video/mp4" />
                                                                </video>
                                                            </div>
                                                            <div className="devSocialFront2">
                                                                <h1> DevSocial</h1>
                                                                <img alt="description" src={devLogo} className="devLogo"></img>
                                                                <h2>
                                                                    DevSocial is a social media platform clone where developers can register, create their profile, and communicate with other online developers. User profiles, posts and comments are all stored in an AWS database.
                                            </h2>
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
                                                                    Axios, React-Strap (Bootstrap), Git
                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                            </Transition>
                                        )}
                                    </div>
                                )}
                                </Transition>
                            </Fragment>
                        )}


                        {(isProject.fourth) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <Fragment>
                                        <div className={`smartDecoy smartDecoy-${status}`} onClick={() => { setSmartFitContent(!isSmartFitContent) }}>
                                            <div className="devSocial">
                                                <div className="devSocialBack">
                                                    <h1>  SmartFit</h1>
                                                    <img alt="description" src={smartLogo} className="smartLogo"></img>
                                                    <h2>
                                                        Finally decided to pursue an active lifestyle? SmartFit is an application that will generate the perfect workout routine based on your age, method of training, and desired target muscle groups.
                                            </h2>
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
                                                        Axios, React-Strap (Bootstrap), Git
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )}
                                </Transition>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status1) => (
                                    <div className={`devAni devAni-${status1}`}>
                                        {(isSmartFitContent) && (
                                            <Fragment>
                                                <Transition
                                                    timeout={4000}
                                                    in={true}
                                                    appear
                                                >{(status) => (
                                                    <Fragment>
                                                        <div className="smartContainer" onClick={() => { setSmartFitContent(!isSmartFitContent) }}>
                                                            <div className={`devSocial devSocial-${status}`}>
                                                                <div className="devSocialFront">
                                                                    <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                        <source src={smartVid} type="video/mp4" />
                                                                    </video>
                                                                </div>
                                                                <div className="devSocialBack">
                                                                    <h1>  SmartFit</h1>
                                                                    <img alt="description" src={smartLogo} className="smartLogo"></img>
                                                                    <h2>
                                                                        Finally decided to pursue an active lifestyle? SmartFit is an application that will generate the perfect workout routine based on your age, method of training, and desired target muscle groups.
                                            </h2>
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
                                                                        Axios, React-Strap (Bootstrap), Git
                                            </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                )}
                                                </Transition>
                                            </Fragment>
                                        )}
                                        {(!isSmartFitContent) && (
                                            <Transition
                                                timeout={4000}
                                                in={true}
                                                appear
                                            >{(status) => (
                                                <Fragment>
                                                    <div className="smartContainer" onClick={() => { setSmartFitContent(!isSmartFitContent) }}>
                                                        <div className={`devSocial devSocial-${status}`}>
                                                            <div className="devSocialBack2">
                                                                <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                    <source src={smartVid} type="video/mp4" />
                                                                </video>
                                                            </div>
                                                            <div className="devSocialFront2">
                                                                <h1>  SmartFit</h1>
                                                                <img alt="description" src={smartLogo} className="smartLogo"></img>
                                                                <h2>
                                                                    Finally decided to pursue an active lifestyle? SmartFit is an application that will generate the perfect workout routine based on your age, method of training, and desired target muscle groups.
                                            </h2>
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
                                                                    Axios, React-Strap (Bootstrap), Git
                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                            </Transition>
                                        )}
                                    </div>
                                )}
                                </Transition>
                            </Fragment>
                        )}

                        {(isProject.fifth) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <Fragment>
                                        <div className={`findDecoy findDecoy-${status}`} onClick={() => { setFindMyFamContent(!isFindMyFamContent) }}>
                                            <div className="devSocial">
                                                <div className="devSocialBack">
                                                    <h1> FindMyFam (DeltaHacks)</h1>
                                                    <img alt="description" src={findLogo} className="devLogo"></img>
                                                    <h2>
                                                        FindMyFam allows a caretaker to set boundaries and see the real-time location of their loved ones with alzheimer's disease to relieve the constant stress and concerns of their families.
                                            </h2>
                                                    <h4>
                                                        Skills:
                                            </h4>
                                                    <h5>
                                                        JavaScript, HTML, CSS
                                            </h5>
                                                    <h6>
                                                        Tools:
                                            </h6>
                                                    <p>
                                                        Google Maps Api, Bootstrap, Git
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )}
                                </Transition>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status1) => (
                                    <div className={`devAni devAni-${status1}`}>
                                        {(isFindMyFamContent) && (
                                            <Fragment>
                                                <Transition
                                                    timeout={4000}
                                                    in={true}
                                                    appear
                                                >{(status) => (
                                                    <Fragment>
                                                        <div className="findContainer" onClick={() => { setFindMyFamContent(!isFindMyFamContent) }}>
                                                            <div className={`devSocial devSocial-${status}`}>
                                                                <div className="devSocialFront">
                                                                    <div className="deltaVid">
                                                                        Oops! Due to surpassing the expiration date for the Google Maps Api key, the demo for this project is unavailable.
                                                                    </div>
                                                                </div>
                                                                <div className="devSocialBack">
                                                                    <h1> FindMyFam (DeltaHacks)</h1>
                                                                    <img alt="description" src={findLogo} className="devLogo"></img>
                                                                    <h2>
                                                                        FindMyFam allows a caretaker to set boundaries and see the real-time location of their loved ones with alzheimer's disease to relieve the constant stress and concerns of their families.
                                            </h2>
                                                                    <h4>
                                                                        Skills:
                                            </h4>
                                                                    <h5>
                                                                        JavaScript, HTML, CSS
                                            </h5>
                                                                    <h6>
                                                                        Tools:
                                            </h6>
                                                                    <p>
                                                                        Google Maps Api, Bootstrap, Git
                                            </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                )}
                                                </Transition>
                                            </Fragment>
                                        )}
                                        {(!isFindMyFamContent) && (
                                            <Transition
                                                timeout={4000}
                                                in={true}
                                                appear
                                            >{(status) => (
                                                <Fragment>
                                                    <div className="findContainer" onClick={() => { setFindMyFamContent(!isFindMyFamContent) }}>
                                                        <div className={`devSocial devSocial-${status}`}>
                                                            <div className="devSocialBack2">
                                                                <div className="deltaVid">
                                                                    Oops! Due to surpassing the expiration date for the Google Maps Api key, the demo for this project is unavailable.
                                                                    </div>
                                                            </div>
                                                            <div className="devSocialFront2">
                                                                <h1> FindMyFam (DeltaHacks)</h1>
                                                                <img alt="description" src={findLogo} className="devLogo"></img>
                                                                <h2>
                                                                    FindMyFam allows a caretaker to set boundaries and see the real-time location of their loved ones with alzheimer's disease to relieve the constant stress and concerns of their families.
                                            </h2>
                                                                <h4>
                                                                    Skills:
                                            </h4>
                                                                <h5>
                                                                    JavaScript, HTML, CSS
                                            </h5>
                                                                <h6>
                                                                    Tools:
                                            </h6>
                                                                <p>
                                                                    Google Maps Api, Bootstrap, Git
                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                            </Transition>
                                        )}
                                    </div>
                                )}
                                </Transition>
                            </Fragment>
                        )}


                        {(isProject.sixth) && (
                            <Fragment>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status) => (
                                    <Fragment>
                                        <div className={`castleDecoy castleDecoy-${status}`} onClick={() => { setCastleDefenseContent(!isCastleDefenseContent) }}>
                                            <div className="devSocial">
                                                <div className="devSocialBack">
                                                    <h1>  CastleDefense</h1>
                                                    <img alt="description" src={castleLogo} className="devLogo"></img>
                                                    <h2>
                                                        CastleDefense is a 2D shooting game where the user must kill goblins in order to save their castle. The game features three levels of difficulty and points are added for killing each goblin.
                                            </h2>
                                                    <h4>
                                                        Skills:
                                            </h4>
                                                    <h5>
                                                        JavaScript, HTML, CSS
                                            </h5>
                                                    <h6>
                                                        Tools:
                                            </h6>
                                                    <p>
                                                        Bootstrap, Git
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )}
                                </Transition>
                                <Transition
                                    timeout={4000}
                                    in={true}
                                    appear
                                >{(status1) => (
                                    <div className={`devAni devAni-${status1}`}>
                                        {(isCastleDefenseContent) && (
                                            <Fragment>
                                                <Transition
                                                    timeout={4000}
                                                    in={true}
                                                    appear
                                                >{(status) => (
                                                    <Fragment>
                                                        <div className="castleContainer" onClick={() => { setCastleDefenseContent(!isCastleDefenseContent) }}>
                                                            <div className={`devSocial devSocial-${status}`}>
                                                                <div className="devSocialFront">
                                                                    <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                        <source src={castleVid} type="video/mp4" />
                                                                    </video>
                                                                </div>
                                                                <div className="devSocialBack">
                                                                    <h1>  CastleDefense</h1>
                                                                    <img alt="description" src={castleLogo} className="devLogo"></img>
                                                                    <h2>
                                                                        CastleDefense is a 2D shooting game where the user must kill goblins in order to save their castle. The game features three levels of difficulty and points are added for killing each goblin.
                                            </h2>
                                                                    <h4>
                                                                        Skills:
                                            </h4>
                                                                    <h5>
                                                                        JavaScript, HTML, CSS
                                            </h5>
                                                                    <h6>
                                                                        Tools:
                                            </h6>
                                                                    <p>
                                                                        Bootstrap, Git
                                            </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                )}
                                                </Transition>
                                            </Fragment>
                                        )}
                                        {(!isCastleDefenseContent) && (
                                            <Transition
                                                timeout={4000}
                                                in={true}
                                                appear
                                            >{(status) => (
                                                <Fragment>
                                                    <div className="castleContainer" onClick={() => { setCastleDefenseContent(!isCastleDefenseContent) }}>
                                                        <div className={`devSocial devSocial-${status}`}>
                                                            <div className="devSocialBack2">
                                                                <video autoPlay="autoplay" loop="loop" muted className="overView">
                                                                    <source src={castleVid} type="video/mp4" />
                                                                </video>
                                                            </div>
                                                            <div className="devSocialFront2">
                                                                <h1>  CastleDefense</h1>
                                                                <img alt="description" src={castleLogo} className="devLogo"></img>
                                                                <h2>
                                                                    CastleDefense is a 2D shooting game where the user must kill goblins in order to save their castle. The game features three levels of difficulty and points are added for killing each goblin.
                                            </h2>
                                                                <h4>
                                                                    Skills:
                                            </h4>
                                                                <h5>
                                                                    JavaScript, HTML, CSS
                                            </h5>
                                                                <h6>
                                                                    Tools:
                                            </h6>
                                                                <p>
                                                                    Bootstrap, Git
                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                            </Transition>
                                        )}
                                    </div>
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

export default Projects