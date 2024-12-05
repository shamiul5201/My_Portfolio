import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ibasThumbnailImg from "@/public/ibas-thumbnail-image.png";
import ibasChatroomImg from "@/public/ibas-chatroom.png";
import ibasDapImg from "@/public/ibas-dap.png";
import techforingThumnailImg from "@/public/techforing-thumnail-image.png";
import techforingSnapImg1 from "@/public/techforing-img-1.png";
import techforingSnapImg2 from "@/public/techforing-img-2.png";
import onlineFoodOrderingSystem from '@/public/online-food-ordering-system.jpg';

export const links = [
    {
        name: "Home",
        hash: "#home",
        url: "/#home",
    },
    {
        name: "About",
        hash: "#about",
        url: "/#about",
    },
    {
        name: "Projects",
        hash: "#projects",
        url: "/#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
        url: "/#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
        url: "/#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
        url: "/#contact",
    },
] as const;

export const experiencesData = [

    {
        company: "Flip Robo Technologies",
        title: "Data Science Intern",
        location: "Remote",
        description: "As a Data Science Intern, my responsibilities included learning various data science techniques and tools. I collaborated with senior data scientists to analyze data, propose solutions, and execute data analysis tasks. During my internship, I also implemented data cleaning, feature engineering, and predictive modeling for a customer segmentation project.",
        icon: React.createElement(CgWorkAlt),
        date: "January 2024 - Present",
    },

    {
        company: "Doer Services PLC",
        title: "Machine Learning Engineer",
        location: "Dhaka, Bangladesh",
        description:
        "I served as a Machine Learning Engineer with the responsibility to develop, train, and deploy advanced machine learning models, ensuring robust and scalable solutions. My stack includes TensorFlow, PyTorch, Scikit-Learn, Pandas, Numpy, Natural Language Processing (NLP), Computer Vision, Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), Docker, Kubernetes, and AWS.",
        icon: React.createElement(CgWorkAlt),
        date: "June 2022 - July 2023",
    },

    {
        company: "Dream Array",
        title: "Software Engineer",
        location: "Dhaka, Bangladesh",
        description:
            "Engineered innovative software solutions using Python and Django for dynamic web applications. Conducted code reviews, integrated systems, and optimized performance. Leveraged cloud services and containerization for scalable deployment. Ensured high quality with rigorous testing and debugging",
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2021 - May 2022",
    },

    {
        company: "Daffodil Software Ltd",
        title: "Software Engineer Intern",
        location: "Dhaka, Bangladesh",
        description:
        "As a Software Developer Intern, my responsibilities included learning various software development methodologies and tools. I collaborated with senior developers to analyze requirements, propose solutions, and execute coding tasks. During my internship, I also implemented key features such as user authentication and data visualization in a web application project.",
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2020 - August 2020",
    },


] as const;

type ProjectFeaturesDetail = {
    [key: string]: {
        name: string;
        description: string;
        image: string[];
        video: string;
    };
};

export const projectsData = [
    {
        title: "iBAS++ Chat Operating System",
        slug: "ibas-chat-operating-system",
        hostedLink: "http://103.209.40.15:8080/",
        githubRepoLink: "",
        projectThumbnailBrief:
        // main page
            "I worked as a full-stack engineer on this government project for over a year. User can chat with Help Desk Officers to resolve queries.",
        projectBrief: 
        // details page
        "iBAS++ Chat Operating System is a cutting-edge solution to mitiagte the pressure from the iBAS++ staff. Integrated Budget and Accounting System (iBAS++) is the Integrated Financial Management Information System (IFMIS) of the Government of Bangladesh (GoB). Government officials from over the country contact iBAS++ for any kind of financial queries. Handling such massive amount of queries become difficult for the internal staffs. Thus the organization decided to circulate a tender for a software which will have an AI powered chatbot to provide relevant answers to those queries and for any unknown queries, the chatbot will redirect the user to an available Help Desk Officer. After joining my last company, I was given the task to build such system & got tagged with a team of ML engineers. Playing a pivotal role building this software, I got an exposure to a deep knowledge of asynchronous programming as part of my research. This is a solution where the ML technology meets the asynchronous programming in the Government sector for the first time. With heavy usage of Django Channels and JavaScript websocket, we built a solution where a Rasa chatbot tries to provide answers to the queries. This is an FAQ based chatbot, built by the ML engineers. I have built the software solution which provides chatting features, asynchronous message requests routing based on Location & Priority based algorithm, Data Analytics Panel for adminstrators. WIth this solution iBAS++ is now able to handle different client queries by using the chatbot & the internal staffs only handle issues with unknown queries thorugh chatting with the users in a chatroom. I have also built another micro-service where the admin can access to the Data Analytics Panel to manually create new queries as well select chatbot's fall back queries, then train the chatbot with those queries. This another service, I've built using the Django Rest Framework to serve the APIs & Angular 16 as the frontend. In this service, beside building the CRUD APIs, I have also integrated real time progress of AI model training or clustering into this service. iBAS++ has decided for a pilot implementation of this solution into their exisiting system. I have also worked for the deployment procedure for the provisioned Linux servers.",
        tags: ["Django", "Django Channels", "PostgreSQL", "Angular", "Websocket", "Rasa", "Linux"],
        keyFeatures: ["Authentication & Authorization from chatbot.", "Travel Allowance and Daily Allowance Module in chatbot.", "Real time messaging platform for users & help desk officers.", "Collect human feedback from user in the chatroom on help desk officers' resolution.", "Four types of reply modes in help desk officer end.", "Data analytics panel of the admins to train chatbot model in real time."],
        benefits: `
        The iBAS++ Chat Operating System has drastically took a lot of burder from both the users & the internal staffs of iBAS++. This solution does not only mitigate the scarcity of query resolution of the users but it also gives the staffs a leaverage to be more organized handling different queries of the government officials. Most of the queries are now handled from the chatbot ends, but if any new issue gets arised, then there will be help desk officers to provide solutions to those issues. The AI model training automation pipeline also decouples the organization from the dependency from the developers, the iBAS++ staff can train the chatbot model & view real time training progress using this system. This is the first solution we have developed where the Government of Bangladesh has experienced the facility of artificial intelligence & asynchronous programming at the same time.`,
        thumbnailImageUrl: ibasThumbnailImg,
        projectSnaps: [ibasChatroomImg, ibasDapImg],
        projectFeaturesDetail: {
            feature1: {
                name: "Authentication & Authorization (Login Page)",
                description: "User & help desk officer (HDO) have different login page. If any HDO accidently wants to login into the system using the user's login page, then he/she will be redirected to the HDO login page witha toast message indicating the issue. This functionality is also defined for the users of the system.",
                image: ["img1", "img2", "img3"],
                video: 'MrwPabW52JQ',
            },
            feature2: {
                name: "Authentication & Authorization (From Chatbot)",
                description: "iBAS++ users can make queries & get answers without logging into the system. A chatbot implemented into the system's user login page serves this functionality. If the chatbot gets any unknown query, then it requests the user to have his/her phone number to check if there is any account associated with that phone number. If an account exist with the phone number then the chatbot will prompt the user to provide correct credentials to authenticate the user to the system. After the successful authentication, the user is immediately redirected to the chatroom creating a new message request to an available HDO's support request panel.",
                image: ["img1", "img2", "img3", "img4"],
                video: 'VKhhXiowIJY',
            },
            feature3: {
                name: "Build & Integrate TA/DA Module in Chatbot UI",
                description: "Users (Goverment officials) can calculate their travel allowance/daily allowance by using the chatbot regardless of being an authenticated/unauthenticated user of the system. Sinces the chatbot is built using the Rasa framework by the AI engineers, I have built the TA/DA module using vanilla JavaScript & integrate into the chatbot UI to avoid complexity overhead of the ML model. When the model detects questions related to TA/DA module, it sends a specific dispatched message to enable the TA/DA module. I defined the TA/DA modules functionality to be enabled & disabled using the dispathed message from the chatbot.",
                image: ["img1", "img2", "img3", "img4", "img5"],
                video: 'p0951MCsUQ8',
            },
            feature4: {
                name: "Real Time Message Requests Routing to HDO",
                description: "The core purpose of the system is to handle different queries using the chatbot. But the chatbot has it's own limitations since it's an FAQ based chatbot. When the chatbot is unable to anwer a query, it prompts the user to connect to an HDO. This prompt lasts for 10 seconds, within this time the user has to decide whether to connect or not. For connection, the user immediately redirects to a chatroom, on the other hand, a message request appears in an available HDO request panel. In this entire workflow I have heavily used Django channels & JavaScript websocket for its asynchronous functionality.",
                image: ["img1", "img2"],
                video: 'mmMFHU4XnjU',
            },
            feature5: {
                name: "Location & Priority Based Message Request Routing to HDO",
                description: "Any new message request routes to an available HDO's support request panel immediately. This routing follows the location & priority based algorithms which I have developed so that the ssytem can select an appropriate HDO. First the location based algorithm will try to match if there is any available HDO whose organization matches the user's organization. Then the algorithm will search in the broader area gradually (location, then district & lastly division) if there is no available HDO belongs to the same organization. If there is no such HDO whose locations doesn't match with the user's location then the system will try to route the new request to a general HDO's support request panel, otherwise notify the user about no available HDO in the system. In the priority based algorithm, an HDO is allowed to handle five support requests at max at the same time, he/she will not get any new support requets until any existing request gets resolved/dismissed. Meanwhile, the new request will be routed to such HDO who is handling less than five support requests.",
                image: ["img1", "img2"],
                video: '5zvbZcrUtew',
            },
            feature6: {
                name: "1-to-1 Messaging Platform for User & HDO",
                description: `The user of the system gets redirected to a real time messaging platform where the issue is mostly resolved by an HDO. In this platform, the HDO has three options: "Issue Details", "Resolve Issue" & "Dismiss Issue". From them, the HDO can mark the issue as resolved/dismissed, which leads to notify the user about the issue status & automatically redirect him/her to a landing page. On the other side, the user have only two options: "Issue Details" & "Dismiss Chat". The user can cancel the chat by the "Dismiss Chat" option. In this scenario, the HDO won't get redirected to her/his support request panel, instead, she/he will be notified with a chat cancellation message including a "close chat" button. By clicking the close chat button, the HDO will get back to the support request panel followed by closing the chat window.`,
                image: ["img1"],
                video: 'm4H-aYL36nk',
            },
            feature7: {
                name: "Fetch Previous Messaging Between User & Chatbot in the Chatroom",
                description: "Every message between the chatbot & the user is stored into a DB table. So that when that chatbot is unable to provide an answer to a query, both the user & the HDO can view what conversation happened between the user & the chatbot previously inside the chatroom.",
                image: ["img1", "img2", "img3", "img4", "img5", "img6"],
                video: '',
            },
            feature8: {
                name: "4 Types of Reply Modes in HDO end inside Chatroom",
                description: `I've built the human feedback functionality where the user can give feedback on the HDO's resolution. There are 4 types of reply modes available for an HDO in the chatroom as a part of human feedback collection: "Single Line Reply Mode", "Query Reply Mode", "Multi Line Reply Mode", " Conversational Reply Mode". The feedback collection functionality behaves differently based on which reply mode is selected on the HDO end in the chatroom.`,
                image: ["img1", "img2", "img3", "img4"],
                video: '49N4y_R9aQo',
            },
            feature9: {
                name: "Collect Feedbacks from User on HDO's Reply",
                description: `Except the "Query Mode", the user gets feedback in real time to any kind of reply made by the HDO. The feedback collection will later be used for further data processing to automatically generate more qualified queries in data analytics panel. These queries will later be used to train the chatbot.`,
                image: ["img1", "img2"],
                video: '',
            },
            feature10: {
                name: "Build Backend CRUD APIs & Angular Frontend For Data Analytics Panel",
                description: "I have built a separate service as Data Analytics Panel for admins of the system. The CRUD APIs along with the frontend uses the Django Rest Framework & Angular 16. In this initial version of the system, the admin can create new queries manually or can choose suggestive Q/A. Later the admin can train the currently running Rasa chatbot with those queries.",
                image: ["img1", "img2"],
                video: 'mHKvF5msB9o',
            },
            feature11: {
                name: "Show Real Time Data Clustering Loading Process in DAP",
                description: `All the new queries are stored in excelt sheet as augmented questions. The AI engineers build a clustering model to generate base form of the queries from those excel sheets. There is an execution button in the "Suggestive Q/A" tab, where I have built the real time loading process of the clustering model.`,
                image: ["img1", "img2"],
                video: '',
            },
            feature12: {
                name: "Show Real Time Model Training Progress Bar in DAP",
                description: "The new queries gathered from suggestive Q/A or by manually created by the system admin, all of them will be first stored inside the final dataset Q/A. From there, the admin can train those new queries with answers to the chatbot. The AI engineers have created the training automation pipelien and I have built the real time training progress bar in the final dataset tab. After the training completion, the chatbot gets capable of answering to those queries.",
                image: ["img1", "img2"],
                video: '',
            },
        } as ProjectFeaturesDetail,
    },
    {
        title: "TechForing Website",
        slug: "techforing-website",
        hostedLink: "https://www.techforing.com/",
        githubRepoLink: "",
        projectThumbnailBrief:
            "I've built the CI/CD pipeline using Jenkins & established continuous deployment of various projects into AWS EC2.",
        projectBrief: "Shifted the exisiting blog management system from WordPress to the exisiting TechForing business website without breaking the link of different blogs since they were backlinked to different prestigious articles. The TechForing website is the paltform to increase awareness on cyber security & cyber menace through different articles. Besides, it also provides subscription and selling of cyber security courses & services. As an enrty point of the monetization funnel, this web application is integrated with their HRMS & LMS. TechForing Ltd is known for providing paramount service in the Cyber Security to all size & shapes of businesses across the world. Thus this website plays a pivotal role to the business, I have ensured that the viewers can be converted to potential customers by having seamless experience when visited this website.",
        tags: ["Django", "DRF", "Jenkins", "AWS EC2", "AWS Route 53", "AWS RDS", "Cloudflare", "Celery"],
        keyFeatures: ["Different blogging system for individuals & organizations", "Purchase & subscribe to different cyber security courses", "Purchase & subscribe to services to avoid different cyber threats"],
        benefits: "",
        thumbnailImageUrl: techforingThumnailImg,
        projectSnaps: [techforingSnapImg1, techforingSnapImg2],
        projectFeaturesDetail: {
            feature1: {
                name: "Migrated the existing blog system from WordPress to Django",
                description: "Previously the articles were served using a WrodPress system. The company wants to change the migrate the entire system to their existing website built on Django framework. My task was to build a submodule to the exisitng website so that the entire blogging system can be moved there from WordPress & the provide rich editorial support to the content writers team.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature2: {
                name: "Ensures all the articles' backlinks remain the same",
                description: "I have to ensure that no previous blog links get broken due to the migration since they are backlinked to different prestigious articles. By the usages of Cloudflare & Django sub domain I safeguarded the links so that any views will be redirected to the django blogs instead of experience broken links.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature3: {
                name: "Build the CI/CD pipelines using Jenkins & deployed to AWS EC2",
                description: "Previously the developers used to release the new version of the applications by following a tedious amount of works. They have to deploy the project to AWS EC2 servers and maintain the infrastructre manually to make the new version live. The company has to pay an enormous amount of overhead cost & time for this manual labor. Thus I have initially established a CI/CD pipeline using Jenkins for the TechForing website. It remarkably reduced the server downtime as well as provided other developers to make seamless release of new features of the website. After successfully establishing CI/CD pipeline for this website, I was appointed to build pipelines for other applications majorly build upon Django, JavaScript & PHP.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
        } as ProjectFeaturesDetail,
    },
    {
        title: "Multi Vendor Food Ordering System",
        slug: "multi-vendor-food-ordering-system",
        hostedLink: "",
        githubRepoLink: "https://github.com/Ashraf840/multi-vendor-food-ordering-system.git",
        projectThumbnailBrief:
            "This was my university final year project. I made the reasearch on mitigating business losses of fine dine by building a more customer-centric system ensuring broader scope of engagement.",
        projectBrief: "The research-based project proposes developing a multi-vendor food ordering system for fine dining businesses to recover from COVID-19 losses. It aims to understand the challenges faced by these establishments and design a user-friendly solution. The methodology involves gathering insights through interviews, surveys, and market analysis. The software development process will be iterative, focusing on supporting multiple vendors and enhancing user experience. Evaluation metrics include order processing time, customer satisfaction, and revenue growth. The project seeks to empower fine dining establishments to adapt to changing consumer behaviors and enhance operational efficiency post-pandemic.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        keyFeatures: ["B2B Vendor (Restaurant) Module", "B2C Customer Module", "User can order foods by surfing different available restaurants in the system", "Restaurant staffs required approval from their respective restaurant admins to access into to the system", "Restaurant admin can suspend individual staff from accessing into the system", "Separate blogging system for the food critics", "User can view, comments, like & provide ratings to food dishes", "User can view the progress of his/her food in real time through the system", "System staff can change the stages of ordered food in real time", `User cannot cancel his/her order once the food gets into the "Baking" stage in restaurant kitchen`, `Integrated a native payment gateway (sandbox) called "SSLCOMMERZ" to purchase cart orders, including "Cash On Delivery" option`],
        benefits: `
        The envisioned multi-vendor food ordering system presents a myriad of advantages for fine dining establishments striving to bounce back from COVID-19 setbacks. Delving into the unique hurdles they encounter, the project endeavors to craft a user-friendly solution finely attuned to their specific requirements. Through an iterative approach to software development, the system places a premium on accommodating multiple vendors and refining the user experience. Ultimately, this initiative empowers fine dining venues to adeptly respond to shifting consumer trends while bolstering operational effectiveness, fostering their resurgence and sustained prosperity in the post-pandemic era.`,
        thumbnailImageUrl: onlineFoodOrderingSystem,
        projectSnaps: [onlineFoodOrderingSystem],
        projectFeaturesDetail: {
            feature1: {
                name: "B2B Vendor (Restaurant) Module",
                description: "By using this module different restaurant owners can register their restaurant account into this system. Two separate authentication systems is provided for the restaurant owners & their staffs. The owners can create restaurant staff accounts, create food dishes they want to display, create add-ons for individual dishes as well as reply to the comments on dishes in the blogging submodule  built for food critics. Get access to different analytics related to their business growth & revenue.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature2: {
                name: "B2C Customer Module",
                description: "General users can register accounts into the system & immediately get access to the restaurants & the food dishes offered by them. Users can order food among a wide range of collection, provide reviews & ratings to the food dishes. Users will also be able to view the progress of their order delivery from kitchen to their door step in real time.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature3: {
                name: "User can order foods from different restaurants",
                description: "Users can add food dishes to their carts by selecting them from a wide range of restaurants. She/he can remove any food from the cart which she/he doesn't want to purchase on that time. Afterwards, she/he can proceed for purchasing process.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature4: {
                name: "Restaurant staffs are required restaurant admin's approval to access into to the system",
                description: "A staff from a restaurant cannot create their own account, it's the privilege of a restaurant owner who has an account in the system against the restaurant. A unique code gets sent from the system to the staff's email after the restaurant owner creates his/her account. This unique code is used for email verification & afterward the restaurant staff can access to his/her account.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature5: {
                name: "Restaurant admin can suspend individual staff from accessing into the system",
                description: "A restaurant admin can suspend the account of a staff specific to that restaurant. In such scenario, the staff won't be able to access into the system with his/her account credentials. The admin can revoke the suspension order to lead the staff accessing into the system again.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature6: {
                name: "Separate blogging system for the food critics",
                description: "Both general users, restaruant staffs & admins can access to the blogging platform of this system to discuss about different food dishes & services of restaurants. This platform is built specifically for discussion of the food critics so that the restaurants & the users will be able to aware of different matters related to the foods as well as the restaurant services. This helps to make more engagement between the fine diners aiding increment in ROI for the restaurants in the long run.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature7: {
                name: "User can view, comments, like & provide ratings to food dishes",
                description: "The users can view reviews and rating of every dishes while surfing the collection of foods offered by a restaurant. I have implemented the weighted algorithm for the rating system of food. The view counts are tracked & stored into the database.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature8: {
                name: "User can view the progress of ordered food in real time through the system",
                description: "I have implemented Django channels & JavaScript websocket technology to let the user view the progress of their order in real time. Both a progress bar & text notification appreas appears into the order status page.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature9: {
                name: "System staff can change the stages of ordered food in real time",
                description: `Restaurant staffs can change the stages of ordered food from their panel which reflects into the customer's ordered food detail page. There are 4 stages: "Order Received by Restaurant", "Baking", "Baked", "Out for Delivery", "Order Received by Customer"`,
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature10: {
                name: `User cannot cancel an order once the food gets into the "Baking" stage`,
                description: `A user cannot cancel an order once the food gets into the "Baking" stage in restaurant kitchen. This immedately negate the cancellation functionality in the user end when a staff changes the order stage from "Order Received by Restaurant" to "Baking".`,
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature11: {
                name: "Integrated a payment gateway system",
                description: `I have integrated a native payment gateway system known as "SSLCOMMERZ", thus a user can seamlessly pay for the food she/he ordered using this system. Another option available for purchasing food using this system is called "Cash on Delivery".`,
                image: ["img1", "img2", "img3"],
                video: "",
            },
        } as ProjectFeaturesDetail,
    },
] as const;

export const skillsData = [

    "Python",
    "Django",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Oracle",
    "MySQL",
    "SQL",
    "Git",
    'SciPy',
    'Scikit-Learn',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'DataFrames',
    'Series',
    'Data Aggregation',
    'Merging and Joining Data',
    'Web Scraping',
    "Data Wrangling",
    "Data Cleaning",
    "Numpy",
    "Pandas",
    "Data Visualization",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Tableau",
    'Hypothesis Testing',
    'Statistical Modeling',
    'Regression Analysis',
    'TensorFlow',
    'PyTorch',
    'Scikit-Learn',
    'Keras',
    'Supervised Learning',
    'Unsupervised Learning',
    'Neural Networks',
    'Computer Vision',
    'Image Classification', 
    'Object Detection', 
    'Image Segmentation',
    'Model Evaluation',
    'Feature Engineering',  

] as const;