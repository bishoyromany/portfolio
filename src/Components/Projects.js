import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

const Projects = ({PROJECTS}) => {
    const [project, setProject] = useState(false);
    const [showProject, setShowProject] = useState(false);

    useEffect(() => {
        setProject(PROJECTS.items[0]);
        setShowProject(true);
    }, []);

    const handleImageScrollBottom = (el, skip) => {
        el.style['margin-top'] = '-'+(el.height - skip)+'px';
    }

    const handleImageScrollTop = (el) => {
        el.style['margin-top'] = '0px';
    }

    let projectPopup = showProject && project && project != undefined && project.title != undefined ? (
        <div className="project-details-container">
            <div className="project-overlay" onClick={() => setShowProject(false)}></div>
            <div className="project">
                <div className="title">
                    <span className="text">{project.title}</span>
                    <span className="exit"></span>
                    <div className="fix"></div>
                </div>
                <div className="content">
                    <div className="images-slider">
                        <ul>
                            {
                                project.images.map(item => <li key={item}><img onMouseLeave={(e) => handleImageScrollTop(e.target)} onMouseOver={(e) => handleImageScrollBottom(e.target, 300)} src={item} /></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) : '';

    return(
        <div id="Projects">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Projects</h1>
            </div>
            
            <div className="container projects-container">
                <div className="row">
                    {
                        PROJECTS.items.map((item) => {
                            return(
                                <div className="col-md-4" key={item.id}>
                                    <div className="item-container">
                                        <div className="img-container">
                                            <img src={item.featured_image} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <ul>
                                            {
                                                item.tools.map(item => {
                                                    return (<li key={item}>{item}</li>)
                                                })
                                            }
                                        </ul>

                                        <div className="learn-more">
                                            Learn More
                                        </div>
                                        <div className="overlay"></div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            {projectPopup}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        PROJECTS : state.PROJECTS
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions : {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);