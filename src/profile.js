// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "a Ashish Yadav",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I have more than three and half years of experience as Full Stack Engineer and always ready in getting hands dirty with an emerging technology. Passionate \
engineer who has knack for solving problems.Strong in design, architecture and integration skills with checks on quality.Expertise in serverless architecture design, blockchain, AWS Lambdas, Docker, Node js, React js, python.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
  {
    name: "Docker",
    // svg: '',
    faClass: "fab fa-docker",
  }, {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "React js",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Database - PSQL",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Blockchain : Hyperledger Sawtooth",
    // svg: '',
    faClass: "fas fa-sitemap",
  },
  {
    name: "Blockchain : Hyperledger Fabric",
    // svg: '',
    faClass: "fas fa-sitemap",
  },
  // {
  //   name: "HTML5",
  //   // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
  //   svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
  //   faClass: "fab fa-html5",
  // },
  // {
  //   name: "CSS3",
  //   // svg: '',
  //   faClass: "fab fa-css3",
  // },

  // {
  //   name: "SASS",
  //   // svg: '',
  //   faClass: "fab fa-sass",
  // },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Data Structures and Algorithm",
    // svg: '',
    faClass: "fas  fa-square",
  },
  // {
  //   name: "PHP",
  //   // svg: '',
  //   faClass: "fab fa-php",
  // },


];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const ongoing = [{
  // Add image in './styles/images.css' in #project1
  id: "project7",
  name: "Bondblox",
  skills: ["Nodejs, React js, PSQL, Python, Docker, AWS, Serverless architecture, Hyperledger Sawtooth"],
  role: '• I am responsible for leading the core development for bond exchange based on Blockchain.\n\
          • Designed and implemented a transaction processor(smart contracts) based on open source distributed ledger system(Hyperledger Sawtooth) on top of docker containers.\n\
• Developed and designed reliable event based system which publish to different subscribers.\n\
• Involved in complex design and development of asynchronous decoupled system to maintain.\n\
• Designed and implemented secure and reliable webhook to send events to other connected systems. \n\
• Involved in Rest API design and implementation which we have exposed to clients to consume our backend service.\n\
• Developed and designed recovery utility for our bond exchange which tracks all transactions and events.\n\
',
  //url: "https://www.youtube.com/watch?v=9v5hSZxZTEU",
}]
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "USAMMA",
    skills: ["Go, Hyperledger Fabric, Nodejs, Aws EC2, Mac OS X, Git, Javascript, Restful"],
    role: '• Setup Fabric server in AWS EC2 instance using docker.\n\
          • As it was multiorganization deployment, created all the required artifacts files for the server deployment.\n\
• Written start and stop script for fabric server.\n\
• Created Rest API routes in the NodeJS server that invoke the chaincode.\n\
• Assist Frontend developers with UI creation and REST API calls(using services in C#) \n\
• Developed fast and efficient chaincode(written in Go) to manipulate, format client data and then store it in the ledger.\n\
• Give presentations and demos to clients on the Blockchain Architecture.\n\
• Design integration document creation.\n\
• Design Unit Testcases.',
    //url: "https://www.youtube.com/watch?v=9v5hSZxZTEU",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Arender",
    skills: ["Java, git, tomcat"],
    role: '• Integrate Arender and Box so box files can use Arender as previewer.\n\
• Develop connector using Java to integrate Arender and box.\n\
• Create function to provide Arender annotation and redaction feature to box files.\n\
• Implement user based authentication to login into box repository.\n\
• Assist Frontend developers with UI creation and API calls.',
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Molina Health Care",
    skills: ["Nodejs,React Js, BOX UI Elements, Nintex"],
    role: '• Created workflow in Nintex.\n\
• Configured Nintex with Box platform.\n\
• Developed standalone application using BOX UI elements.\n\
• Integrated Nintex workflow and BOX.\n\
• Deployed application on Heroku platform as application was based on node js.',
    // url: "Nodejs,React Js, BOX UI Elements, Nintex",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Irving Oil mobile App",
    skills: ["Android,IOS,swift,java"],
    //url: "https://github.com/kaustubhai",
    role: '• Developed Mobile app on Android and IOS platform.\n\
• Integrate apps with Documentum platform and fetch the data.\n\
• Used CMIS service in Android application for fetching the data from Documentum Repository.\n\
• Used restful service provided by Documentum to fetch data in IOS application.'
  },
  // {
  //   // Add image in './styles/images.css' in #project5
  //   id: "project5",
  //   name: "Project 5",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you find my profile suitable for any opportunities please feel free to contact me using given form. You can also connect me on linkedlin using below link. I have also provided download button for my resume, please have a look. Thanks for visiting my page. ",
  copyright: "Ashish Yadav",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Ashish569",
  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  //instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/ashishydv/",
  resume: "https://www.canva.com/design/DAEqVoXS4bo/N1etBEaGazdplhMoQg4yqw/view?utm_content=DAEqVoXS4bo&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  ongoing
};
