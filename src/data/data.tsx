import {
    AcademicCapIcon,
    DownloadIcon,
    FlagIcon,
    MapIcon,
    OfficeBuildingIcon,
    SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
    About,
    ContactSection,
    ContactType,
    Hero,
    HomepageMeta,
    PortfolioItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'My Personal Website',
    description: "This is my personal website by using next.js framework",
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Portfolio: 'portfolio',
    Resume: 'resume',
    Skills: 'skills',
    Stats: 'stats',
    Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: heroImage,
    name: `I'm Xiao Feng Huang.`,
    description: (
        <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                I'm a Montreal based <strong className="text-stone-100">Full Stack Software Engineer</strong> focused on
                help customers
                develop modern, dynamic and high-performance websites. <br/>
                In my free time, I'm an amateur <strong className="text-stone-100">soccer player</strong> and a big fan of Messi. During summer and fall time, I like Hiking,
                Kayaking, and play soccer with my kids.
            </p>
        </>
    ),
    actions: [
        {
            href: '/assets/resume.pdf',
            text: 'Resume',
            primary: true,
            Icon: DownloadIcon,
        },
        {
            href: `#${SectionId.Contact}`,
            text: 'Contact',
            primary: false,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `Full Stack developer focused on help customers develop modern, dynamic and high-performance websites.Back-end assets in Java 
    springboot, Node.js Express and AWS serverless, web services, SQL and NoSQL databases, and API development. Architectural experience in MVC,
     MVVM. Front-end experiences in React.js, Vue.js and Typescript. Familiar with http protocol, middleware and authentication system such as 
     OAuth, multi-factor authentication and etc.`,
    aboutItems: [
        {label: 'Location', text: 'Montreal, QC', Icon: MapIcon},
        {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
        {label: 'Interests', text: 'Soccer, Reading, Hiking', Icon: SparklesIcon},
        {label: 'Study', text: 'Vanier College', Icon: AcademicCapIcon},
        {label: 'Employment', text: 'Looking for new Opportunity', Icon: OfficeBuildingIcon},
    ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: 'Spoken languages',
        skills: [
            {
                name: 'Mandarin',
                level: 10,
            },
            {
                name: 'English',
                level: 8,
            },
            {
                name: 'French',
                level: 3,
            },
        ],
    },
    {
        name: 'Frontend development',
        skills: [
            {
                name: 'React',
                level: 9,
            },
            {
                name: 'Vue',
                level: 8
            },
            {
                name: 'Typescript',
                level: 7,
            },
            {
                name: 'next.js',
                level: 5,
            },
        ],
    },
    {
        name: 'Backend development',
        skills: [
            {
                name: 'Node.js',
                level: 8,
            },
            {
                name: 'Java',
                level: 7,
            },
            {
                name: 'AWS Serverless',
                level: 5,
            },
        ],
    },
    {
        name: 'Database',
        skills: [
            {
                name: 'MySQL',
                level: 9,
            },
            {
                name: 'PostgreSQL',
                level: 7,
            },
            {
                name: 'MongoDB',
                level: 7,
            },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Simple Calculator',
        description: 'A simple calculator built with next.js, Typescript and Jest, by using factory pattern and TDD method',
        url: 'https://calculator-nextjs-gamma.vercel.app/',
        image: porfolioImage1,
    },
    // {
    //     title: 'Project title 2',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage2,
    // },
    // {
    //     title: 'Project title 3',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage3,
    // },
    // {
    //     title: 'Project title 4',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage4,
    // },
    // {
    //     title: 'Project title 5',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage5,
    // },
    // {
    //     title: 'Project title 6',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage6,
    // },
    // {
    //     title: 'Project title 7',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage7,
    // },
    // {
    //     title: 'Project title 8',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage8,
    // },
    // {
    //     title: 'Project title 9',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage9,
    // },
    // {
    //     title: 'Project title 10',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage10,
    // },
    // {
    //     title: 'Project title 11',
    //     description: 'Give a short description of your project here.',
    //     url: 'https://timbaker.me',
    //     image: porfolioImage11,
    // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: '2021.10 - 2023.01',
        location: 'Vanier college',
        title: 'Software Applications Specialist',
        content: <p>Secure desktop, mobile and web application development, Computer software engineer</p>,
    },
    {
        date: '2002 - 2005',
        location: 'Tongji University',
        title: 'Anlytical Chemistry, Master',
        content: <p></p>,
    },
    {
        date: '1998 - 2002',
        location: 'Tongji University',
        title: 'Applied Chemistry, Bachelor',
        content: <p></p>,
    },
];

export const experience: TimelineItem[] = [
    {
        date: '2022.11 - 2023.01',
        location: 'Joseph Ribkoff Inc.',
        title: 'Full-stack Developer',
        content: (
            <ul className="list-disc">
                <li>Design and build web pages for B2C management with React.js and IndexedDB</li>
                <li>Query Azure database with Microsoft Graph API</li>
                <li>Deploy and maintain web application on virtual machine</li>
                <li>Manage Apps with Azure Active Directory</li>
            </ul>
        ),
    },
    {
        date: '2022.03 - 2022.08',
        location: 'purple Devops Inc.',
        title: 'Back-end Developer',
        content: (
            <ul className="list-disc">
                <li>API development with JAVA Springboot framework: development in create, read, update, and delete operations.
                    Input and output data process.</li>
                <li>Database design and manipulation with PostgreSql: database modeling, devising ER diagrams, access database
                    with ORM Spring Data JPA, Multiple tables join to get data, implement performance optimization.</li>
                <li>Service layer development includes business logics implementation, algorithm construction, object
                    manipulation event handlers creation and unit tests</li>
                <li>Cloud experience in code deployment using AWS</li>
            </ul>
        ),
    },
    {
        date: '2021.10 - 2022.03',
        location: 'Vanier College',
        title: 'Java Developer',
        content: (
            <ul className="list-disc">
                <li>Backend work involving the core concepts of object-oriented programming such as objects, classes, methods,
                    encapsulation, inheritance, polymorphism, exception handling, recursion, and abstraction.</li>
                <li>Improving/creating data structures such as: single and multi-dimensional arrays, linked list, array lists,
                    sets, hash-sets, trees, binary trees, stack, and queues</li>
                <li>Implementing algorithms such as: Binary Search, Bubble sorting, Selection sorting, Insertion sorting etc.</li>
            </ul>
        ),
    },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
    imageSrc: testimonialImage,
    testimonials: [
        {
            name: 'John Doe',
            text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
            image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
        },
        {
            name: 'Jane Doe',
            text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
            image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
        },
        {
            name: 'Someone else',
            text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
            image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        },
    ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Get in touch.',
    description: 'Currently seeking Back-end or full stack development opportunity in Great Montreal area. I was eligible for ' +
        'wage subsidy from Emploi Quebec, so you can only pay half of salary for 6 months',
    items: [
        {
            type: ContactType.Email,
            text: 'huangxiaofeng.canada@gmail.com',
            href: 'mailto:huangxiaofeng.canada@gmail.com',
        },
        {
            type: ContactType.Location,
            text: 'Montreal QC, Canada',
            href: 'https://www.google.com/maps/@45.4699478,-73.8519113,15z',
        },
        {
            type: ContactType.LinkedIn,
            text: 'Huang, Xiao Feng',
            href: 'https://www.linkedin.com/in/xiaofeng-huang-93069b8/',
        },
        {
            type: ContactType.Github,
            text: 'hawkhxf2000@gmail.com',
            href: 'https://github.com/hawkhxf2000',
        },
    ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hawkhxf2000'},
    // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/xiaofeng-huang-93069b8/'},
    {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/hawkhxf2000/'},
    {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/hawkhxf2000'},
];
