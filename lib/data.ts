import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import multiclass1 from '@/public/multi_class_1.png';
import multiclass2 from '@/public/multi_class_2.png';
import seg1 from '@/public/seg_1.png';
import seg2 from '@/public/seg_2.png';
import footballTracker from '@/public/object_detection.png';
import selfieFeature from "@/public/selfie_feature.png";
import bodyPoint from "@/public/body_points.png";
import workflow from "@/public/workflow.png";
import docInput from "@/public/input.jpg"
import docOutput from "@/public/output.jpg"

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
        company: "Upwork, Fiverr, PeoplePerHour",
        title: "AI Software Engineer",
        location: "Greater London, England, United Kingdom",
        description:
            "As a Computer Vision and AI Engineer, I am committed to delivering innovative, reliable, and impactful solutions that meet the evolving demands of AI and computer vision. I design and implement cutting-edge solutions in areas like image classification, segmentation, object detection, face recognition, and OCR. I leverage advanced tools such as TensorFlow, PyTorch, and OpenCV to build scalable and efficient models.\n\n" +
            "• Deep Learning: CNNs, GANs, and advanced neural network architectures.\n" +
            "• Computer Vision: Object tracking, MediaPipe, and real-time application development.\n" +
            "• AI Integration: Tailored solutions for automation and intelligent systems.\n\n" +
            "Demo projects showcasing my expertise are available on GitHub.",
        icon: React.createElement(CgWorkAlt),
        date: "October 2024 - Present",
    },
    {
        company: "Flip Robo Technologies LLC",
        title: "Data Science Intern",
        location: "Remote",
        description:
            "During my internship at Flip Robo Technologies, I had the opportunity to apply and expand my knowledge of data science and machine learning. My tasks included:\n\n" +
            "- Assisting in data collection, cleaning, and preprocessing to ensure the quality of datasets used in machine learning models.\n" +
            "- Working with machine learning algorithms to build predictive models and evaluate their performance.\n" +
            "- Analyzing data trends and generating insights to support business decisions.",
        icon: React.createElement(CgWorkAlt),
        date: "January 2024 - July 2024",
    },
    {
        company: "Agrani Doer Banking",
        title: "Software Engineer",
        location: "Motijheel Thana, Dhaka, Bangladesh",
        description:
            "At Agroni Doer Services, I worked on Beemabox, a banking app designed to make financial services easier for users. My work included:\n\n" +
            "- Building a 48-form page application for Beema, making it simple and efficient for users to fill out.\n" +
            "- Working on the UI/UX to ensure it looked good and was easy to use.\n" +
            "- Writing clean and clear code using Flutter and Dart to make the app run smoothly.\n" +
            "- Resolved critical bugs and optimized the app's performance, reducing load times by 30% and improving overall speed by 25%.\n" +
            "- Adding features to keep user data safe and secure.\n" +
            "- Working closely with my team to make the app as reliable and helpful as possible.",
        icon: React.createElement(CgWorkAlt),
        date: "March 2021 - July 2022",
    },
    {
        company: "Dream Array",
        title: "Software Engineer",
        location: "Dhaka, Bangladesh",
        description:
            "Here I contributed to the development of a courier application that streamlined package delivery and logistics with a team, where we:\n\n" +
            "- Used Django to build the backend for managing data and handling requests.\n" +
            "- Developed the mobile app with Flutter, making it easy to use and reliable.\n" +
            "- Added features like courier tracking, order management, and notifications to improve the app's functionality.\n" +
            "- Tested the app to make sure everything worked well on different devices.\n" +
            "- Collaborated with team members to complete the project and deliver it on time.",
        icon: React.createElement(CgWorkAlt),
        date: "June 2021 - December 2021",
    },
] as const;


// export const experiencesData = [

//     {
//         company: "Flip Robo Technologies",
//         title: "Data Science Intern",
//         location: "Remote",
//         description: "As a Data Science Intern, my responsibilities included learning various data science techniques and tools. I collaborated with senior data scientists to analyze data, propose solutions, and execute data analysis tasks. During my internship, I also implemented data cleaning, feature engineering, and predictive modeling for a customer segmentation project.",
//         icon: React.createElement(CgWorkAlt),
//         date: "January 2024 - Present",
//     },

//     {
//         company: "Doer Services PLC",
//         title: "Machine Learning Engineer",
//         location: "Dhaka, Bangladesh",
//         description:
//         "I served as a Machine Learning Engineer with the responsibility to develop, train, and deploy advanced machine learning models, ensuring robust and scalable solutions. My stack includes TensorFlow, PyTorch, Scikit-Learn, Pandas, Numpy, Natural Language Processing (NLP), Computer Vision, Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), Docker, Kubernetes, and AWS.",
//         icon: React.createElement(CgWorkAlt),
//         date: "June 2022 - July 2023",
//     },

//     {
//         company: "Dream Array",
//         title: "Software Engineer",
//         location: "Dhaka, Bangladesh",
//         description:
//             "Engineered innovative software solutions using Python and Django for dynamic web applications. Conducted code reviews, integrated systems, and optimized performance. Leveraged cloud services and containerization for scalable deployment. Ensured high quality with rigorous testing and debugging",
//         icon: React.createElement(CgWorkAlt),
//         date: "Feb 2021 - May 2022",
//     },

//     {
//         company: "Daffodil Software Ltd",
//         title: "Software Engineer Intern",
//         location: "Dhaka, Bangladesh",
//         description:
//         "As a Software Developer Intern, my responsibilities included learning various software development methodologies and tools. I collaborated with senior developers to analyze requirements, propose solutions, and execute coding tasks. During my internship, I also implemented key features such as user authentication and data visualization in a web application project.",
//         icon: React.createElement(CgWorkAlt),
//         date: "Jan 2020 - August 2020",
//     },


// ] as const;

type ProjectFeaturesDetail = {
    [key: string]: {
        name: string;
        description: string;
        image: string[];
        video: string;
    };
};





export const projectsData = [

    // 1st project
    {
        title: "MultiClass Sports Classifier",
        slug: "multiclass-sports-classifier",
        hostedLink: "", // Include if there's a live demo
        githubRepoLink: "https://github.com/shamiul5201/MultiClass-Sports-Classifier",
        projectThumbnailBrief:
            "Developed a deep learning model using TensorFlow and Keras to classify sports images across 73 categories with high accuracy.",
        projectBrief:
            "This project involves building a Convolutional Neural Network (CNN) from scratch to perform multiclass image classification of sports images. The model is trained, validated, and evaluated using TensorFlow/Keras, demonstrating effective preprocessing, data augmentation, and model optimization techniques.",
        tags: [ "TensorFlow", "Keras", "Deep Learning", "Image Classification"],
        keyFeatures: [
            "Custom CNN architecture for multiclass classification",
            "Data augmentation to enhance model generalization",
            "Training and validation on a diverse sports image dataset",
            "Evaluation of model performance with metrics like accuracy and loss",
        ],
        benefits:
            "Provides a robust solution for automated sports image recognition, facilitating applications in sports analytics and media categorization.",
        thumbnailImageUrl: multiclass1, // URL to the thumbnail image
        projectSnaps: [
            multiclass2, // URL to snapshot 1
            multiclass1, // URL to snapshot 2
        ],
        projectFeaturesDetail: {
            feature1: {
              name: "Project Overview",
              description: "",
              image: [], // Optional, keep static images if needed
              video: "", // Optional, keep static video if needed
              isReadme: true,
              repoUrl: "https://github.com/shamiul5201/MultiClass-Sports-Classifier", // Add a flag to indicate this will render README content
            },
            // Other static features if needed
        } as ProjectFeaturesDetail,
    },

    // 2nd project

    {
        title: "Semantic Segmentation for FloodNet Dataset",
        slug: "semantic-segmentation-floodnet",
        hostedLink: "", // Include if there's a live demo
        githubRepoLink: "https://github.com/shamiul5201/Semantic-Segmentation-for-FloodNet-Dataset",
        projectThumbnailBrief:
            "Implemented a semantic segmentation model trained on the FloodNet dataset to classify pixels into predefined classes.",
        projectBrief:
            "This repository contains a semantic segmentation model trained on the FloodNet dataset. The model is capable of classifying each pixel in an image into one of 10 predefined classes. The project utilizes the Dice Score as the evaluation metric.",
        tags: [ "Semantic Segmentation", "Deep Learning", "TensorFlow" ],
        keyFeatures: [
            "Pixel-wise classification into 10 classes",
            "Training on FloodNet dataset",
            "Evaluation using Dice Score",
        ],
        benefits:
            "Facilitates accurate assessment of flood-affected areas, aiding in disaster response and management.",
        thumbnailImageUrl: seg2, // URL to the thumbnail image
        projectSnaps: [
            seg1, // URL to snapshot 1
            seg2, // URL to snapshot 2
        ],
        projectFeaturesDetail: {
            feature1: {
              name: "Project Overview",
              description: "",
              image: [], // Optional, keep static images if needed
              video: "", // Optional, keep static video if needed
              isReadme: true,
              repoUrl: "https://github.com/shamiul5201/Semantic-Segmentation-for-FloodNet-Dataset", // Add a flag to indicate this will render README content
            },
            // Other static features if needed
        } as ProjectFeaturesDetail,
          
    },

    // 3rd project

    {
        title: "Football Detection and Tracking",
        slug: "football-detection-and-tracking",
        hostedLink: "", // Include if there's a live demo
        githubRepoLink: "https://github.com/shamiul5201/Football_Detection_and_Tracking",
        projectThumbnailBrief:
            "Developed a tool to detect and track a football in video clips, facilitating analysis of key moments in play.",
        projectBrief:
            "This project captures and follows the movement of a football on the field in short video clips, making it easy to analyze key moments in play. With this tool, you can detect where the ball is and track its path throughout the game.",
        tags: [ "OpenCV", "Object Detection", "Object Tracking", "Sports Analysis"],
        keyFeatures: [
            "Detection of football in video frames",
            "Tracking football movement across frames",
            "Comparison of multiple tracking algorithms",
        ],
        benefits:
            "Assists in sports analysis by providing precise tracking of the football, aiding in performance evaluation and strategy development.",
        thumbnailImageUrl: footballTracker, // URL to the thumbnail image
        projectSnaps: [
           footballTracker // URL to snapshot 2
        ],
        projectFeaturesDetail: {
            feature1: {
              name: "Project Overview",
              description: "",
              image: [], // Optional, keep static images if needed
              video: "@/public/football_tracking_all_algorithms.mp4", // Optional, keep static video if needed
              isReadme: true,
              repoUrl: "https://github.com/shamiul5201/Football_Detection_and_Tracking", // Add a flag to indicate this will render README content
            },
            // Other static features if needed
        } as ProjectFeaturesDetail,
    },
    
    
    // 4th project
    {
        title: "Selfie App Features Application",
        slug: "selfie-app-features-application",
        hostedLink: "", // If there's a live demo or hosted version, include the URL here
        githubRepoLink: "https://github.com/shamiul5201/selfie_app_features_application",
        projectThumbnailBrief:
            "Developed an OpenCV-based application featuring Cartoonify and Pencil Sketch effects, blemish removal, and chroma keying, enhancing image processing capabilities.",
        projectBrief:
            "This project leverages OpenCV to implement various image processing features, including Cartoonify and Pencil Sketch effects in a Jupyter Notebook, blemish removal via a Python script, and chroma keying for videos. It serves as a comprehensive exploration of creative and practical computer vision techniques.",
        tags: ["Python", "OpenCV", "Computer Vision", "Image Processing", "Jupyter Notebook"],
        keyFeatures: [
            "Cartoonify and Pencil Sketch effects",
            "Interactive blemish removal tool",
            "Chroma keying for video backgrounds",
        ],
        benefits:
            "Enhances understanding of image processing techniques and provides practical tools for creative applications in computer vision.",
        thumbnailImageUrl: selfieFeature, // Provide the URL to the thumbnail image
        projectSnaps: [
            selfieFeature // URL to project snapshot 1
        ],
        projectFeaturesDetail: {
            feature1: {
              name: "Project Overview",
              description: "",
              image: [], // Optional, keep static images if needed
              video: "", // Optional, keep static video if needed
              isReadme: true,
              repoUrl: "https://github.com/shamiul5201/selfie_app_features_application", // Add a flag to indicate this will render README content
            },
            // Other static features if needed
        } as ProjectFeaturesDetail,
    },
    
    // 5th project
    {
        title: "Sitting Posture Analysis",
        slug: "sitting-posture-analysis",
        hostedLink: "", // Include if there's a live demo
        githubRepoLink: "https://github.com/shamiul5201/Sitting-Posture-Analysis",
        projectThumbnailBrief:
            "Developed a side-view posture analysis application using MediaPipe and OpenCV to monitor and improve sitting posture.",
        projectBrief:
            "This application detects a person's sitting posture, measures neck and torso inclination angles, monitors bending below a threshold, tracks posture duration, and ensures proper camera alignment for accurate side-view detection. It provides real-time feedback to help users maintain ergonomic postures.",
        tags: [ "MediaPipe", "Computer Vision", "Posture Analysis"],
        keyFeatures: [
            "Real-time posture detection",
            "Neck and torso angle measurement",
            "Bending threshold alerts",
            "Posture duration tracking",
            "Camera alignment verification",
        ],
        benefits:
            "Assists users in maintaining proper sitting posture, reducing the risk of musculoskeletal issues.",
        thumbnailImageUrl: workflow, // URL to the thumbnail image
        projectSnaps: [
            bodyPoint, // URL to snapshot 1
            workflow // URL to snapshot 2
        ],
        projectFeaturesDetail: {
            feature1: {
              name: "Project Overview",
              description: "",
              image: [], // Optional, keep static images if needed
              video: "", // Optional, keep static video if needed
              isReadme: true,
              repoUrl: "https://github.com/shamiul5201/Sitting-Posture-Analysis", // Add a flag to indicate this will render README content
            },
            // Other static features if needed
        } as ProjectFeaturesDetail,
    },


    {
        title: "Document Scanner Application",
        slug: "document-scanner-application",
        hostedLink: "", // Include if there's a live demo
        githubRepoLink: "https://github.com/shamiul5201/Document_Scanner_Application",
        projectThumbnailBrief:
            "Created a Python-based document scanner using OpenCV to convert photos of documents into clean, high-quality scans.",
        projectBrief:
            "This application processes images of documents, identifies their boundaries, and applies perspective transformation to produce top-down views. It's useful for digitizing paper documents, enhancing them for storage or sharing.",
        tags: ["Python", "OpenCV", "Image Processing", "Document Scanning"],
        keyFeatures: [
            "Automatic document boundary detection",
            "Perspective transformation for top-down view",
            "Image enhancement for clarity",
        ],
        benefits:
            "Simplifies the digitization of paper documents, making it easier to store and share them electronically.",
        thumbnailImageUrl: "", // URL to the thumbnail image
        projectSnaps: [
            docInput, // URL to snapshot 1
            docOutput // URL to snapshot 2
        ],
        projectFeaturesDetail: {
            feature1: {
              name: "Project Overview",
              description: "",
              image: [], // Optional, keep static images if needed
              video: "", // Optional, keep static video if needed
              isReadme: true,
              repoUrl: "https://github.com/shamiul5201/Document_Scanner_Application", // Add a flag to indicate this will render README content
            },
            // Other static features if needed
        } as ProjectFeaturesDetail,
    },


 

    // end


    // {
    //     title: "TechForing Website",
    //     slug: "techforing-website",
    //     hostedLink: "https://www.techforing.com/",
    //     githubRepoLink: "",
    //     projectThumbnailBrief:
    //         "I've built the CI/CD pipeline using Jenkins & established continuous deployment of various projects into AWS EC2.",
    //     projectBrief: "Shifted the exisiting blog management system from WordPress to the exisiting TechForing business website without breaking the link of different blogs since they were backlinked to different prestigious articles. The TechForing website is the paltform to increase awareness on cyber security & cyber menace through different articles. Besides, it also provides subscription and selling of cyber security courses & services. As an enrty point of the monetization funnel, this web application is integrated with their HRMS & LMS. TechForing Ltd is known for providing paramount service in the Cyber Security to all size & shapes of businesses across the world. Thus this website plays a pivotal role to the business, I have ensured that the viewers can be converted to potential customers by having seamless experience when visited this website.",
    //     tags: ["Django", "DRF", "Jenkins", "AWS EC2", "AWS Route 53", "AWS RDS", "Cloudflare", "Celery"],
    //     keyFeatures: ["Different blogging system for individuals & organizations", "Purchase & subscribe to different cyber security courses", "Purchase & subscribe to services to avoid different cyber threats"],
    //     benefits: "",
    //     thumbnailImageUrl: "",
    //     projectSnaps: [],
    //     projectFeaturesDetail: {
    //         feature1: {
    //             name: "Migrated the existing blog system from WordPress to Django",
    //             description: "Previously the articles were served using a WrodPress system. The company wants to change the migrate the entire system to their existing website built on Django framework. My task was to build a submodule to the exisitng website so that the entire blogging system can be moved there from WordPress & the provide rich editorial support to the content writers team.",
    //             image: ["img1", "img2", "img3"],
    //             video: "",
    //         },
    //         feature2: {
    //             name: "Ensures all the articles' backlinks remain the same",
    //             description: "I have to ensure that no previous blog links get broken due to the migration since they are backlinked to different prestigious articles. By the usages of Cloudflare & Django sub domain I safeguarded the links so that any views will be redirected to the django blogs instead of experience broken links.",
    //             image: ["img1", "img2", "img3"],
    //             video: "",
    //         },
    //         feature3: {
    //             name: "Build the CI/CD pipelines using Jenkins & deployed to AWS EC2",
    //             description: "Previously the developers used to release the new version of the applications by following a tedious amount of works. They have to deploy the project to AWS EC2 servers and maintain the infrastructre manually to make the new version live. The company has to pay an enormous amount of overhead cost & time for this manual labor. Thus I have initially established a CI/CD pipeline using Jenkins for the TechForing website. It remarkably reduced the server downtime as well as provided other developers to make seamless release of new features of the website. After successfully establishing CI/CD pipeline for this website, I was appointed to build pipelines for other applications majorly build upon Django, JavaScript & PHP.",
    //             image: ["img1", "img2", "img3"],
    //             video: "",
    //         },
    //     } as ProjectFeaturesDetail,
    // },

 
] as const;

export const skillsData = [
    'Artificial Intelligence',
    'Computer Vision',
    'Deep Learning',
    'Image Segmentation',
    'Facial Landmark Detection',
    'Face Recognition',
    'Image Processing',
    'Video Analysis',
    'Image Classification', 
    'Object Detection',
    'Object Tracking',
    'OCR',
    'TensorFlow',
    'MediaPipe',
    'PyTorch',
    'Keras',
    'Scikit-Learn',
    "Python",
    "Django",
    "Oracle",
    "MySQL",
    "SQL",
    "Git",
    'SciPy',
    'Scikit-Learn',
    "Numpy",
    "Pandas",
    "Data Visualization",
    "Matplotlib",
    "Seaborn",
    'Neural Networks',
    'Model Evaluation',
   
] as const;