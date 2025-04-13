import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Matthew Garry",
  initials: "MHG",
  url: "https://dev-portfolio-six-gold.vercel.app/",
  location: "Bound Brook, NJ",
  locationLink: "https://www.google.com/maps/place/bound_brook",
  description:
    "Full-stack web developer, skilled in React, Next.js, Node.js, and Express.js. Passionate about building scalable web solutions and improving user experiences. Experienced in developing custom websites and web applications for clients, focusing on responsive design and accessibility. ",
  summary:
    "Former restaurant server and expeditor. In 2023 went to full-stack coding bootcamp at Rutgers University, and traded serving food for serving code, managing an expo line for managing API endpoints, and creating a great dining experience for creating a great user experience. I'm a full-stack web developer, skilled in React, Next.js, Node.js, and Express.js. I'm passionate about building scalable web solutions and improving user experiences. I have experience developing custom websites and web applications for clients, focusing on responsive design and accessibility.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "MySQL",
    "MongoDB",
    "Express.js",
    "REST API",
    "GraphQL",
    "Postgres",
    "Prisma",
    "TailwindCSS",
    "Wordpress  ",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "matthewhgarry@gmail.com",
    tel: "+1-(908)-229-2741",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mhgarry",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthew-garry-46a8b5277/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:matthewhgarry@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ascent Digital Media",
      location: "Clinton, New JErsey",
      title: "Web Developer",
      logoUrl: "#",
      start: "October 2023",
      end: "May 2024",
      description:
        "Developed custom websites using HTML, CSS, JavaScript, and jQuery to align with client brand standards. Integrated front-end solutions with backend APIs to create fully functional user-friendly web applications. Worked on full-stack web development projects, leveraging technologies such as Wordpress for dynamic, content-driven websites. Led the redesign of several websites, improving their user experience, performance, and load times. Collaborated with multiple design teams to create responsive, mobile-first websites that met client needs and expectations.",
    },

    {
      company: "Freelance",
      href: "http://localhost:3000",
      badges: [],
      location: "Remote",
      title: "Full-Stack Web Developer",
      logoUrl: "/logo.svg",
      start: "March 2023",
      end: "Current",
      description:
        "Developed a wide range of client applications using React, Next.js, Node.js, and Express.js. Built and deployed scalable web solutions, managing DevOps tasks, including deployments on Heroku, Vercel, and configuration of GitHub repositories. Led frontend development using React and Next.js, creating responsive and accessible interfaces. Collaborated with clients and cross-functional teams to deliver projects on time and within budget. Enhanced client satisfaction through consistent communication and high-quality code delivery. Focused on expanding skills in TypeScript, Next.js, and web accessibility to improve future project outcomes.",
    },
    ,
  ],
  education: [
    {
      school: "Rutgers University",
      href: "https://docs.credentials.rutgers.edu/196484e4-b438-4af3-abf3-5ebb754ae855",
      degree: "Full Stack Coding",
      logoUrl:
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/74664196",
      start: "March 2023",
      end: "May 2023",
    },
  ],
  projects: [
    {
      title: "Tasks: A Task Management App for Groups",
      href: "https://stark-earth-85289.herokuapp.com/",
      active: true,
      description:
        "Tasks is a task management app built during my coding bootcamp as a four-day team project. Users can create accounts, log in, manage tasks, and assign team members. The frontend was built with Handlebars.js and CSS, while I focused entirely on the backend, handling database architecture, Sequelize modeling, routing, and authentication using Node.js, Express, MySQL, and Passport. Authentication wasn’t required, but I took the initiative to implement it, which deepened my understanding of REST APIs and tools like Insomnia and Postman. This project was a major milestone in my development journey, and I’m especially proud of what we achieved in such a short time.",
      technologies: [
        "Node.js",
        "Express.js",
        "MySQL",
        "Handlebars.js",
        "Sequelize",
        "Passport",
      ],
      links: [
        {
          type: "Website",
          href: "https://stark-earth-85289.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/tasks.mp4",
    },
    {
       title: "Posh Punk: Digital Emporium",
       href: "https://github.com/mhgarry/posh_punk_dev",
       active: true,
       description:
         "Posh Punk: Digital Emporium, is a passion project I'm making as a custom cms and e-shop for my fiancee. It's in development with no production deployment yet It showcases my Next.js, Typescript, Express.js skills among more.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Node.js",
      ],
      links: [
        {
          type: "E-commerce Platform",
          href: "https://github.com/mhgarry/posh_punk_dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/posh_punk.mp4",
    },
    {
      title: "WriteMyReadme",
      href: "https://github.com/mhgarry/WriteMyReadMe",
      active: true,
      description:
        "WriteMyReadme was one of my first projects using Node.js—a CLI tool that generates README files based on user input. This project introduced me to npm packages, command-line interactions, and working with Node.js. I learned how to use Inquirer for user prompts, the fs module for file handling, and Markdown for formatting. It was a surprising and rewarding experience that solidified my interest in backend development. Check out the repo to install and try it out!",
      technologies: ["Node.js", "Command Line"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mhgarry/WriteMyReadMe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/WriteMyReadme.png",
      video: "",
    },
    {
      title: "Integra Managment Corp.: My first site with Wordpress and builders",
      href: "https://www.integramanagementcorp.com",
      description:
        "This project was a business-to-business website I built while working as a web developer at an agency. Using WordPress and Oxygen Builder—both new to me—I developed the site from scratch, with an xd design to match. I ensured full responsiveness across devices and took creative initiative, adding bells and whistles in various places. This project was a great opportunity to showcase my frontend skills, and I’m proud of how it turned out.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Wordpress",
        "Oxygen Builder",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.integramanagementcorp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/integra.mp4",
    },
  ],
} as const;
