import React from 'react';
import {connect} from 'react-redux'

const Skills = ({CAN_DO, SKILLS}) => {
    return(
        <div id="Skills">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Skills</h1>
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