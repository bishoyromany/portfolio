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

// projects part
import visual from './../Images/projects/visual.png'

// resume
import email from './../Images/resume/at.svg';
import birthday from './../Images/resume/party-hat.svg';
import location from './../Images/resume/pin.svg';
import website from './../Images/resume/www.svg';
import resumeSkills from './../Images/resume/skill.svg';
import education from './../Images/resume/graduate.svg';

let data = {
    APP_NAME: "Portfolio",
    BASE_URL: "/",
    NAVBAR_URLS: [
        {
            title: 'Home',
            url: '/#HomeIntro',
            class: 'home-url',
            icon: homepage,
        },
        {
            title: 'Skills',
            url: '/#Skills',
            class: 'skills-url',
            icon: skills,
        },
        {
            title: 'Projects',
            url: '/#Projects',
            class: 'Projects',
            icon: projects,
        },
        {
            title: 'Resume',
            url: '/#Resume',
            class: 'resume-url',
            icon: resume,
        },
        {
            title: 'Hire Me',
            url: '/#HireMe',
            class: 'hire-me-url',
            icon: hire,
        },
    ],
    CAN_DO: [
        {
            title: 'Fast',
            text: 'Fast performance and load web application.',
            icon: fast
        },
        {
            title: 'Responsive',
            text: 'Responsive layout that work in any device\'s screen size.',
            icon: responsive
        },
        {
            title: 'Dynamic',
            text: 'I love creating dynamic websites, and making them come to life.',
            icon: dynamic
        },
        {
            title: 'Solution',
            text: 'Nothing called impossible, i\'ll find a solution for your problem.',
            icon: solution
        }
    ],
    SKILLS: [
        {
            title: 'HTML',
            process: 95,
        },
        {
            title: 'CSS',
            process: 85,
        },
        {
            title: 'Javacript',
            process: 70,
        },
        {
            title: 'PHP',
            process: 80,
        },
        {
            title: 'Laravel',
            process: 80,
        },
        {
            title: 'Wordpress',
            process: 75,
        },
        {
            title: 'Python',
            process: 70,
        },
        {
            title: 'MySQL',
            process: 80,
        },

        {
            title: 'React',
            process: 65,
        },
        {
            title: 'Vue',
            process: 75,
        },
        {
            title: 'Bootstrap',
            process: 80,
        },
        // {
        //     title : 'SASS',
        //     process: 60,
        //     icon : sass
        // },
        // {
        //     title : 'Pug',
        //     process: 60,
        //     icon : pug
        // },
    ],
    MORE_SKILLS: [
        {
            title: 'API Integration',
            process: 80,
        },
        {
            title: 'JSON',
            process: 100,
        },
        {
            title: 'Ajax',
            process: 80,
        },
        {
            title: 'Scraping',
            process: 70,
        },
        {
            title: 'Git',
            process: 70,
        },
        {
            title: 'Host Website',
            process: 80,
        },
        {
            title: 'NPM',
            process: 75,
        },
        {
            title: 'Plugins Dev',
            process: 60,
        },
        {
            title: 'SPA',
            process: 90,
        }
    ],
    PROJECTS: {
        settings: {
            perpage: 6,
            offset: 0,
        },
        items: [
            {
                id: 1,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 2,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 3,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 4,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 5,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 6,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 7,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 8,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 9,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 10,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 11,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },
            {
                id: 12,
                title: 'Project Title',
                text: 'Project Description',
                tools: ['HTML', 'CSS', 'JS'],
                images: [visual, visual, visual],
                featured_image: visual,
                url: 'https://bishoyromany.github.io/visual_studio/',
            },

        ],
    },
    RESUME: {
        image: '',
        name: 'Bishoy Romany',
        job: 'Full Stack Web Developer',
        contact: [
            {
                image: email,
                title: 'Email',
                value: '<a href="mailto:7bishoyromany7@gmail.com" target="_blank">7bishoyromany7@gmail.com</a>'
            },
            {
                image: location,
                title: 'Location',
                value: 'Egypt -> Cairo'
            },
            {
                image: birthday,
                title: 'Date Of Birth',
                value: '29 Dec 2000'
            },
            {
                image: website,
                title: 'Website',
                value: '<a href="https://bishoyromany.org" target="_blank">https://bishoyromany.org</a>'
            }
        ],
        skills: {
            title: 'Skills',
            icon: resumeSkills,
            skills: [
                {
                    title: 'HTML',
                    process: 95,
                },
                {
                    title: 'CSS',
                    process: 85,
                },
                {
                    title: 'Javacript',
                    process: 70,
                },
                {
                    title: 'PHP',
                    process: 80,
                },
                {
                    title: 'Laravel',
                    process: 80,
                },
                {
                    title: 'Wordpress',
                    process: 75,
                },
                {
                    title: 'Python',
                    process: 70,
                },
                {
                    title: 'MySQL',
                    process: 80,
                },

                {
                    title: 'React',
                    process: 65,
                },
                {
                    title: 'Vue',
                    process: 75,
                },
                {
                    title: 'Bootstrap',
                    process: 80,
                },
            ]
        },

        education: {

        },

        discription: {

        }
    }
};

const storeData = (state = data, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'APP_NAME':
            newState[action.type] = action.data;
            return newState;
        case 'UPDATE_PROJECTS_PAGINATION':
            newState['PROJECTS']['settings'] = action.data;
            return newState;
        default:
            return state;
    }
}

let store = createStore(storeData);

store.subscribe(() => console.log(store.getState()))

export default store;