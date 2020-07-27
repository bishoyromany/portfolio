import React from 'react'
import MyResume from './../Components/Resume';
import './../Style/Home.scss'


const Resume = () => {
    return (
        <div id="Home">
            <MyResume print={true} style={{ display: 'flex', alignItems: 'center', background: '#FFF' }}></MyResume>
        </div>
    )
}

export default Resume;