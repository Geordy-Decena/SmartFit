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
      {/* <Fragment>
        <Header />
        <Landing />
        <Experience />
        <Projects />
        <AboutMe />
      </Fragment> */}
      {console.log("WIDTH", windowDimensions.width)}
      {(windowDimensions.width > 1250) ? (
        <Fragment>
          <Header />
          <Landing />
          <Experience />
          <Projects />
          <AboutMe />
        </Fragment>
      ) : (
          <div>
            <HeaderS />
            <LandingS />
            <ExperienceS />
            <ProjectsS />
            <AboutMeS />
          </div>
        )}
    </Fragment>
  );
}

export default App;
