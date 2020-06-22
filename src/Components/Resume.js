import React from 'react'
import { connect } from 'react-redux'

const Resume = ({ RESUME }) => {
    const { name, job, contact, skills } = RESUME;
    console.log(contact);
    return (
        <div id="Resume">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Resume</h1>
            </div>
            <div className="container">
                <div className="resumeContainer">
                    <div className="header">
                        <span className="name">{name}</span>
                        <span className="job">{job}</span>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div class="col-md-8">
                                <div className="details">

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