import { createStore } from 'redux'

import homepage from './../Images/homepage.svg'
import skills from './../Images/skills.svg'
import projects from './../Images/websites.svg'
import resume from './../Images/resume.svg'
import hire from './../Images/hire.svg'
import responsive from './../Images/responsive.svg'
import fast from './../Images/fast.svg'
import dynamic from './../Images/dynamic.svg'
import solution from './../Images/solution.svg'
import html from './../Images/skills/html.png'
import css from './../Images/skills/css.png'
import js from './../Images/skills/js.jpg'
import php from './../Images/skills/php.png'
import python from './../Images/skills/python.png'
import laravel from './../Images/skills/laravel.png'
import mysql from './../Images/skills/mysql.png'
import bootstrap from './../Images/skills/bootstrap.png'
import react from './../Images/skills/react.png'
import vue from './../Images/skills/vue.jpg'
import sass from './../Images/skills/sass.png'
import pug from './../Images/skills/pug.png'


let data = {
    APP_NAME : "Portfolio",
    BASE_URL : "/",
    NAVBAR_URLS: [
        {
            title : 'Home',
            url: '/#HomeIntro',
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
            title : 'Projects',
            url: '/#Projects',
            class: 'Projects',
            icon : projects,
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
    CAN_DO : [
        {
            title : 'Fast',
            text  : 'Fast performance and load web application.',
            icon  : fast
        },
        {
            title : 'Responsive',
            text  : 'Responsive layout that work in any device\'s screen size.',
            icon  : responsive
        },
        {
            title : 'Dynamic',
            text  : 'I love creating dynamic websites, and making them come to life.',
            icon  : dynamic
        },
        {
            title : 'Solution',
            text  : 'Nothing called impossible, i\'ll find a solution for your problem.',
            icon : solution
        }
    ],
    SKILLS : [
        {
            title : 'HTML',
            icon : html
        },
        {
            title : 'CSS',
            icon : css
        },
        {
            title : 'Javacript',
            icon : js
        },
        {
            title : 'PHP',
            icon : php
        },
        {
            title : 'Laravel',
            icon : laravel
        },
        {
            title : 'Python',
            icon : python
        },
        {
            title : 'MySQL',
            icon : mysql
        },

        {
            title : 'React',
            icon : react
        },
        {
            title : 'Vue',
            icon : vue
        },
        {
            title : 'Bootstrap',
            icon : bootstrap
        },
        {
            title : 'SASS',
            icon : sass
        },
        {
            title : 'Pug',
            icon : pug
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