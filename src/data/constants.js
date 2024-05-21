import Img from "../images/microdot.tech.png";
import animation from "../images/3d_animation.png";
import chat_web from "../images/chat_website.png";
import education_web from "../images/education_web.png";
import netflix from "../images/netflix.png";
import new_portfolio from "../images/new_portfolio.png";
import old_portfolio from "../images/old_portfolio.png";
import online_movie from "../images/online_movie.png";
import payment from "../images/payment.png";
import robot from "../images/robot.png";
import weather from "../images/weather_web.png";
import todo from "../images/todo_list.png";
import wedding from "../images/wedding_event.png";
import gradient_css from "../images/gradient_genrate.png";
import news from "../images/news_website.png";
import cv from "../images/news_website.png";

export const Bio = {
  name: "Prakash Kushwaha",
  roles: [
    "Full Stack Web Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Android Developer",
  ],
  description:
    "I'm Prakash, a seasoned full-stack developer passionate about crafting innovative web applications. With expertise in JavaScript, including React.js and Node.js, along with proficiency in HTML5, CSS3, and modern JS, I specialize in building seamless user experiences.My projects span diverse areas, from e-commerce platforms to real-time web apps. Notable achievements include a scalable e-commerce platform using the MERN stack, integrating payment gateways for smooth transactions. I've also developed a real-time chat website using MERN and Socket.io for live communication.My passion drives me to solve complex problems and deliver impactful solutions. I excel in dynamic environments, leveraging technology to exceed expectations and create meaningful digital experiences.",
  resume:
    "https://drive.google.com/file/d/1zUH0cy_b5zHAnx6QAEgBHDicNpjcK51W/view",

  github: "https://github.com/Victry0099",
  linkedin: "https://www.linkedin.com/in/prakash0099/",
  insta: "https://www.instagram.com/prakash____cs",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image: "https://shubhampatel12499.github.io/images/express.png",
      },

      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },

      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tenserflow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Google Colab",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0d6285d7b0921a8d721dd732ea44eef4e384e3a1/d8fbb/images/blog/colab.png",
      },
      {
        name: "SciKit learn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },

      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Img,
    role: "Full Stack Developer (MERN) Intern",
    company: "Microdot Tech Aspire Solution",
    date: "January 2024 - Present",
    desc: "As a Full Stack Developer proficient in these technologies, I have the skills to handle front-end development (with ReactJS, Material UI, HTML5, CSS3, and JavaScript), back-end development (with NodeJs, Express, MongoDB, Socket.io), integrating payment gateways, utilizing Tailwind CSS for styling, and leveraging Firebase for additional services like authentication and database management. This breadth of expertise allows I to build end-to-end solutions for various web applications and services.",
    skills: [
      "JavaScript",
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MongoDB",
      "Express",
      "Axios",
      "Payment Getway",
      "tailwind CSS",
      "Socket.IO",
      "Firebase",
    ],
    doc: "",
  },

  {
    id: 1,
    img: "https://logosmarcas.net/wp-content/uploads/2020/09/IBM-Simbolo.png",
    role: "Artificial Intelligence and Machine Learning",
    company: "IBM",
    date: " Sep 2023 - Jan 2024",
    desc: "Artificial Intelligence (AI) simulates human intelligence in machines for tasks like learning and decision-making. Machine Learning (ML), a subset of AI, focuses on algorithms that enable computers to learn from data. AI finds applications in healthcare, finance,  customer service, and entertainment. Challenges include data privacy, bias in algorithms, and ethical concerns. Future trends include deep learning.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Sci-kit learn",
      "Chrome",
      "Speech Recognition",
      "pyttsx3",
      "PyTorch",
    ],
    doc: "",
  },

  {
    id: 3,
    img: "https://e7.pngegg.com/pngimages/969/134/png-clipart-meta-logo-social-media-icons.png",
    role: "Android Developer",
    company: "Facebook Meta Staff",
    date: "Jan 2024 - Present",
    desc: "Android Development application highlights my experience in Android app development with skills in React Native, Android SDK, and tools like Android Studio and Git. I showcase projects showcasing UI/UX design, API integration, and performance optimization, along with achievements such as published apps and certifications. My passion for creating user-friendly apps and continuous learning drives my future goals in contributing to impactful projects and advancing in Android development roles",
    skills: [
      "React Native",
      "Mobile Application Development",
      "Android Studio",
      "XML",
      "Jest",
      "Redux",
      "MongoDB",
      "Axios",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://www.excelbee.com/images/university/aks-university-satna-logo.png",
    school: "AKS University, Satna (Madhya Pradesh) ",
    date: " july 2022 - May 2024",
    grade: "6.62 CGPA",
    desc: "I am a passionate and results-oriented MCA student with a strong foundation in computer science principles. My particular interest lies in web development, mobile app development, data science This portfolio showcases my skills and experience as a Full Stack Developer. I'm proficient in the MERN stack (React.js, Redux, Node.js, Express, MongoDB, Socket.io) and adept at working in various software development environments.",
    degree: "Post Graduation- Master of Computer Application",
  },
  {
    id: 1,
    img: "https://pgcsatna.com/website/logo.jpg",
    school: "GOVT PG college, Satna (Madhya Pradesh) ",
    date: "Apr 2018 - Apr 2021",
    grade: "58.4%",
    desc: "I am a dedicated BSc Mathematics student with a strong analytical mind and a fascination for the beauty and logic of numbers. This portfolio showcases my mathematical abilities through a curated selection of projects that demonstrate my proficiency in various areas of mathematics, including calculus, linear algebra, statistics",
    degree: "Under Graduation- Bsc, in Mathmatics",
  },
  {
    id: 2,
    img: "https://modelhssrewa.org.in/images/mp-board-logo.png",
    school: "GOVT Higher Secondry School Ghoordang, Satna",
    date: "july 2016 - Apr 2017",
    grade: "78.4%",
    desc: "I completed my class 12 education at Science in Mathmatics, Satna, where I studied Science with Mathmatics.",
    degree: "MP Board(XII), Science with Computer",
  },
  {
    id: 3,
    img: "https://www.educationnews.shiksha/wp-content/uploads/2021/02/mp-board.jpg",
    school: "Savitri Shiksha Sadan, Satna",
    date: "july 2014 - Apr 2015",
    grade: "80.4%",
    desc: "I completed my class 10 education at Science in Mathmatics, Satna, where I studied Science with Mathmatics.",
    degree: "MP Board(X), All Subject",
  },
];

export const projects = [
  {
    id: 1,
    title: "3d Aninmation",
    date: "Jan 2024",
    description:
      "Creating 3D animations using CSS and HTML is an exciting way to add depth and interactivity to my web projects. CSS provides various properties and functions that allow you to transform elements in 3D space",
    image: animation,
    tags: ["HTML5", "CSS3"],
    category: "web app",
    github: "https://github.com/Victry0099/3DAnimation",
    webapp: "",
  },
  {
    id: 2,
    title: "Chat Website",
    date: "May 2024 - present",
    description:
      "Funfusion is a modern web application built with React, utilizing Vite for fast builds and development, and incorporating various libraries for UI components (Material-UI), 3D graphics (Three.js with React Three Fiber), animations (Framer Motion), and utility functions (random, typewriter-effect). Testing is supported through React Testing Library, and styling is managed using CSS-in-JS libraries like Emotion and Styled-Components. This setup ensures a robust, fast, and scalable development environment for creating interactive web applications",
    image: chat_web,
    tags: [
      "Framer Motion",
      "Socket.IO",
      "Material-UI",
      "Random",
      "Three.js",
      "React-icons",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/Victry0099/mern-real-chat_Website",
    webapp: "",
  },
  {
    id: 3,
    title: "Eduacation Website",
    date: "Feb 2024",
    description:
      "An educational website uses HTML for structure (header, main sections like courses and about, footer), CSS for styling (typography, layout, colors, responsive design), and JavaScript for interactivity (navigation, course filtering, form validation, animations). It provides an engaging, user-friendly experience for learning and information access",
    image: education_web,
    tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Auth"],
    category: "web app",
    github: "",
    webapp: "",
    member: [
      {
        name: "",
        img: "",
        linkedin: "",
        github: "",
      },
      {
        name: "",
        img: "",
        linkedin: "",
        github: "",
      },
    ],
  },
  {
    id: 4,
    title: "Netflix",
    date: "Feb 2024",
    description:
      "A Netflix first page clone using HTML for structure (header, hero, content rows, footer), CSS for styling (dark theme, responsive layout, animations), and JavaScript for interactivity (navigation, carousels, modals), mirroring Netflix’s engaging, user-friendly interface",
    image: netflix,
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "web app",
    github: "https://github.com/Victry0099/Netflix_clone_landing_Page",
    webapp: "",
  },
  {
    id: 5,
    title: "Brain Tumor Detection",
    date: "Jan 2023 - Mar 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image:
      "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
  {
    id: 3,
    title: "Buckoid",
    date: "Dec 2021 - Apr 2022",
    description:
      "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
    image:
      "https://camo.githubusercontent.com/3ad28aa710d18525f1fc87de056ed53c706d09979589bfd5a773df36653bad38/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
    tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
    category: "android app",
    github: "https://github.com/rishavchanda/Buckoid-Android-App",
    webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  },
  {
    id: 10,
    title: "Job Finding App",
    date: "Jun 2023 - Jul 2023",
    description:
      "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
    image:
      "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
    tags: ["React Native", "JavaScript", "Axios"],
    category: "android app",
    github: "https://github.com/rishavchanda/Job-finder-App",
    webapp: "https://github.com/rishavchanda/Job-finder-App",
  },
  {
    id: 4,
    title: "Whatsapp Clone",
    date: "Jul 2021",
    description:
      "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
    tags: ["React Js", "Firebase", "Firestore", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
    webapp: "https://whatsapp-clone-rishav.web.app",
  },
  {
    id: 5,
    title: "Todo Web App",
    date: "Jun 2021",
    description:
      " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
    image:
      "https://camo.githubusercontent.com/84ac6ab6f378348ef28d8184062b7e9e3511a1252ae3966eaa49e8e998f732a7/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
    tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Todo-Web-App",
    webapp: "https://rishav-react-todo.netlify.app/",
  },
  {
    id: 6,
    title: "Breaking Bad",
    date: "Jun 2021",
    description:
      "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
    image:
      "https://camo.githubusercontent.com/937774368308a82419f53dd6eeb4a8675780e119636488b4e3cfe5d34859a72a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
    tags: ["React Js", "API", "Axios", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Breaking-Bad",
    webapp: "https://breaking-bad-webapp.netlify.app",
  },
  {
    id: 7,
    title: "Quiz App",
    date: "Dec 2020 - Jan 2021",
    description:
      "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
    tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
    category: "android app",
    github: "https://github.com/rishavchanda/Quiz-Earn",
    webapp: "https://github.com/rishavchanda/Quiz-Earn",
  },
  {
    id: 8,
    title: "Face Recognition",
    date: "Jan 2021",
    description:
      "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image:
      "https://dontrepeatyourself.org/media/face-recognition-with-python-dlib-and-deep-learning_cezKZBj.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  },
];
