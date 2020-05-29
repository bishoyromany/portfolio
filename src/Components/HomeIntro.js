import React, {useEffect} from 'react'
import start from './../Helpers/canvas'
import setupTypewriter from './../Helpers/typer'

const HomeIntro = () => {
    useEffect(() => {
        start();
        let typer = document.getElementById('typewriter');
        let typewriter = setupTypewriter(typer);
        typewriter.type();
    }, []);


    return(
        <div className="HomeIntro" id="HomeIntro">
            <canvas id="IntroCanvas"></canvas>
            <div className="textContainer">
                <div id="typewriter">
                    <span class="var-highlight">const</span> hello = {'{'} <div></div>
                        <div className="margin-left"></div>name: <span class="string-highlight">'Bishoy Romany'</span>, <div></div>
                        <div className="margin-left"></div>location: <span class="string-highlight">'Earth'</span>, <div></div>
                        <div className="margin-left"></div>job: <span class="string-highlight">'Full Stack Web Developer'</span>, <div></div>
                        <div className="margin-left"></div>languages:[ <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span class="string-highlight">'HTML/HTML5'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span class="string-highlight">'CSS/CSS3'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span class="string-highlight">'Javascript'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span class="string-highlight">'PHP'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span class="string-highlight">'Python'</span>, <div></div>
                            <div className="margin-left"></div><div className="margin-left"></div><span class="string-highlight">'SQL'</span> <div></div>
                        <div className="margin-left"></div>] <div></div>
                    {'};'};
                </div>
            </div>


            <div class="tool-support-animation-container js-tool-support skills-container">

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="first">
                    <div class="deployment-tile deployment-tile--fake">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-fake.svg" alt="Deployment tile for Fake" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--fake shadow-grow js-tool-shadow" data-animation-order="first">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Fake tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="second">
                    <div class="deployment-tile deployment-tile--rake">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-rake.png" alt="Deployment tile for Rake" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--rake shadow-grow js-tool-shadow" data-animation-order="second">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Fake tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div class="deployment-tile deployment-tile--grunt">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-grunt.png" alt="Deployment tile for Grunt" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--grunt shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Grunt tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="second">
                    <div class="deployment-tile deployment-tile--bamboo">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-bamboo.png" alt="Deployment tile for Bamboo" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--bamboo shadow-grow js-tool-shadow" data-animation-order="second">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Bamboo tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div class="deployment-tile deployment-tile--git">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-git.png" alt="Deployment tile for Git" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--git shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Git tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="forth">
                    <div class="deployment-tile deployment-tile--capistrano">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-capistrano.png" alt="Deployment tile for Capistrano" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--capistrano shadow-grow js-tool-shadow" data-animation-order="forth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Capistrano tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div class="deployment-tile deployment-tile--octopus">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-octopus.png" alt="Deployment tile for Octopus" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--octopus shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Octopus tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="forth">
                    <div class="deployment-tile deployment-tile--api">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-api.svg" alt="Deployment tile for Apis" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--api shadow-grow js-tool-shadow" data-animation-order="forth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Apis tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="third">
                    <div class="deployment-tile deployment-tile--heroku">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-heroku.png" alt="Deployment tile for Heroku" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--heroku shadow-grow js-tool-shadow" data-animation-order="third">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Heroku tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="forth">
                    <div class="deployment-tile deployment-tile--konsole">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-konsole.png" alt="Deployment tile for Konsole" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--konsole shadow-grow js-tool-shadow" data-animation-order="forth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Konsole tile" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-tile-container tile-slide-down js-tool-tile" data-animation-order="fifth">
                    <div class="deployment-tile deployment-tile--powershell">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-powershell.svg" alt="Deployment tile for Powershell" class="responsive-image" />
                    </div>
                </div>

                <div class="deployment-shadow-container">
                    <div class="deployment-shadow deployment-shadow--powershell shadow-grow js-tool-shadow" data-animation-order="fifth">
                    <img src="https://raygun.com/images/illustrations/deployment-tracking/tool-support/tile-shadow.png" alt="Shadow for Powershell tile" class="responsive-image" />
                    </div>
                </div>
  
            </div>

        </div>
    )
}

export default HomeIntro;