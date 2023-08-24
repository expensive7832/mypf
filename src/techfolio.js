
import emoji from "react-easy-emoji";
 
  
const app = {
  title: "Jimoh Yusuf  Portfolio",
  // Note : consider leaving null if you dont have any head icon
  description: "Fullstack Developer",
  
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/expensive7832",
  linkden: "https://linkedin.com/in/esquire-expensive",
  facebook: "https://web.facebook.com/jumuat",
  twitter: "https://twitter.com/Esquirexpensive"
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Jimoh Yusuf Kayode",
  bannerHeading: "Esq. Yusuf",
  bannerTagLine: emoji(
    "accomplished software developer, that possess a dynamic skill set that spans the entire spectrum of modern web and mobile application development. My expertise covers a wide range of technologies including HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, API integration, Python, Django, Django Rest Framework (DRF), React Native, Node.js, and Next.js."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "myImage.png",
  resumeLink:
    "https://drive.google.com/file/d/1Yh3ZjlNF-9EHghGC0f8ea0lbXd09eGSF/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "jimoh Yusuf",
  firstCommand: "react-scripts start",
  secondCommand: "npm start || yarn start || npm run dev",
  about:
    `Crafting Immersive User Experiences:
     With an in-depth knowledge of HTML, CSS, and JavaScript, I excel in creating visually appealing, responsive, and user-centric front-end interfaces. I am adept at leveraging frameworks such as Tailwind CSS and Bootstrap to streamline development while maintaining a high degree of design fidelity and interactivity.\n Empowering Front-End with React: \n My mastery of React empowers me to build sophisticated single-page applications (SPAs) that provide users with seamless interactions. I specialize in architecting reusable components, managing state effectively, and seamlessly integrating APIs to deliver engaging and dynamic user experiences.\nSeamless API Integration and Back-End Development:\nMy expertise extends to crafting robust APIs that facilitate smooth data communication between front-end interfaces and back-end systems. I am skilled in Python and Django, enabling me to create resilient and scalable back-end solutions. I am particularly adept at utilizing Django Rest Framework (DRF) to construct comprehensive API endpoints with advanced authentication and documentation.\nBridging Mobile Platforms with React Native:\nWith React Native, I am proficient in building cross-platform mobile applications that provide a native feel on both iOS and Android platforms. I am skilled in creating fluid user interfaces, integrating device features, and optimizing performance for mobile users.
     Node.js and Next.js for Server and Web Applications: 
     I harness the power of Node.js to develop efficient and scalable server-side applications that ensure smooth communication between front-end and back-end systems. Moreover, my expertise extends to Next.js, enabling me to build server-rendered React applications with enhanced performance and SEO optimization.
    
    Innovative Problem-Solving and Continuous Learning: 
    Throughout my career, I've demonstrated a flair for innovative problem-solving and a commitment to staying at the forefront of technological advancements. This enables me to implement cutting-edge solutions, optimize application performance, and adapt to evolving industry trends.
    
    Collaborative and Communication-Focused:  
    Recognizing the importance of collaboration, I thrive in team environments where I can effectively communicate and collaborate with designers, product managers, and fellow developers. I understand the significance of clear communication in delivering successful software projects.
    
    In summary, I bring a comprehensive skill set and extensive experience to the role of a software developer. Proficient in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, API development, Python, Django, Django Rest Framework, React Native, Node.js, and Next.js, I am well-equipped to create feature-rich, user-focused applications that align with the needs and goals of users and stakeholders.
    `
    
};



/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css and Scss, material-ui & bootstrap",
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like WordPress development, Expressjs.",
  ],

  
};

/** project section  */


const project = [
  {title: "food-delivery", description: "food delivery webapp built on react, reactstrap, bootstrap, node.js, cloudinary with authentication", url: "https://cuisinetreat.onrender.com",tech: ["html", "css", "bootstrap","js", "react", "cloudinary","authentication", "nodejs"] },
  {title: "Booking", description: "booking web app built on react, bootstrap, python, django with authentication", url: "https://bookappt.netlify.app",tech: ["html", "css","js", "bootstrap","react", "python","django", "authentication", "drf"] },
  {title: "ResbitsLtd", description: "Real Estate website built on nextjs and tailwind backend coming soon....", url: "https://www.resbits.com/",tech: ["html", "css","js", "tailwind","nextjs"] },
  {title: "Frontend RealEstate Demo", description: "Real Estate website built on react and reactstrap backend coming soon....", url: "https://www.resbits.com/",tech: ["html", "css","js", "reactstrap","react"] },
  {title: "Calculator", description: "simple javascript code to demonstrate my strong understanding of js", url: "https://calcnow.netlify.app",tech: ["html", "css", "js", "problem solving"] },
]


/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "Web Intern",
      experienceDesc:
        "training on powering frontend web page with web language",
      // Recommended : don't add full date.
      experienceDuration: "01/10/2020 - 31/01/2021",
      // Recommended : don't add more than 3 tags.
      experienceTags: [ "html,css,js", "3 months", "creativity"],
    },
    {
      experienceTitle: "Kwikseller - Intern",
      experienceDesc:
        "Expanded knowledge of creating rich interface.",
      experienceDuration: "10/04/2021 - 31/10/2021",
      experienceTags: ["entry", "6months", "full-time"],
    },
    {
      experienceTitle: "ITgen - Web Instructor ",
      experienceDesc:
        "Instructing Student also manage the company webpage.",
      experienceDuration: "31/12/2021 - 31/04/2022",
      experienceTags: ["full-time", "Frontend"],
    },
    {
      experienceTitle: "LASOP - Web Instructor & Developer ",
      experienceDesc:
        "Developing web pages and logic also managing classroom activities",
      experienceDuration: "current",
      experienceTags: ["full-time", "FullStack Developer"],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "i Am available 24/7",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: [
    {"data": "+2348166398746", "icon": "fa-solid fa-phone"},
    {"data": "jimohyusuf7832@yahoo.com" , "icon": "fa-solid fa-envelope"}
     ],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  experienceSection,
  contactSection,
  project
};
