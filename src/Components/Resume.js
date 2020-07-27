import React from 'react'
import { connect } from 'react-redux'
import { HashLink as Link } from 'react-router-hash-link';

const Resume = ({ RESUME, print, style = {} }) => {
    const { name, job, contact, skills, about, work, education } = RESUME;
    const header = print ? '' : (
        <div className="pretty-header-container">
            <h1 className="pretty-header"><Link target="_blank" to="/Resume">Resume</Link></h1>
        </div>
    );
    const prettyButton = print ? '' :
        (
            <button className="prettyButton">
                <Link to="#HireMe" smooth>Hire Me <i className="arrow down"></i></Link>
            </button>
        );

    const containerStyles = print ? {
        marginTop: '0px',
    } : {};
    return (
        <div id="Resume" style={{ ...style }}>
            {header}
            <div className={'container'}>
                <div className="resumeContainer" style={containerStyles}>
                    <div className="header">
                        <span className="name">{name}</span>
                        <span className="job">{job}</span>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div class="col-md-8">
                                <div className="details">
                                    <div className="profile">
                                        <div className="title">
                                            <span className="icon">
                                                <img src={about.icon} alt={about.title} />
                                            </span>
                                            <span className="text">{about.title}</span>
                                        </div>
                                        <div className="profile-content" dangerouslySetInnerHTML={{ __html: about.content }}></div>
                                    </div>

                                    <div className="exp">
                                        <div className="title">
                                            <span className="icon">
                                                <img src={work.icon} alt={work.title} />
                                            </span>
                                            <span className="text">{work.title}</span>
                                        </div>
                                        <ul className="exp-content">
                                            {
                                                work.exp.map((item, i) => (
                                                    <li key={i}>
                                                        <span className="title">{item.title}</span>
                                                        <a className="company" target="_blank" href={item.url}>{item.company}</a>
                                                        <span className="time">{item.time}</span>
                                                        <div className="profile-content" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="education">
                                        <div className="title">
                                            <span className="icon">
                                                <img src={education.icon} alt={education.title} />
                                            </span>
                                            <span className="text">{education.title}</span>
                                        </div>
                                        <ul className="education-content">
                                            {
                                                education.edu.map((item, i) => (
                                                    <li key={i}>
                                                        <span className="title">{item.title}</span>
                                                        <a className="company" target={item.url != '#Resume' ? '_blank' : ''} href={item.url}>{item.company}</a>
                                                        <span className="time">{item.time}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="summary">
                                    <ul className="contact">
                                        {
                                            contact.map((item, i) => {
                                                return (<li key={i} data-tip={item.title}>
                                                    <span className="icon">
                                                        <img src={item.image} alt={item.title} />
                                                    </span>
                                                    <span className="value" dangerouslySetInnerHTML={{ __html: item.value }}></span>
                                                </li>)
                                            })
                                        }
                                    </ul>

                                    <div className="skills">
                                        <div className="skills-header">
                                            <span className="icon"><img src={skills.icon} alt={skills.title} /></span>
                                            <span className="title">{skills.title}</span>
                                        </div>
                                        <ul className="skills-data">
                                            {
                                                skills.skills.map((item, i) => {
                                                    return (<li key={i}>
                                                        <span className="skill">{item.title}</span>
                                                        <span className="value-container">
                                                            <span className="value" style={{ width: item.process + '%' }}>{item.process}%</span>
                                                        </span>
                                                    </li>)
                                                })
                                            }
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {prettyButton}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        RESUME: state.RESUME
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        actions: {

        }
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Resume);