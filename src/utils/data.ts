import { BiLogoJavascript } from "react-icons/bi";
import {
    FaCss3,
    FaFacebook,
    FaHtml5,
    FaInstagram,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaGithubAlt
} from "react-icons/fa";
import { FaGitAlt, FaXTwitter } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
    VscCommentUnresolved,
    VscTerminalPowershell,
    VscVscode
} from "react-icons/vsc";

import PORTFOLIO_WEBSITE_IMAGE from "../assets/portfolio_website.png";

export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" }
];

export const STATS = [
    { id: "01", value: "10", label: "Years of \nExperience" },
    { id: "02", value: "12", label: "Certifications \nEarned" },
    { id: "03", value: "43", label: "Projects \nCompleted" },
    { id: "04", value: "37+", label: "Happy \nClients" }
];

export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    { id: "05", label: "Skills", value: "soft-skills" }
];

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description:
            "I have extensive experience in building web applications using React JS, including state management with Redux and context API."
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 99,
        type: "frontend",
        description:
            "I have a strong understanding of HTML and its role in web development, ensuring semantic and accessible markup."
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        progress: 85,
        type: "frontend",
        description:
            "I have a strong understanding of CSS and its role in web development, ensuring responsive and visually appealing designs."
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 90,
        type: "frontend",
        description:
            "I have a strong understanding of JavaScript and its role in web development, ensuring dynamic and interactive web applications."
    },
    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node JS",
        progress: 95,
        type: "backend",
        description:
            "I have extensive experience in building web applications using Node JS, including RESTful APIs and server-side rendering."
    },
    {
        id: "06",
        icon: SiExpress,
        skill: "Express JS",
        progress: 98,
        type: "backend",
        description:
            "I have extensive experience in building web applications using Express JS, including RESTful APIs and server-side rendering."
    },
    {
        id: "07",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 75,
        type: "backend",
        description:
            "I have extensive experience in building web applications using MongoDB, including data modeling and database management."
    },
    {
        id: "08",
        icon: SiMysql,
        skill: "MySQL",
        progress: 80,
        type: "backend",
        description:
            "I have extensive experience in building web applications using MySQL, including data modeling and database management."
    },
    {
        id: "09",
        icon: FaGitAlt,
        skill: "Git & GitHub",
        progress: 90,
        type: "tools",
        description:
            "I have extensive experience in using Git for version control, including branching, merging, and resolving conflicts."
    },
    {
        id: "10",
        icon: VscVscode,
        skill: "Visual Studio Code",
        progress: 85,
        type: "tools",
        description:
            "I have extensive experience in using Visual Studio Code for web development, including debugging, formatting, and code completion."
    },
    {
        id: "11",
        icon: SiWebpack,
        skill: "Webpack",
        progress: 90,
        type: "tools",
        description:
            "I have extensive experience in using Webpack for optimizing and bundling JavaScript and CSS files."
    },
    {
        id: "12",
        icon: VscCommentUnresolved,
        skill: "Problem Solving",
        progress: 90,
        type: "soft-skills",
        description:
            "I have extensive experience in solving complex problems and finding efficient solutions."
    },
    {
        id: "13",
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 90,
        type: "soft-skills",
        description:
            "I have extensive experience in collaborating with team members to develop and deploy web applications."
    },
    {
        id: "14",
        icon: VscTerminalPowershell,
        skill: "Attention to Detail",
        progress: 83,
        type: "soft-skills",
        description:
            "I have extensive experience in paying attention to detail and ensuring that web applications are user-friendly and visually appealing."
    }
];

export const ABOUT_ME = {
    content: `I am a passionate developer with a strong background in web technologies and a commitment to continuous learning. I have a proven track record of delivering high-quality projects on time and within budget. I am always looking for new challenges and opportunities to grow my skills.
    \n I have a proven track record of delivering high-quality projects on time and within budget. I am always looking for new challenges and opportunities to grow my skills. I have a proven track record of delivering high-quality projects on time and within budget. I am always looking for new challenges and opportunities to grow my skills.`,
    socialLinks: [
        {
            id: "01",
            label: "Facebook",
            icon: FaFacebook,
            link: "https://www.facebook.com/liamvietpham"
        },
        {
            id: "02",
            label: "Instagram",
            icon: FaInstagram,
            link: "https://www.instagram.com/phamviet3050"
        },
        {
            id: "03",
            label: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/liampham03051999"
        },
        {
            id: "04",
            label: "GitHub",
            icon: FaGithubAlt,
            link: "https://github.com/pviet693"
        },
        {
            id: "05",
            label: "Twitter",
            icon: FaXTwitter,
            link: "https://twitter.com/liampham3050"
        }
    ],
    email: "gKlZm@example.com",
    phone: "+91 1234567890",
    website: "https://vietpham.com"
};

export const PROJECTS = [
    {
        id: "01",
        title: "E-commerce Website",
        image: PORTFOLIO_WEBSITE_IMAGE,
        tags: ["React", "Express.js", "Node.js", "MongoDB"]
    },
    {
        id: "02",
        title: "Portfolio Website",
        image: PORTFOLIO_WEBSITE_IMAGE,
        tags: ["React", "Tailwind CSS", "Typescript"]
    },
    {
        id: "03",
        title: "Social Media App",
        image: PORTFOLIO_WEBSITE_IMAGE,
        tags: ["React", "Express.js", "Node.js", "MongoDB"]
    },
    {
        id: "04",
        title: "Blog Website",
        image: PORTFOLIO_WEBSITE_IMAGE,
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: "05",
        title: "Weather App",
        image: PORTFOLIO_WEBSITE_IMAGE,
        tags: ["React", "API"]
    }
];
