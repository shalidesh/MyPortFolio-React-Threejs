import {
    python,
    tensorflow,
    keras,
    docker,
    gcp,
    pytorch,
    react,
    R,
    genai,
    opencv ,
    aws,
    mlflow,
    ncinga,
    cdb,
    scikit} from "../../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: R,
        name: "R",
        type: "Animation",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "Css",
        type: "Frontend",
    },
    
    {
        imageUrl: scikit,
        name: "Scikit",
        type: "Frontend",
    },
    {
        imageUrl: tensorflow,
        name: "Tensorflow",
        type: "Backend",
    },
    {
        imageUrl: keras,
        name: "Keras",
        type: "Frontend",
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "Frontend",
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: docker,
        name: "Docker",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: genai,
        name: "GenAI",
        type: "State Management",
    },
    
    {
        imageUrl: gcp,
        name: "GCP",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Frontend",
    },
    {
        imageUrl: mlflow,
        name: "MLflow",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Intern AI/ML Engineer",
        company_name: "NCINGA PVT LTD",
        icon: ncinga,
        iconBg: "#accbe1",
        date: "Jan 2023 - Jul 2023",
        points: [
            "Analyzing raw data to gain insights and trends, which can be used to develop AI/ML models.",
            "Designing and implementing machine learning models. This includes selecting appropriate models, tuning hyperparameters, and training the models on the data.",
            "Validating the models against predefined metrics to ensure they are performing as expected. This also includes testing the models on unseen data to evaluate their generalization capabilities.",
            "Deploying the trained models into production environments. This includes integrating the models with existing systems and ensuring they are working correctly.",
        ],
    },
    {
        title: "Mlops Engineer",
        company_name: "CDB Finance PLC ",
        icon: cdb,
        iconBg: "#fbc3bc",
        date: "Jul 2023 - Present",
        points: [
            "Deploying machine learning models into production environments in a repeatable, reliable manner. This includes managing the entire lifecycle of a machine learning model from development to deployment and monitoring.",
            "Automating the machine learning pipeline to streamline the process. This includes automating data collection, model training, model validation, and model deployment",
            " Monitoring the performance of machine learning models in production. This includes setting up alerts for model degradation and implementing processes to retrain models as needed",
            "Managing the infrastructure needed for machine learning, including data storage, compute resources, and networking. This also includes managing cloud resources if the organization uses cloud-based machine learning",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shalidesh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shalika-deshan-21a500212/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Violence and Accident Detection System Using Deep Learning',
        description: 'This project focuses on developing a real-time violence and accident detection system utilizing deep learning, specifically the CNN+LSTM approach.',
        link: 'https://github.com/shalidesh/-Violence-and-Accident-Detection-System-Using-Deep-Learning',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI-powered chatbot plugin for Retail Management Systems.',
        description: 'The artifact of this project is to create an AI-powered chatbot application for retail management systems.',
        link: 'https://github.com/shalidesh/AiChatBot',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Crypto Trading Alerts & News Sentiment Analysis Application',
        description: 'This project entails developing a Crypto Trading Alerts & News Sentiment Analysis application using NLP transformers and technical analysis libraries in Python',
        link: 'https://github.com/shalidesh/RealTimeCryptoAlertApplication',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Powered Learning Mobile application for Grade 1,2,3 students',
        description: 'This project focuses on developing an AI-powered learning mobile application specifically designed for Grade 1, 2, and 3 students.',
        link: 'https://github.com/shalidesh/ChildLearningAppWith_Ai',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Network Anomaly Detection System',
        description: 'this project focuses on building a Network Anomaly Detection System that identifies and alerts potential anomalies in network traffic',
        link: 'https://github.com/shalidesh',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Chat App With Multiple PDF Documents With Langchain And Google Gemini Pro',
        description: 'LLM application using Google gemini pro and langchain where we can multiple pdf documents with the help of FAISS vector emebeddings',
        link: 'https://github.com/shalidesh/LLM-Projects',
    }
];