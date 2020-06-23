import React from 'react';
import { connect } from 'react-redux'

const HireMe = ({ HIREMEData }) => {
    console.log(HIREMEData)
    return (
        <div id="HireMe">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Hire Me</h1>
            </div>
            <div className="container">
                <div className="contant">
                    {
                        HIREMEData.map((item, i) => (
                            <div key={i} className="hire" style={{ background: item.background }}
                                onMouseOver={() => {
                                    let target = document.querySelector(`#hireme-text-${i}`);
                                    target.style.color = item.hoverColor;
                                }}
                                onMouseLeave={() => {
                                    let target = document.querySelector(`#hireme-text-${i}`);
                                    target.style.color = item.color;
                                }}
                            >
                                <a target="_blank" href={item.url} style={{ color: item.color }}>
                                    <span className="icon">
                                        <img src={item.icon} alt={item.title} />
                                    </span>
                                    <span className="text" id={`hireme-text-${i}`}>{item.title}</span>
                                    <span className="hover" style={{ background: item.hover }}></span>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        HIREMEData: state.HIREME
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        actions: {

        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(HireMe);