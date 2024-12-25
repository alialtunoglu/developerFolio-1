/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ali Altunoğlu",
  title: "Hi all, I'm Ali Altunoğlu",
  subTitle: emoji(
    "I'm an ML/AI Engineer & Backend Developer from Turkey.I'm a fourth-year Software Engineering student with a strong passion for Computer Vision and Deep Learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gO1Yzn7vTcUvDcDUY8ghAk9ISiPdZB4L/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alialtunoglu",
  linkedin: "https://www.linkedin.com/in/alialtunoglu/",
  gmail: "alialtunoglu02@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO EXPLORE NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain colored"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "devicon-csharp-plain colored"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain colored"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain colored"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "devicon-c-plain colored"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "devicon-django-plain colored"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "devicon-flask-original colored"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "devicon-tensorflow-original colored"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain colored"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "devicon-html5-plain colored"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "devicon-css3-plain colored"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "devicon-bootstrap-plain colored"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain colored"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain colored"
    },
    {
      skillName: "SQLite",
      fontAwesomeClassname: "devicon-sqlite-plain colored"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "devicon-dot-net-plain colored"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "devicon-dotnetcore-plain colored"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain colored"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "devicon-spring-plain colored"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "devicon-opencv-plain colored"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karadeniz Technical University",
      logo: require("./assets/images/karadeniz.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2021 - Present",
      desc: "I am currently studying Software Engineering at Karadeniz Technical University. I have taken courses on algorithms, data structures, operating systems, and GPU-based parallel programming.",
      descBullets: [
        
      ]
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Artifical Intelligence", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI R&D Intern",
      company: "SolonPort",
      companylogo: require("./assets/images/solonport.png"),
      date: "September 2024 – Present",
      descBullets: [
        "Solon Port, I am working on optimizing container and ship placement using digital twin technology and genetic algorithms.",
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Sistek",
      companylogo: require("./assets/images/sistek.jpg"),
      date: "July 2024 – September 2024",
      descBullets: [
        "Developed and deployed machine learning models for material forecasting and fault code prediction optimizing model performance and accuracy.",
        "Integrated models into a web environment using Docker and Flask, enabling real-time predictions for client applications."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Turkish State Mint and Securty Printing",
      companylogo: require("./assets/images/darphane.png"),
      date: "July 2023 – August 2023",
      descBullets: ["Developed a web-based document management system using PHP and MySQL, integrating MERNIS for person verification and a request tracking system for certificate stamping."
        ,
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI Specialization Program ",
      subtitle: [
              "Selected as one of 120 participants in the exclusive Synchronous Group for the AI Specialization Program ",
              "Engaged in basic training on algorithms, data structures, operating systems, and GPU-based parallel programming.",
      ],
        
      image: require("./assets/images/sanayi.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Docker Workshop",
      subtitle:
        "Completed Certifcation from Docker Workshop.",
      image: require("./assets/images/techcareer.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Akbank Data Analysis Bootcamp",
      subtitle: "Completed Certifcation from Akbank Data Analysis Bootcamp",
      image: require("./assets/images/globalaihub.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+90-5535430543",
  email_address: "alialtunoglu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@alialtunoglu52", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
