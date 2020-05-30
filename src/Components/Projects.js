import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

const Projects = ({PROJECTS}) => {
    const [project, setProject] = useState(PROJECTS.items[0]);
    const [showProject, setShowProject] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const showProjectAction = (index) => {
        setProject(PROJECTS.items[index]);
        setShowProject(true);
        setCurrentImage(0);
    }   

    const handleImageScrollBottom = (el, skip, infinity) => {
        if(infinity){
            setTimeout(() => {
                el.style['margin-top'] = '-'+(el.height - skip)+'px';
                setTimeout(() => {
                    handleImageScrollTop(el);
                    setTimeout(() => {
                        handleImageScrollBottom(el, skip, infinity);
                    },5000)
                }, 5000)
            }, Math.floor(Math.random() * 10000));
        }else{
            el.style['margin-top'] = '-'+(el.height - skip)+'px';
        }
    }

    const handleImageScrollTop = (el) => {
        el.style['margin-top'] = '0px';
    }

    const handleSlider = (el,step) => {
        let prev = currentImage;
        if(step){
            if(currentImage < project.images.length - 1){
                prev += 1;
                setCurrentImage(currentImage + 1);
            }else{
                setCurrentImage(0);
                prev = 0;
            }
        }else{
            if(currentImage != 0){
                setCurrentImage(currentImage - 1);
                prev -= 1;
            }else{
                setCurrentImage(project.images.length - 1);
                prev = project.images.length - 1;
            }  
        }
        if(prev != 0){
            el.style['margin-left'] = '-'+((prev) * 100)+'%';
        }else{
            el.style['margin-left'] = '0px';
        }
    }

    let projectPopup = (
        <div className={`project-details-container ${!showProject ? 'hide-project' : 'show-project'}`}>
            <div className="project-overlay" onClick={() => setShowProject(false)}></div>
            <div className="project">
                <div className="title">
                    <span className="text">{project.title} <span className="tip">!</span></span>
                    <span className="exit" onClick={() => setShowProject(false)}></span>
                    <div className="fix"></div>
                </div>
                <div className="content">
                    <div className="images-slider">
                        <ul className="images">
                            {
                                project.images.map((item, index) => <li id={index == 0 ? 'imagesSliderManager' : ''} key={item}><img onMouseLeave={(e) => handleImageScrollTop(e.target)} onMouseOver={(e) => handleImageScrollBottom(e.target, 300)} src={item} /></li>)
                            }
                        </ul>
                        <div className="movers">
                            <span className="images-count"><span className="show">{currentImage + 1}</span>/<span className="total">{project.images.length}</span></span>
                            <span className="next" onClick={() => handleSlider(document.getElementById('imagesSliderManager'), true)}>Next</span>
                            <span className="previous" onClick={() => handleSlider(document.getElementById('imagesSliderManager'), false)}>Previous</span>
                            <div className="fix"></div>
                        </div>
                        <p className="text">
                            {project.text}
                        </p>

                        <ul className="tools">
                            {project.tools.map(item => <li key={item}>{item}</li>)}
                        </ul>
                        
                        <div className="project-url-conainer">
                            {project.url.length > 0 ? (<a href={project.url} target="_blank" className="project-url">Visit Project</a>) : ''}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

    return(
        <div id="Projects">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Projects</h1>
            </div>
            
            <div className="container projects-container">
                <div className="row">
                    {
                        PROJECTS.items.map((item, index) => {
                            return(
                                <div className="col-md-4" key={item.id}>
                                    <div className="item-container">
                                        <div className="img-container">
                                            <img src={item.featured_image} onLoad={(e) => handleImageScrollBottom(e.target, 200, true)} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <ul>
                                            {
                                                item.tools.map(item => {
                                                    return (<li key={item}>{item}</li>)
                                                })
                                            }
                                        </ul>

                                        <div className="learn-more" onClick={() => showProjectAction(index)}>
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