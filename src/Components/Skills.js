import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { HashLink as Link } from 'react-router-hash-link';

const Skills = ({ CAN_DO, FRONTEND, BACKEND }) => {
    const [animateNow, setAnimateNow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [animateDone, setAnimateDone] = useState(false);

    const reAnimate = () => {
        setTimeout(() => {
            setAnimateNow(true);
        }, 10);
    }

    useEffect(() => {
        const offset = document.getElementById('Skills').offsetTop - 400;
        let scrolled = window.scrollY;
        if (offset <= scrolled) { setIsVisible(true); reAnimate(); }
        /**
         * add scroll listener
         */
        window.addEventListener('scroll', () => {
            if (offset <= window.scrollY && !isVisible) { reAnimate(); setIsVisible(true); }
        });
    }, []);

    useEffect(() => {
        if (animateNow) {
            setTimeout(() => {
                setAnimateDone(true);
            }, 5000);
        }
    }, [animateNow]);

    return (
        <div id="Skills">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Skills</h1>
            </div>

            <div className="container can-do-container">
                <div className="row">
                    {
                        CAN_DO.map((item) => {
                            return (
                                <div key={item.title} className="col-md-3 mb-3">
                                    <img src={item.icon} />
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container skills-container-process">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pretty-header-container">
                            <h1 className="pretty-header mt-2" style={{ marginTop: 0 }}>Front-end</h1>
                        </div>
                        {
                            FRONTEND.map(item => {
                                return (
                                    <div key={item.title} className="item-container">
                                        <span className="item">{item.title}</span>
                                        <span style={{ width: '70%', display: 'inline-block' }}>
                                            <span style={{ width: `${item.process}%` }} className={`process ${animateNow ? 'active' : 'none-active'} ${animateDone ? 'done' : 'animating'}`}>
                                                {item.process}%
                                            </span>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-6">
                        <div className="pretty-header-container">
                            <h1 className="pretty-header mt-2" style={{ marginTop: 0 }}>Back-end</h1>
                        </div>
                        {
                            BACKEND.map(item => {
                                return (
                                    <div key={item.title} className="item-container">
                                        <span className="item">{item.title}</span>
                                        <span style={{ width: '70%', display: 'inline-block' }}>
                                            <span style={{ width: `${item.process}%` }} className={`process ${animateNow ? 'active' : 'none-active'} ${animateDone ? 'done' : 'animating'}`}>
                                                {item.process}%
                                            </span>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <button className="prettyButton">
                <Link to="#Projects" smooth>View my Projects <i className="arrow down"></i></Link>
            </button>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        CAN_DO: state.CAN_DO,
        FRONTEND: state.FRONTEND,
        BACKEND: state.BACKEND
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        actions: {

        }
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(Skills);