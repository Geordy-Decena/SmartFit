import React, { Fragment, useState, useEffect } from 'react'
import '../css/headerS.css'
import { Transition } from 'react-transition-group'
import Logo from '../images/logo.png'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


function HeaderS() {

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
        compressed: true,
        active: false
    })

    function scrolled() {
        if (window.scrollY > 0) {
            setCompressed({ active: false, compressed: true })
        }

        if (window.scrollY < 0) {
            setCompressed({ active: false, compressed: false })
        }
    }

    function linkedIn() {
        window.location.href = "https://www.linkedin.com/in/geordiron-decena/";
    }


    return (
        <div>
            <div className="S-logoDivU">
                <div className="S-logoContainerU">
                    <img src={Logo} alt="description" className="S-logo"></img>
                </div>
            </div>

            {(isCompressed.compressed) && (
                <Transition
                    timeout={4000}
                    in={true}
                    appear
                >{(status) => (
                    <div className="S-compressedHeaderDiv">
                        <div className="S-compressedHeader" onClick={() => setCompressed({ active: true, compressed: false })}>
                            <div className={`S-bar1 S-bar1-${status}`}></div>
                            <div className={`S-bar2 S-bar2-${status}`}></div>
                            <div className={`S-bar3 S-bar3-${status}`}></div>
                        </div>
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
                    <div className="S-compressedHeaderDiv">
                        <div className="S-compressedHeader">
                            <div className={`S-_bar1 S-_bar1-${status}`}></div>
                            <div className={`S-_bar2 S-_bar2-${status}`}></div>
                            <div className={`S-_bar3 S-_bar3-${status}`}></div>
                        </div>
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
                            <div className={`S-modal S-modal-${status}`} onClick={() => setCompressed({ active: false, compressed: true })}></div>
                            <div className={`S-bigHeader S-bigHeader-${status}`}>
                                <div className="S-bigHeaderTitlesDiv">
                                    <h1 onClick={() => { scrollNow(0) }}>Experience</h1>
                                    <h2 onClick={() => { scrollNow(1820) }}>Projects</h2>
                                    <h4 onClick={() => { scrollNow(4050) }}>About Me</h4>
                                    <h5 onClick={() => { scrollNow(4700) }}>Contact</h5>
                                    <h3 onClick={() => { scrollNow(100000) }}>Resume</h3>
                                    <h6 onClick={() => linkedIn()}>LinkedIn</h6>
                                </div>
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
                            <div className={`S-_modal S-_modal-${status}`} onClick={() => setCompressed({ active: false, compressed: true })}></div>
                            <div className={`S-_bigHeader S-_bigHeader-${status}`}>
                                <h1 onClick={() => { scrollNow(0) }}>Experience</h1>
                                <h2 onClick={() => { scrollNow(1820) }}>Projects</h2>
                                <h4 onClick={() => { scrollNow(4050) }}>About Me</h4>
                                <h5 onClick={() => { scrollNow(4700) }}>Contact</h5>
                                <h3 onClick={() => { scrollNow(100000) }}>Resume</h3>
                                <h6>LinkedIn</h6>
                            </div>
                        </Fragment>
                    )}
                    </Transition>
                )
            }
        </div>
    )
}

export default HeaderS