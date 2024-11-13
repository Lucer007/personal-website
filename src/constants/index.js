import {
    backend,
    camera,
    creator,
    credit_card,
    css,
    cvs,
    earth_planes,
    figma,
    frontend,
    git,
    gm,
    html,
    ip_tracker,
    javascript,
    mongodb,
    nodejs,
    react_js,
    tailwind,
    testimonial01,
    testimonial02,
    three_js,
    typescript,
    umass_boston,
    verbotics_ai,
    cccc,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const talents = [
    {
        title: "Information Technology Developer",
        icon: frontend,
    },
    {
        title: "Economic Researcher",
        icon: backend,
    },
    {
        title: "Photographer",
        icon: camera,
    },
    {
        title: "Podcast Producer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: react_js,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: three_js,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "IT Consultant / Auditor",
        company_name: "Hyannis Rotary Club",
        icon: gm,
        iconBg: "#ffffff",
        date: "July 2024 - Present",
        points: [
            "Strategized a revamp of the existing system to establish a new user interface to sunset the \n" +
            "archaic website design.",
            "Optimized and maximized efficiency and increased exposure to Rotary requirements \n" +
            "while delivering quality work, slowly building and sustaining relationships with the client.",
            "Assisted in marketing and outreach campaign, by contributing to user and group policy \n" +
            "writing.",
            "Continuously assess the backwards compatibility (i.e., integrating new features into existing technologies) to help the club reach a broader audience.",
        ],
    },
    {
        title: "Museum Docent",
        company_name: "Commonwealth Museum",
        icon: cvs,
        iconBg: "#FFF",
        date: "August 2023 - present",
        points: [
            "Managed and led daily tours focusing on pivotal American historical documents, ensuring \n" +
            "information is accessible and engaging for all age groups.",
            "Designed and developed educational programs and interactive exhibits for school groups, \n" +
            "enhancing their understanding of American history in ways that encourage curiosity.",
            "Proactively conducted in-depth research and analysis on the Declaration of \n" +
            "Independence, the Charter of 1691, the Massachusetts Bay Colony Charter, the oldest \n" +
            "constitution of Massachusetts, and the Bill of Rights to provide accurate and detailed \n" +
            "tours.",
            "Trained and mentored new docents, sharing best practices for effective tour delivery and \n" +
            "visitor engagement.",
        ],
    },
    {
        title: "Postal Worker",
        company_name: "United State Postal Service",
        icon: verbotics_ai,
        iconBg: "#ffffff",
        date: "January 2020 - May 2021",
        points: [
            "Responsible for presenting a proposal to modernize the IT infrastructure supporting medical usage metrics.",
            "Collaborated with the team and client for a needs assessment and walkthrough required access controls when updating the system to decrease inefficiency.",
            "Optimized system through connecting AI to a search bar implemented on the website.",
            "Through effective delegation, led the project to completion and produced a high-quality final proposal, including a comprehensive report and prototype demonstration, to stakeholders for approval and potential implementation.",
        ],
    },
    {
        title: "President of Rotaract Club",
        company_name: "",
        icon: cccc,
        iconBg: "#fff",
        date: "September 2019 - March 2020",
        points: [
            "Led club operations: Directed a team of board members and oversaw weekly meetings, setting agendas, and guiding strategic planning to achieve community-focused goals.\n",
            "Strategic Planning & Project Oversight: Developed and executed a balanced calendar of service projects, fundraising events, and professional development activities aligned with Rotaract mission.\n",
            "Community & Member Engagement: Fostered a welcoming club culture, boosting membership engagement and expanding partnerships with local Rotary clubs and organizations.\n",
            "Financial Stewardship: Managed club budget and fundraising initiatives, working with the Treasurer to ensure fiscal responsibility and successful project funding.\n",
            "Effective Transition Planning: Documented achievements and best practices, mentoring the Vice President for a seamless leadership transition.",
        ],
    },
    {
        title: "Vice-President of Rotaract Club",
        company_name: "",
        icon: cccc,
        iconBg: "#fff",
        date: "September 2018 - May 2019",
        points: [
            "Supported Strategic Leadership: Collaborated with the President in developing and implementing club goals, agendas, and initiatives, contributing to an increase in member engagement and community outreach.\n",
            "Event & Project Coordination: Spearheaded the planning and execution of service projects and professional development events, ensuring alignment with club objectives and Rotaract values.\n",
            "Leadership Development & Member Engagement: Fostered an inclusive environment, actively engaging members and encouraging involvement in leadership opportunities and community service.\n",
            "Financial & Administrative Support: Assisted in budget management and logistical planning for events, ensuring efficient use of resources and smooth operations.\n",
            "Transition & Continuity Planning: Prepared to step into the President role by mentoring new board members and documenting club processes, supporting sustainable leadership succession.\n",
        ],
    },
];

const testimonials = [
    {
        testimonial: "The best person I were met :)",
        name: "Daniel Werminghausen",
        designation: "Software Engineer",
        company: "Bonterra",
        image: testimonial01,
    },
    {
        testimonial:
            "I have worked with Saj for 7 years and I have not seen anyone else with the level of passion, dedication, and skill that Saj has. I think he is an important asset in any company, software or otherwise.",
        name: "Bryon Ferrer",
        designation: "Application Development/Maintenance Officer",
        company: "State Street",
        image: testimonial02,
    },
];

const projects = [
    {
        name: "Interactive Credit Card",
        description:
            "This is a solution to the Interactive card details form challenge on Frontend Mentor which is meant to challenge and help you improve your coding skills by building realistic projects.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            // {
            //     name: "mongodb",
            //     color: "green-text-gradient",
            // },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: credit_card,
        source_code_link:
            "https://github.com/StormKing969/interactive-card-details",
    },
    {
        name: "3D Display of The Earth and Planes",
        description:
            "The web application was created following a guide which is meant to be used as an introduction to 3D web designing.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            // {
            //     name: "scss",
            //     color: "pink-text-gradient",
            // },
        ],
        image: earth_planes,
        source_code_link: "https://github.com/StormKing969/earth-and-planes",
    },
    {
        name: "IP Address Tracker",
        description:
            "This is a solution to the IP address tracker challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: ip_tracker,
        source_code_link: "https://github.com/StormKing969/ip-address-tracker",
    },
];

export { experiences, projects, talents, technologies, testimonials };
