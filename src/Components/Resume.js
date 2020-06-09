import React from 'react'
import { connect } from 'react-redux'

const Resume = ({ RESUME }) => {
    return (
        <div id="Resume">
            <div className="pretty-header-container">
                <h1 className="pretty-header">Resume</h1>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
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