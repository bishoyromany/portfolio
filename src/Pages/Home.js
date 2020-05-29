import React from 'react';
import HomeIntro from './../Components/HomeIntro';
import Skills from './../Components/Skills'

import './../Style/Home.scss'
const Home = () => {
    return( 
        <div id="Home">
            <HomeIntro />
            <Skills />
        </div>
    )   
}

export default Home;