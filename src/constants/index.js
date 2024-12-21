import project1 from "../assets/projects/elearning.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/worldWise.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, PostgreSQL, . My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Proficient in React.js, HTML, JavaScript, CSS, Tailwind, jQuery, PostgreSQL, Supabase, Redux, and Redux Toolkit, I bring 5 years of experience as a full stack developer. My expertise extends to tools and platforms like Figma, Bootstrap, Vite, Visual Studio Code, Leaflet Map, Azure OpenAI, Azure Document Intelligence, and Shopify. I excel in web and UI development, creating scalable and user-friendly applications while leveraging technologies like MongoDB and JSON for efficient data management. With a strong foundation in modern web development practices, I thrive in collaborative environments and continuously adapt to emerging technologies to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Front End Developer",
    company: "Tata Consultancy Services",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "tailwind css", "postgreSQL"],
  },
  {
    year: "2021 - 2021",
    role: "Shopify Backend Developer",
    company: "JTPL",
    description: `As a Shopify Backend Developer, I specialize in creating and optimizing backend solutions for Shopify stores. My expertise includes integrating third-party apps, customizing Shopify APIs, and ensuring seamless functionality for e-commerce platforms. I have experience in building scalable and efficient backend systems to support dynamic online stores, leveraging my knowledge of databases, server-side scripting, and Shopify Liquid. By focusing on performance and reliability, I ensure a smooth user experience for both store owners and customers.`,
    technologies: ["HTML", "CSS", "Liquid", "JQuery"],
  },
];

export const PROJECTS = [
  {
    title: "E-Learning Portal",
    image: project1,
    description:
      "A fully functional e-learning website with features like Learning Dashboard, , and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "PostgreSQL", "Figma"],
  },
  {
    title: "Card Digitization Application",
    image: project2,
    description:
      "An application for Automation the process of manually proceeding with the cards by using AzureGenAI & Azure Document Intelligence",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "AzureGenAI",
      "Azure Document Intelligence",
    ],
  },
  {
    title: "GIS Map Creator",
    image: project3,
    description:
      "A map creator which used to annotate the symbols on GIS Maps.",
    technologies: ["ESRI", "CSS", "React", "Atlas"],
  },
  {
    title: "WorldWise Travel Location APp",
    image: project4,
    description:
      "Developed a travel location marker app using Leaflet.js maps, allowing users to track places they’ve visited.",
    technologies: ["HTML", "CSS", "Vite", "LeafLet.js Map", "mySQL"],
  },
];

export const CONTACT = {
  address: "Jagadhri, YamunaNagar, Haryana ",
  phoneNo: "7400240248",
  email: "divanshurohilla16@gmail.com",
};
