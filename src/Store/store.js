import { createStore } from 'redux'

import homepage from './../Images/homepage.svg'
import skills from './../Images/skills.svg'
import portfolio from './../Images/websites.svg'
import resume from './../Images/resume.svg'
import hire from './../Images/hire.svg'

let data = {
    APP_NAME : "Portfolio",
    BASE_URL : "/",
    NAVBAR_URLS: [
        {
            title : 'Home',
            url: '/#Home',
            class: 'home-url',
            icon : homepage,
        },
        {
            title : 'Skills',
            url: '/#Skills',
            class: 'skills-url',
            icon : skills,
        },
        {
            title : 'Portfolio',
            url: '/#Portfolio',
            class: 'portfolio-url',
            icon : portfolio,
        },
        {
            title : 'Resume',
            url: '/#Resume',
            class: 'resume-url',
            icon : resume,
        },
        {
            title : 'Hire Me',
            url: '/#HireMe',
            class: 'hire-me-url',
            icon : hire,
        },
    ],
};

const storeData = (state = data, action) => {
    let newState = {...state};
    switch(action.type){
        case 'APP_NAME':
            newState[action.type] = action.data;
            return newState;
        default:
            return state;
    }
}

let store = createStore(storeData);

store.subscribe(() => console.log(store.getState()))

export default store;