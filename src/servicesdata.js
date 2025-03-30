// servicesData.js
// import webdev from "./assets/services/webdev.png"
import gdesign from "./assets/services/gdesign.svg";
import fdesign from "./assets/services/fdesign.svg";
import assiststud from "./assets/services/assiststud.svg";
import webdev from "./assets/services/web-development.svg";
import digmarket from "./assets/services/marketing.svg"
import ecomm from "./assets/services/ecomm.svg";
import ML from "./assets/services/robot.png";
import consultancy from "./assets/services/consultancy.png";
import ai from "./assets/services/ai.svg";
// imorting images now 
import webdevimg from "./assets/services/ServicesSingle/web-dev-img.png";

import webdesignimg from "./assets/services/ServicesSingle/web-design-img.png";

import gdesignimg from "./assets/services/ServicesSingle/graphicdesign.png";

import marketingimg from "./assets/services/ServicesSingle/marketing-img.jpg";
import studassistimg from "./assets/services/ServicesSingle/stud-assist-img.jpg";

const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description: "We provide comprehensive web development services, including both front-end and back-end development.",
      details: `Our web development services cater to businesses of all sizes, helping them enhance their online presence. 
                Our expertise includes a variety of tasks, such as designing user interfaces, developing back-end functionalities, 
                and ensuring that websites or web applications are responsive and user-friendly. 
                We focus on both the visual elements and the underlying technical infrastructure to create robust web solutions.`,
      services: [
        "Front-end Development",
        "Back-end Development",
        "Content Management System (CMS) Integration",
        "E-commerce Features",
        "Responsive Design"
      ],
      benefits: {
        tailoredToSpecificNeeds: "Custom software is crafted to meet the unique requirements of your organization, ensuring a perfect fit for your operations.",
        enhancedEfficiency: "Custom solutions streamline processes, automate tasks, and eliminate inefficiencies, boosting productivity and reducing manual work.",
        scalability: "As your business expands, custom software can easily adapt and scale to accommodate increased data, users, and functionality.",
        costSavings: "Although the initial investment may be higher, custom software often leads to long-term cost savings by reducing the need for multiple third-party applications and licenses.",
        competitiveAdvantage: "Custom software can provide a competitive edge by enabling innovation, quicker response to market changes, and differentiation from competitors.",
        maintenanceAndSupport: "You have the flexibility to choose ongoing maintenance and support options, ensuring that your software remains up-to-date and functional."
      },
      iconImage: webdev,
      image:webdevimg
    },
    {
      id: 2,
      title: "Web Design",
      description: "Create visually stunning and user-friendly designs for your website.",
      details: `Our web design services focus on creating a visually appealing and user-friendly experience. 
                We ensure that your website's design is not only aesthetically pleasing but also functional and easy to navigate. 
                From wireframes to final design, we handle it all to deliver a cohesive and engaging user interface.`,
      services: [
        "User Interface (UI) Design",
        "User Experience (UX) Design",
        "Responsive Design",
        "Wireframing and Prototyping",
        "Visual Branding"
      ],
      benefits: {
        improvedUserEngagement: "A well-designed website attracts and retains users, encouraging them to interact with your content.",
        brandConsistency: "Professional design ensures that your brand is presented consistently across all digital platforms.",
        increasedConversionRates: "Optimized design can lead to higher conversion rates by guiding users through a seamless experience.",
        mobileFriendly: "Responsive design ensures your website looks great on all devices, providing a positive user experience everywhere.",
        competitiveEdge: "A unique and appealing design helps differentiate your brand from competitors, making a strong first impression."
      },
      iconImage: fdesign,
      image:webdesignimg
    },
    {
      id: 3,
      title: "Media Management",
      description: "Enhance your brand with professional graphic design and video editing services.",
      details: `We provide graphic design services that help your brand stand out. 
                From logos to marketing materials, we ensure that your brand's visual identity is strong and consistent. 
                Our creative solutions are tailored to meet your branding and marketing needs.`,
      services: [
        "Graphic Design",
        "Video editing",
        "Social Media Graphics",
        "Marketing Materials",
        "Business Cards"
      ],
      benefits: {
        strongBrandIdentity: "Effective graphic design establishes a strong brand identity that resonates with your audience.",
        improvedMarketing: "Professional design enhances your marketing materials, making them more appealing and effective.",
        brandRecognition: "Consistent design across all materials helps build brand recognition and trust.",
        visualCommunication: "Graphic design communicates your brand message visually, making it more engaging and memorable.",
        versatility: "Our designs are versatile and can be adapted for various mediums, from print to digital."
      },
      // icon: <DiPhotoshop />,
      iconImage:gdesign,
      image:gdesignimg
    },
    {
      id: 4,
      title: "Coursework Assistence",
      description: "Assist students with their tasks and projects completion.",
      details: `We offer assistance to students in various tasks and projects, ensuring that they get the help they need to succeed in their academic endeavors. 
                Our services are designed to support students in managing their workload effectively and achieving their educational goals.`,
      services: [
        "Final year project",
        "Assignment Tasks",
        "Tutoring",
        "Study Materials",
        "Exam Preparation"
      ],
      benefits: {
        academicSuccess: "Our assistance helps students understand their coursework better, leading to improved academic performance.",
        personalizedSupport: "We offer personalized support tailored to each student's specific needs and learning style.",
        timeManagement: "Our services help students manage their time more effectively, balancing their studies with other commitments.",
        stressReduction: "With our help, students can reduce the stress associated with heavy workloads and tight deadlines.",
        skillDevelopment: "We help students develop important skills, such as critical thinking and problem-solving, that are valuable beyond the classroom."
      },
      iconImage: assiststud,
      image:studassistimg
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "We offer a full suite of digital marketing services to help businesses grow their online presence and reach their target audience effectively.",
      details: `Our digital marketing services are designed to elevate your brand's visibility and engagement across various online platforms. 
                With expertise in SEO, social media marketing, email campaigns, and more, we tailor our strategies to meet your specific business goals. 
                Whether you're looking to increase website traffic, improve search engine rankings, or build a loyal customer base, we have the skills and tools to achieve your objectives.`,
      services: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "Analytics and Reporting"
      ],
      benefits: {
        increasedVisibility: "Boost your online presence and make it easier for potential customers to find your business.",
        targetedAudience: "Reach the right audience with tailored marketing strategies that speak directly to your potential customers.",
        costEffectiveness: "Optimize your marketing budget with targeted campaigns that deliver a high return on investment.",
        measurableResults: "Track and analyze the performance of your campaigns to continuously improve and refine your strategies.",
        brandLoyalty: "Engage with your audience and build a loyal customer base through consistent and meaningful interactions.",
        competitiveEdge: "Stay ahead of the competition with cutting-edge digital marketing techniques and trends."
      },
      iconImage: digmarket,
      image:marketingimg
    }
    // adding 6th service
    ,
    // {
    //   id: 6,
    //   title: "eCommerce",
    //   description: "Our comprehensive eCommerce services empower businesses to effortlessly set up and manage their online stores.",
    //   details: `We offer end-to-end eCommerce solutions, from designing user-friendly online stores to implementing secure payment systems and managing inventory. 
    //             Our services are tailored to help businesses build a successful online presence and drive sales growth.`,
    //   services: [
    //     "Online Store Setup",
    //     "Payment Gateway Integration",
    //     "Inventory Management",
    //     "Order Fulfillment Solutions",
    //     "eCommerce Website Optimization"
    //   ],
    //   benefits: {
    //     enhancedUserExperience: "We create eCommerce platforms that offer seamless and enjoyable shopping experiences for your customers.",
    //     secureTransactions: "Our services include secure payment integration, ensuring safe and reliable transactions for your customers.",
    //     scalableSolutions: "Our eCommerce solutions are built to grow with your business, allowing for easy scaling as your business expands.",
    //     increasedSales: "With optimized websites and efficient order management, our solutions help drive higher sales and conversion rates.",
    //     Operations: "Enable your business to operate 24/7 with a fully functional online store that meets your customers' needs at any time."
    //   },
    //   iconImage: ecomm, // Replace with actual image reference
    //   image: marketingimg // Replace with actual image reference
    // }
    
    // ,
    // {
    //   id: 8,
    //   title: "Consultancy Services",
    //   description: "We provide a range of consultancy services to help businesses optimize their operations and achieve their goals.",
    //   details: `Our consultancy services offer professional advice and guidance in various domains to assist your business in reaching new heights. 
    //             Whether you're looking for IT solutions, communication strategies, or career counseling, we have experts ready to help you make informed decisions and implement effective strategies.`,
    //   services: [
    //     "IT Consultancy Services",
    //     "Communication and Collaboration Consultancy",
    //     "Career Consultancy",
    //     "Professional Services"
    //   ],
    //   benefits: {
    //     expertAdvice: "Our team of experts offers insights and recommendations based on industry best practices and the latest technologies.",
    //     customizedSolutions: "We tailor our consultancy solutions to meet the specific needs and challenges of your business.",
    //     operationalEfficiency: "Our guidance helps improve your business processes, leading to enhanced productivity and efficiency.",
    //     costSavings: "We help businesses streamline operations and reduce costs through effective consultancy.",
    //     strategicGrowth: "Leverage our consultancy services to develop strategies that promote long-term growth and success."
    //   },
    //   iconImage: assiststud, // Replace with actual image reference
    //   image: consultancy // Replace with actual image reference
    // },
    {
      id: 9,
      title: "AI/ML Models",
      description: "We offer advanced AI model development services to help businesses harness the power of artificial intelligence for various applications.",
      details: `Our AI services are designed to deliver intelligent solutions that enhance decision-making, automate processes, and improve business outcomes. 
                From chatbots to predictive analytics, we offer a wide range of AI model development services tailored to meet the unique needs of your business.`,
      services: [
        "Chatbots",
        "Prediction Models",
        "Sentiment Analysis",
        "Classification Models"
      ],
      benefits: {
        automation: "Leverage AI models to automate routine tasks and improve operational efficiency.",
        enhancedDecisionMaking: "Our prediction models provide valuable insights, enabling data-driven decision-making.",
        customerEngagement: "Implement AI-powered chatbots to enhance customer service and engagement.",
        realTimeAnalysis: "Sentiment analysis models allow you to analyze customer feedback and market trends in real-time.",
        competitiveAdvantage: "Stay ahead of the competition with cutting-edge AI technologies tailored to your business needs."
      },
      iconImage: ai, // Replace with actual image reference
      image: ML // Replace with actual image reference
    }
    
  ];
  
  export default servicesData;
  