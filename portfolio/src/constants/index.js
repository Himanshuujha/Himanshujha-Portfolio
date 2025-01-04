import {
  mobile,
  backend,
  creator,
  web,
  javascript,

  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hst,
  codee,
  jobit,
  tripguide,
  image,
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
    title: "Problem Solving",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Chess Player",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Numero Web Pvt Ltd.",
    icon: image,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "-Contributed to Logo-DesignMaker, a logo design request platform, handling both frontend and backend development.",
      "-Used React.js, Node.js, MongoDB, and integrated APIs like Calendly, Razorpay, and Rapyd.",
      "- Implemented RESTful services, cron jobs, cookies, and JWT-based authentication for secure sessions.",
      "-Utilized HTTP and JSON for efficient client-server communication with XML for complex data handling.",
      "-Collaborated with a 6-member team on API integration, building a ticketing system with chat and scheduling features."
    ],
  },
  
];



const projects = [
  {
    name: "Collaborative Code Editor",
    description:
      "Web-based platform that allows users to create and join a room wehere they can write code at the same time by displaying the effects on all the screens in the same room.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      },
    ],
    image: codee,
    source_code_link: "https://github.com/Himanshuujha",
  },
  {
    name: "Hostel Management Website",
    description:
      "Designed a comprehensive hostel management platform for students, staff, and authorities.Integrated MongoDB for data storage, JWT for secure login, and Twilio for real-time issue forwarding.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: hst,
    source_code_link: "https://github.com/Himanshuujha",
  },
  {
    name: "Airline management system",
    description:
      " Developed a flight booking platform with a microservices design for scalability and performance.Implemented filters, seat availability indicators, and secure authentication for seamless transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Himanshuujha",
  },
];

export { services, technologies, experiences, projects };
