import React, {useEffect} from 'react'
import start from './../Helpers/canvas'
import setupTypewriter from './../Helpers/typer'
import { HashLink as Link } from 'react-router-hash-link';
import Splitting from "./../Helpers/splitting";

const HomeIntro = () => {
    useEffect(() => {
        start();
        let typer = document.getElementById('typewriter');
        let typewriter = setupTypewriter(typer);
        typewriter.type();

        Splitting()({
            whitespace: true
        })
    }, []);


    return(
        <div className="HomeIntro" id="HomeIntro">
            <canvas id="IntroCanvas"></canvas>
            <div className="textContainer">
                <div id="typewriter">
                    Welcome To My Portfolio...<div></div>
                    <span className="var-highlight">const</span> hello = {'{'} <div></div>
                        <div className="margin-left"></div>name: <span className="string-highlight">'Bishoy Romany'</span>, <div></div>
                        <div className="margin-left"></div>location: <span className="string-highlight">'Earth'</span>, <div></div>
                        <div className="margin-left"></div>job: <span className="string-highlight">'Full Stack Web Developer'</span>, <div></div>
                        <div className="margin-left"></div>languages:[ <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span className="string-highlight">'HTML/HTML5'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span className="string-highlight">'CSS/CSS3'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span className="string-highlight">'Javascript'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span className="string-highlight">'PHP'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span className="string-highlight">'Python'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span className="string-highlight">'SQL'</span> <div></div>
                        <div className="margin-left"></div>] <div></div>
                    {'};'};
                </div>
            </div>

            <h1 data-splitting className="hello-animated">Hello There!</h1>

            {/* <div className="tool-support-animation-container js-tool-support skills-container">

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="first">
                    <div className="deployment-tile deployment-tile--fake">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-fake.svg" alt="Deployment tile for Fake" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--fake shadow-grow js-tool-shadow" data-animation-order="first">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Fake tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="second">
                    <div className="deployment-tile deployment-tile--rake">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-rake.png" alt="Deployment tile for Rake" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--rake shadow-grow js-tool-shadow" data-animation-order="second">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Fake tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div className="deployment-tile deployment-tile--grunt">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-grunt.png" alt="Deployment tile for Grunt" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--grunt shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Grunt tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="second">
                    <div className="deployment-tile deployment-tile--bamboo">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-bamboo.png" alt="Deployment tile for Bamboo" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--bamboo shadow-grow js-tool-shadow" data-animation-order="second">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Bamboo tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div className="deployment-tile deployment-tile--git">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-git.png" alt="Deployment tile for Git" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--git shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Git tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="forth">
                    <div className="deployment-tile deployment-tile--capistrano">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-capistrano.png" alt="Deployment tile for Capistrano" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--capistrano shadow-grow js-tool-shadow" data-animation-order="forth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Capistrano tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div className="deployment-tile deployment-tile--octopus">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-octopus.png" alt="Deployment tile for Octopus" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--octopus shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Octopus tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="forth">
                    <div className="deployment-tile deployment-tile--api">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-api.svg" alt="Deployment tile for Apis" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--api shadow-grow js-tool-shadow" data-animation-order="forth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Apis tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div className="deployment-tile deployment-tile--heroku">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-heroku.png" alt="Deployment tile for Heroku" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--heroku shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Heroku tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="forth">
                    <div className="deployment-tile deployment-tile--konsole">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-konsole.png" alt="Deployment tile for Konsole" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--konsole shadow-grow js-tool-shadow" data-animation-order="forth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Konsole tile" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="fifth">
                    <div className="deployment-tile deployment-tile--powershell">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-powershell.svg" alt="Deployment tile for Powershell" className="responsive-image" />
                    </div>
                </div>

                <div className="deployment-shadow-container">
                    <div className="deployment-shadow deployment-shadow--powershell shadow-grow js-tool-shadow" data-animation-order="fifth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Powershell tile" className="responsive-image" />
                    </div>
                </div>
  
            </div>
             */}
            <button className="prettyButton">
                <Link to="#Skills" smooth>View my skills <i className="arrow down"></i></Link>
            </button>
        </div>
    )
}

export default HomeIntro;