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
import work from './../Images/resume/work.svg';
import user from './../Images/resume/user.svg';

// hire me
import upwork from './../Images/hireme/upwork.png'
import freelancer from './../Images/hireme/freelancer.png'
import gmail from './../Images/hireme/gmail.png'

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
    FRONTEND: [
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
            process: 80,
        },
        {
            title: 'JQuery',
            process: 75,
        },
        {
            title: 'React',
            process: 70,
        },
        {
            title: 'Vue',
            process: 75,
        },
        {
            title: 'Bootstrap',
            process: 80,
        },
        {
            title: 'SASS',
            process: 70,
        },
        {
            title: 'Pug',
            process: 60,
        },
    ],
    BACKEND: [
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
            title: 'API Integration',
            process: 80,
        },
        {
            title: 'Plugins Dev',
            process: 60,
        },
        {
            title: 'Scraping',
            process: 70,
        },
        {
            title: 'Selenium',
            process: 60
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
        about: {
            title: 'About Me',
            icon: user,
            content: `
                I'm Bishoy Romany, i love anything related to technology and computers. <br /> 
                I've +2 years of creating websites, i can build any website related to the programming languages that i master, 
                in fact i like building big and complicated websites, it's much interesting than simple websites. <br />
                I'm open for learning new technologies and accept criticism, because i believe that this is how we can improve and reach the required task.
            `
        },
        work: {
            title: "Experience",
            icon: work,
            exp: [
                {
                    title: 'Full-stack web developer',
                    time: '2019 - present',
                    company: 'Upwork',
                    url: 'https://www.upwork.com/freelancers/~0193309aa3cbddd9fd'
                },
                {
                    title: 'Full-stack web developer',
                    time: '2019 - present',
                    company: 'Freelancer',
                    url: 'https://www.freelancer.com/u/bishoyromany7677'
                }
            ],
        },
        education: {
            title: "Education",
            icon: education,
            edu: [
                {
                    title: 'Faculty of Commerce',
                    time: '2019 - present',
                    company: 'Ain Shams University',
                    url: 'http://www.asu.edu.eg/'
                },
                {
                    title: 'High School',
                    time: '2016 - 2019',
                    company: 'Cairo High School',
                    url: '#Resume'
                }
            ],
        }
    },
    HIREME: [
        {
            'title': 'Hire me Through Upwrok',
            'icon': upwork,
            'url': 'https://www.upwork.com/freelancers/~0193309aa3cbddd9fd',
            background: '#FFF',
            color: '#333',
            hover: '#70da44',
            hoverColor: 'white',
        },
        {
            'title': 'Hire me Through Freelancer',
            'icon': freelancer,
            'url': 'https://www.freelancer.com/u/bishoyromany7677',
            background: '#FFF',
            color: '#333',
            hover: '#0188e2',
            hoverColor: 'white',
        },
        {
            'title': 'Or Contact Me',
            'icon': gmail,
            'url': 'mailto:7bishoyromany7@gmail.com',
            background: '#FFF',
            color: '#333',
            hover: '#a40000',
            hoverColor: 'white',
        }
    ]
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