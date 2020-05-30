import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

const Skills = ({CAN_DO, SKILLS}) => {
    const [animateNow, setAnimateNow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const reAnimate = () => {
        setTimeout(() => {
            setAnimateNow(true);
        },10);
    }

    useEffect(() => {
        const offset = document.getElementById('Skills').offsetTop - 400;
        let scrolled = window.scrollY;
        if(offset <= scrolled){ setIsVisible(true); reAnimate();}
        /**
         * add scroll listener
         */
        window.addEventListener('scroll', () => {
            if(offset <= window.scrollY && !isVisible){ reAnimate(); setIsVisible(true); }
        });
    }, []);

    return(
        <div id="Skills">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Skills</h1>
            </div>

            <div className="container can-do-container">
                <div className="row">
                    {
                        CAN_DO.map((item) => {
                            return(
                                <div key={item.title} className="col-md-3">
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
                        
                    </div>
                    <div className="col-md-6">
                        {
                            SKILLS.map(item => {
                                return(
                                    <div key={item.title} className="item-container">
                                        <span className="item">{item.title}</span>
                                        <span className={`process ${animateNow ? 'active' : 'none-active'}`} style={{width: `calc(${item.process}% - 100px)`}}>{item.process}%</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <div className="container skills-images">
                <div className="row">
                    {
                        SKILLS.map((item) => {
                            return(
                                <div key={item.title} data-tip={item.title} className="col-md-2">
                                    <img src={item.icon} />
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        CAN_DO : state.CAN_DO,
        SKILLS : state.SKILLS,
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        actions : {

        }
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(Skills);