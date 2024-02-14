import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Prateek Bansal',
  title: "Hi all, I'm Prateek",
  description:
    "A passionate software developer, your fellow coder, and a proud tech geek. Let's chat about all things tech and explore the latest innovations together. Keep scrolling to discover more about me.",
  resumeLink:
    'https://drive.google.com/file/d/1xa6r5uWF5XjVXifvjoP1frW98mDHo1fm/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'prateekb123',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '',
  linkedin: 'https://www.linkedin.com/in/prateek-bansal-a44829172',
  github: 'https://github.com/prateekb123',
  gmail: 'pbansal6@illinois.edu'
};

export const skillsSection: SkillsSectionType = {
  title: 'WHAT I DO',
  subTitle: 'SOFTWARE DEVELOPER WHO LOVES TECH',
  data: [
    {
      title: 'Full Stack Developer',
      lottieAnimationFile: './lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building RESTful APIs in SpringBoot & Django REST Framework'),
        emoji('⚡ Building responsive websites using React.js'),
        emoji('⚡ Working with Continuous Integration and Deployment (CI/CD) Pipelines'),
        emoji('⚡ Handling Data Validation, Sanitization, and Error Handling Effectively'),
        
      ],
      softwareSkills: [
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Springboot',
          iconifyTag: 'logos:spring',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'React',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'BootStrap',
          iconifyTag: 'logos:bootstrap',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: './lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Machine Learning',
      lottieAnimationFile: './lottie/skills/ML.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Developing Advanced Machine Learning Models using Scikit-Learn'
        ),
        emoji(
          '⚡ Ensemble Learning: Random Forests and Gradient Boosting'
        ),
        emoji(
          '⚡ Integrating Machine Learning Pipelines with CI/CD Processes'
        ),
        emoji('⚡ Data Preprocessing and Feature Engineering for Model Optimization'),
        emoji(
          "⚡ Proficient in Using sklearn's train_test_split Function for Data Partitioning"
        ),
        emoji(
          "⚡ Tuning Hyperparameters to Optimize Model Performance and Generalization"
        ),
      ],
      softwareSkills: [
        
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Python (Django/FastAPI)', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Java (SpringBoot)',
    progressPercentage: '80',
  },
  {
    Stack: 'AWS (EC2, ES, S3, SQS, Lambda, SNS)',
    progressPercentage: '85',
  },
  {
    Stack: 'Database (MySQL, Postgres, PigLatin)',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University Of Illinois, Urbana-Champaign',
    subHeader: 'Master of Science in Information Management',
    duration: 'Auguest 2022 - May 2024',
    desc: '',
    grade: 'GPA 3.92 / 4',
    companyLogo: './img/icons/common/uiuc.jpg',
    descBullets: [
    ],
  },
  {
    schoolName: 'Jaypee Institute of Information Technology',
    subHeader: 'Bachelors in Electrnoics and Communication',
    duration: 'September 2017 - April 2019',
    companyLogo: './img/icons/common/jiit.jpg',
    desc: '',
    grade: 'GPA 3.5 / 4',
    descBullets: [],
  },

  
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Country Financial',
    companyLogo: './img/icons/common/country.png',
    date: 'Jan 2024 – Present',
    desc: 'Developing an Angular/Ionic-Spring Boot Underwriting Digest POC, enhancing transaction tracking efficiency by 30%. Also leading a team to develop a Python automation script, streamlining vulnerability data processing, cutting manual effort by 80%',
  },
  {
    role: 'Software Engineer Intern II',
    company: 'Yahoo Inc.',
    companyLogo: './img/icons/common/yahoo.jpg',
    date: 'May 2023 – Aug 2023',
    desc: 'Created a machine learning feature for Yahoo Search, assessing question importance. Using a large language model, I crafted answers. Employing Pig Latin, PySpark, and Python with Apache Hadoop YARN, I extracted HDFS features. This yielded a powerful XGBoost model with 85.21% accuracy. This led to 20% cost savings by prioritizing answers for valuable questions from an 80+ million dataset.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'University of Illinois Urbana Champaign',
    companyLogo: './img/icons/common/Uiuc.png',
    date: 'Sep 2022 – May 2023',
    desc: 'Pioneered a React Django full-stack solution for underprivileged girls by integrating Twilio API within Django to automate calls. Optimized call strategies using React dashboard insights, driving a 25% surge in call response rates.',
  },
  {
    role: 'Software Engineer',
    company: 'Geniemode Global Pvt. Ltd.',
    companyLogo: './img/icons/common/Geniemode.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'As a backend developer for the GenieMode app, I crafted APIs for seamless website functionality. I introduced features that streamlined order processes, reduced vendor TAT by 20%, and improved new user onboarding, cutting queries by 30%. Leveraging event-driven notifications, I increased client acquisition by 25%. I enhanced system performance by boosting Restful API latency by 30%.',
  },
  {
    role: 'Software Engineer (Founding Engineer)',
    company: 'Growth-Spree',
    companyLogo: './img/icons/common/growthSpree.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: "As a Founding Engineer and Software Developer, I led the creation of a proof-of-concept email ID warming website. Solely architecting and developing it with React, Bootstrap, and Django, I achieved a 60% reputation boost for email IDs, validating the warming strategy's effectiveness. I also established version control using Bitbucket for streamlined team collaboration and code maintenance.",
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Football Scores Website for Database Performance Evaluation',
    companyLogo: './img/icons/common/gamepoint.png',
    desc: 'Engineered a fullstack website using Django, JavaScript and AWS EC2 to evaluate performance of Cassandra vs PostgreSQL databases',
    github: 'https://github.com/MandarParkar/DBA-Project',
  },
  {
    name: 'Monte Carlo Simulation to Derive Landing Distance for a Flight',
    companyLogo: './img/icons/common/plane.jpg',
    desc: ' Simulated emergency landing scenarios along flight paths to calculate landing distances. Through analysis, I confirmed that under dynamic flight conditions, the availability of accessible airports decreased by 15%, supporting the hypothesis.',
    github: 'https://github.com/prateekb123/monte-carlo-simulation',
  },
  {
    name: 'Error Detecting Pen',
    companyLogo: './img/icons/common/pen.jpg',
    desc: 'Partnering with a colleague, we developed a pen using gyroscope tech for real-time spell-checking of handwritten text. Employing a pre-trained IAM dataset model, we accurately predicted letters from the input, demonstrating our fusion of technology and practicality.',

  },
  {
    name: 'Smart Shopping System Using RFID',
    companyLogo: './img/icons/common/cart.jpg',
    desc: 'An IOT based, Bluetooth and RFID enabled system integrated with relational databases to manage the store inventory. Made to eliminate the dependency on sales representatives as well as reduce the T-A-T of a customer in a supermarket',

  },
  {
    name: 'Eye Controlled Wheelchair',
    companyLogo: './img/icons/common/chair.jpg',
    desc: 'Designed and implemented an Eye controlled wheelchair prototype by applying OpenCV modules and pre-trained classifiers in python',

  },
];

// option to hide or show the ContactUs component
// export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Prateek Bansal',
  description:
    'A passionate Software Developer.',
  author: 'Prateek Bansal',
  keywords: [
    'Prateek',
    'Prateek Bansal',
    '@prateekb123',
    'prateekb123',
    'Portfolio',
    'Prateek Portfolio',
    'Prateek Bansal Portfolio',
    'prateek-bansal-a44829172'
  ],
};
