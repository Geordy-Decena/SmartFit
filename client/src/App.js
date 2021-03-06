import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/header'
import Landing from './components/landing'
import Experience from './components/experience'
import Projects from './components/projects'
import AboutMe from './components/aboutMe'
import HeaderS from './components/headerS'
import LandingS from './components/landingS'
import ExperienceS from './components/experienceS'
import ProjectsS from './components/projectsS'
import AboutMeS from './components/aboutMeS'
import { Transition } from 'react-transition-group'
import Logo from './images/logo.png'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      {((windowDimensions.width > 1250)) ? (
        <Transition
          timeout={8000}
          in={true}
          appear
        >{(status) => (
          <div className={`loadingLargeScreen loadingLargeScreen-${status}`}>
            <div className="componentsBigScreen">
              <Header />
              <Landing />
              <Experience />
              <Projects />
              <AboutMe />
            </div>
          </div>
        )}
        </Transition>
      ) : (
          <Fragment>
            <div className="S-extendDiv">
              <div className="S-extend"></div>
            </div>
            <Transition
              timeout={8000}
              in={true}
              appear
            >{(status) => (
              <div className={`loadingSmallScreen loadingSmallScreen-${status}`}>
                <HeaderS />
                {/* <LandingS /> */}
                <ExperienceS />
                <ProjectsS />
                <AboutMeS />
              </div>
            )}
            </Transition>
          </Fragment>
        )}

    </Fragment>
  );
}

export default App;
