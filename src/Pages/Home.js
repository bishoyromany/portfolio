import React from 'react';
import HomeIntro from './../Components/HomeIntro';
import Skills from './../Components/Skills'
import Projects from './../Components/Projects'
import Resume from './../Components/Resume';
import HireMe from './../Components/HireMe';
import Footer from './../Components/Footer';

import './../Style/Home.scss'
const Home = () => {
    return (
        <div id="Home">
            <HomeIntro />
            <Skills />
            <Projects />
            <Resume />
            <HireMe />
            <Footer />
        </div>
    )
}

export default Home;