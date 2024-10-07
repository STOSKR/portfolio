import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    spring,
    html,
    css,
    reactjs,
    java,
    sql,
    kotlin,
    tailwind,
    nodejs,
    git,
    figma,
    fukui,
    oasis,
    matchi,
    matcher,
    smarttrade,
    carrent,
    jobit,
    tripguide,
    threejs,
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

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "App Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Kotlin",
        icon: kotlin,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Spring",
        icon: spring,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "SQL",
        icon: sql,
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
        title: "Backend Developer",
        company_name: "MATCHi",
        icon: matchi,
        iconBg: "#50be4e",
        date: "Dec 2023 - Jun 2024",
        location: "Valencia, Spain",
        points: [
            "Managed databases, developed automation scripts, developed and maintained mobile applications using java and other related technologies, documented processes, and trained new staff",
            "Enhanced team performance by 40% through efficient completion of pending tasks upon taking on the role, leading to a more streamlined and effective workflow.",
            "Enhanced the upload process by 20% through script optimization"
        ],
    },
    {
        title: "Frontend Developer / Team Lead",
        company_name: "Oasis",
        icon: oasis,
        iconBg: "#F5F5DC",
        date: "Mar 2024 - Mar 2024",
        location: "Valencia, Spain",
        points: [
            "Desinging and exposing the idea of a mobile application that allows users to book and manage their powerbanks.",
            'Awarded €1000 for winning the Hackathon and received an invitation to the "Big Day" (National competition only for two winning teams).',
            "Earned diplomas for Best Presentation, Most Innovative Idea and 1st place in the hackathon.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Matcher",
        icon: matcher,
        iconBg: "#000000",
        date: "May 2024 - May 2024",
        location: "Barcelona, Spain",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Developed an AI to identify products in the Inditex database based on a photo",
            "Created a scraping bot to download and classify images from Inditex databases."
        ],
    },
    {
        title: "Restaurant manager",
        company_name: "Restaurante Fukui",
        icon: fukui,
        iconBg: "#E6DEDD",
        date: "Jul 2019 - Present",
        location: "Valencia, Spain",
        points: [
            "Supervised dining room operations to ensure high customer satisfaction and efficiency, managed reservations and optimized table assignments, trained personnel on service protocols and food safety standards, and resolved service issues promptly.",
            "Increase customer satisfaction by 20% approximately.",
            "Boosted visits by 32%.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "SmartTrade",
        description:
            "Android application that allows users to buy eco-friendly products, browse a wide selection of sustainable items, read detailed descriptions and reviews, compare prices, and receive personalized recommendations based on their preferences. The app also features a order tracking, and a user-friendly interface to enhance the shopping experience while promoting environmentally responsible choices.",
        tags: [
            {
                name: "Kotlin",
                color: "violet-text-gradient",
            },
            {
                name: "Spring Boot",
                color: "green-text-gradient",
            },
            {
                name: "Java",
                color: "red-text-gradient",
            },
            {
                name: "API REST",
                color: "blue-yellow-text-gradient",
            },
            {
                name: "JUnit",
                color: "red-green-text-gradient",
            },
        ],
        image: smarttrade,
        source_code_link: "https://github.com/orgs/SmarTradeUPV/repositories",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };