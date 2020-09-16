import React, { Fragment, useState, useEffect } from 'react'
import '../css/header.css'
import { Transition } from 'react-transition-group'
import Logo from '../images/logo.png'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function Header() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleScroll() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            scrolled()
        })
    }, [])

    function scrollNow(scrollLevel) {
        var heightPercent = (windowDimensions.height) + scrollLevel
        window.scrollTo({ top: `${heightPercent}`, behavior: "smooth" })
    }

    const [isCompressed, setCompressed] = useState({
        compressed: false,
        active: false
    })

    function scrolled() {
        if (window.scrollY > 200) {
            setCompressed({ active: false, compressed: true })
        }

        if (window.scrollY < 200) {
            setCompressed({ active: false, compressed: false })
        }
    }

    function linkedIn() {
        window.location.href = "https://www.linkedin.com/in/geordiron-decena/";
    }


    return (
        // MAKE LINKS GRADIENT ACROSS ALL
        // MAKE BACKGROUND BLACK AND WHITE
        // Make black divideer blend in, make titles fade in and out (opacity)
        <Fragment>
            <div className="logoDivU">
                <div className="logoContainerU">
                    <img src={Logo} alt="description" className="logo"></img>
                </div>
            </div>
            <div className="header">
                <h1 onClick={() => { scrollNow(0) }}>Experience</h1>
                <h2 onClick={() => { scrollNow(windowDimensions.height + 100) }}>Projects</h2>
                <h3 onClick={() => { scrollNow(100000) }}>Resume</h3>
                <h4 onClick={() => { scrollNow(windowDimensions.height * 4) }}>About Me</h4>
                <h5 onClick={() => { scrollNow(100000) }}>Contact</h5>
                <h6 onClick={() => { linkedIn() }}>LinkedIn</h6>
            </div >
            <div className="headerShadow">
                <h1>Experience</h1>
                <h2>Projects</h2>
                <h3>Resume</h3>
                <h4>About Me</h4>
                <h5>Contact</h5>
                <h6 onClick={() => { linkedIn() }}>LinkedIn</h6>
            </div >
            {(isCompressed.compressed) && (
                <Transition
                    timeout={4000}
                    in={true}
                    appear
                >{(status) => (
                    <div className="compressedHeader" onClick={() => setCompressed({ active: true, compressed: false })}>
                        <div className={`bar1 bar1-${status}`}></div>
                        <div className={`bar2 bar2-${status}`}></div>
                        <div className={`bar3 bar3-${status}`}></div>
                    </div>
                )}
                </Transition>
            )}
            {(!isCompressed.compressed) && (
                <Transition
                    timeout={4000}
                    in={true}
                    appear
                >{(status) => (
                    <div className="compressedHeader">
                        <div className={`_bar1 _bar1-${status}`}></div>
                        <div className={`_bar2 _bar2-${status}`}></div>
                        <div className={`_bar3 _bar3-${status}`}></div>
                    </div>
                )}
                </Transition>
            )}

            {
                (isCompressed.active) && (
                    <Transition
                        timeout={4000}
                        in={true}
                        appear
                    >{(status) => (
                        <Fragment>
                            <div className={`modal modal-${status}`} onClick={() => setCompressed({ active: false, compressed: true })}></div>
                            <div className={`bigHeader bigHeader-${status}`}>
                                <h1 onClick={() => { scrollNow(0) }}>Experience</h1>
                                <h2 onClick={() => { scrollNow(windowDimensions.height + 100) }}>Projects</h2>
                                <h3 onClick={() => { scrollNow(100000) }}>Resume</h3>
                                <h4 onClick={() => { scrollNow(windowDimensions.height * 4) }}>About Me</h4>
                                <h5 onClick={() => { scrollNow(100000) }}>Contact</h5>
                            </div>
                        </Fragment>
                    )}
                    </Transition>
                )
            }
            {
                (!isCompressed.active) && (
                    <Transition
                        timeout={4000}
                        in={true}
                        appear
                    >{(status) => (
                        <Fragment>
                            <div className={`_modal _modal-${status}`} onClick={() => setCompressed({ active: false, compressed: true })}></div>
                            <div className={`_bigHeader _bigHeader-${status}`}>
                                <h1 onClick={() => { scrollNow(0) }}>Experience</h1>
                                <h2 onClick={() => { scrollNow(windowDimensions.height + 100) }}>Projects</h2>
                                <h3 onClick={() => { scrollNow(100000) }}>Resume</h3>
                                <h4 onClick={() => { scrollNow(windowDimensions.height * 4) }}>About Me</h4>
                                <h5 onClick={() => { scrollNow(100000) }}>Contact</h5>
                            </div>
                        </Fragment>
                    )}
                    </Transition>
                )
            }
        </Fragment >
    )
}

export default Header
