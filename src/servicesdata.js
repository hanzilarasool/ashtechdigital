// servicesData.js
// import webdev from "./assets/services/webdev.png"
import fdesign from "./assets/services/fdesign.svg";
import assiststud from "./assets/services/assiststud.svg";
import webdev from "./assets/services/web-development.svg";
import ML from "./assets/services/robot.png";
import ai from "./assets/services/ai.svg";
// imorting images now 
import webdevimg from "./assets/services/ServicesSingle/web-dev-img.png";

import webdesignimg from "./assets/services/ServicesSingle/web-design-img.png";

import studassistimg from "./assets/services/ServicesSingle/stud-assist-img.jpg";

const servicesData = [
    {
      id: 1,
      title: "AI/ML Solutions",
      description: "Harness the power of Artificial Intelligence and Machine Learning to build intelligent, automated systems.",
      details: `We specialize in creating custom AI and Machine Learning solutions that drive innovation. Our expertise covers the full spectrum of model development, including prediction models for forecasting, sentiment analysis to understand customer feedback, and classification models for data organization. From intelligent chatbots to complex deep learning algorithms and IoT automation, our team helps you leverage data to unlock a significant competitive advantage.`,
      services: [
        "AI/ML Models",
        "Deep Learning",
        "Intelligent Agents & Chatbots",
        "IoT & Automation",
        "Prediction Models",
        "Sentiment Analysis",
        "Classification Models"
      ],
      benefits: {
        operationalEfficiency: "Automate complex processes, reduce manual workload, and increase productivity across your organization.",
      dataDrivenInsights: "Make smarter, faster decisions by leveraging predictive analytics and insights derived from your data.",
      enhancedUserExperience: "Create personalized and responsive user experiences with AI-powered features like chatbots and recommendation engines.",
      competitiveAdvantage: "Stay ahead of the curve by integrating cutting-edge AI technology into your products and services.",
    },
    iconImage: ai,
    image: ML,
    },
    {
      id: 2,
      title: "Web & App Development",
      description: "Building robust, scalable, and high-performance websites and mobile applications tailored to your needs.",
      details: `Our full-stack development services cover everything needed to bring your digital ideas to life. We build dynamic web platforms and cross-platform mobile apps with clean, efficient code. Our expertise in API integrations ensures your applications can seamlessly connect with third-party services, creating a powerful and interconnected digital ecosystem.`,
      services: [
        "Front-End & Back-End Development",
        "Mobile App Development",
        "API Integrations",
      ],
      benefits: {
         broadAudienceReach: "Establish a strong digital presence on both the web and mobile devices, reaching customers wherever they are.",
      tailoredSolutions: "Get a solution built specifically for your business goals, not a one-size-fits-all template.",
      futureProofArchitecture: "Our scalable solutions are designed to grow with your business, handling increased traffic and functionality.",
      seamlessIntegration: "Connect your app to essential third-party services like payment gateways, CRMs, and more.",
    },
    iconImage: webdev,
    image: webdevimg,
    },
    {
      id: 3,
      title: "UI/UX & Design",
      description: "Crafting intuitive, beautiful, and engaging user experiences that build strong brand identities.",
      details: `Good design is about more than just aesthetics—it's about creating a seamless and enjoyable journey for your users. Our UI/UX process involves in-depth research, wireframing, and prototyping to design web and mobile interfaces that are both easy to use and visually stunning. We also help build a cohesive brand and visual identity that resonates with your audience.`,
      services: [
        "Web Design", 
        "App Design", 
        "Branding & Visual Identity"
      ],
      benefits: {
         increasedUserSatisfaction: "An intuitive and user-friendly design leads to happier users who are more likely to return.",
      higherConversionRates: "We design clear user paths that guide visitors towards taking desired actions, such as making a purchase or signing up.",
      strongBrandRecognition: "A consistent and professional visual identity builds trust and makes your brand memorable.",
      enhancedUsability: "Our focus on user experience ensures your product is accessible and easy for everyone to navigate."
    },
    iconImage: fdesign,
    image: webdesignimg,
    },
    {
      id: 4,
      title: "Career Counseling & Training",
      description: "Empowering students and professionals with the guidance and technical skills to succeed in the tech industry.",
      details: `We bridge the gap between academic knowledge and real-world industry demands. Our programs offer personalized career guidance, hands-on technical training in the latest technologies, and interactive workshops. Through mentorship, we provide the support and confidence needed to navigate career challenges and achieve professional goals.`,
      services: [
       "Career Guidance",
      "Technical Training",
      "Workshops & Mentorship"
      ],
      benefits: {
       clearCareerPath: "Gain clarity and a strategic roadmap for your career in the competitive tech landscape.",
      practicalIndustrySkills: "Learn in-demand, practical skills that employers are actively looking for.",
      improvedJobReadiness: "Build a strong portfolio and the confidence to excel in technical interviews and on the job.",
      networkingOpportunities: "Connect with industry professionals and peers through our workshops and mentorship programs.",
      },
      iconImage: assiststud,
      image:studassistimg
    },
    // {
    //   id: 5,
    //   title: "Digital Marketing",
    //   description: "We offer a full suite of digital marketing services to help businesses grow their online presence and reach their target audience effectively.",
    //   details: `Our digital marketing services are designed to elevate your brand's visibility and engagement across various online platforms. 
    //             With expertise in SEO, social media marketing, email campaigns, and more, we tailor our strategies to meet your specific business goals. 
    //             Whether you're looking to increase website traffic, improve search engine rankings, or build a loyal customer base, we have the skills and tools to achieve your objectives.`,
    //   services: [
    //     "Search Engine Optimization (SEO)",
    //     "Social Media Marketing",
    //     "Content Marketing",
    //     "Email Marketing",
    //     "Pay-Per-Click (PPC) Advertising",
    //     "Analytics and Reporting"
    //   ],
    //   benefits: {
    //     increasedVisibility: "Boost your online presence and make it easier for potential customers to find your business.",
    //     targetedAudience: "Reach the right audience with tailored marketing strategies that speak directly to your potential customers.",
    //     costEffectiveness: "Optimize your marketing budget with targeted campaigns that deliver a high return on investment.",
    //     measurableResults: "Track and analyze the performance of your campaigns to continuously improve and refine your strategies.",
    //     brandLoyalty: "Engage with your audience and build a loyal customer base through consistent and meaningful interactions.",
    //     competitiveEdge: "Stay ahead of the competition with cutting-edge digital marketing techniques and trends."
    //   },
    //   iconImage: digmarket,
    //   image:marketingimg
    // }
    // adding 6th service
    // ,
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
   
    
  ];
  
  export default servicesData;
  