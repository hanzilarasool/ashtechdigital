import smarthome from "../../assets/images/prod2.jpeg";
import smartmed from "../../assets/images/prod1.png";
import aicalls from "../../assets/images/prod3.png";

const products = [
    {
      id: 1,
      title: 'Smart Medicine Box Prototype',
      image: smartmed,
      purchaseLink: 'https://ashtechdigitalsolutions.com/contact',
      demoLink: 'https://www.youtube.com/shorts/HYVZB8f0JhE?si=4ffwh4rCEfz8ZJbP',
      description: 'An IoT-enabled pill dispenser to ensure medication adherence and provide peace of mind for caregivers.',
      price: "Request a Quote",
      features: ['Automated Dispensing', 'Mobile App Alerts & Reminders', 'Dosage & Schedule Tracking', 'Secure Lock Mechanism'],
      fullDescription: 'Our Smart Medicine Box prototype is a revolutionary step in personal healthcare management. Using IoT technology, it automates pill dispensing based on a pre-set schedule, sends timely reminders to a connected mobile app, and logs every dose taken. It\'s the perfect solution for ensuring loved ones adhere to their medication regimen, promoting independence while keeping caregivers informed.',
    },
    {
      id: 2,
      title: 'AI Based Smart Home Prototype',
      image: smarthome,
      purchaseLink: 'https://ashtechdigitalsolutions.com/contact',
      demoLink: 'https://youtube.com/shorts/LIoiDeibGyA?si=OG81ktJbave4T4EH',
      description: 'A centralized control system to automate and manage lighting, climate, and security in a modern home.',
      price: "Request a Quote",
      features: ['Centralized Control Hub', 'Lighting & Climate Automation', 'Voice Assistant Integration (Alexa/Google)', 'Real-time Energy Monitoring'],
      fullDescription: 'Experience the future of living with our AI Based Smart Home prototype. This system serves as the central brain for your home, allowing you to seamlessly control lighting, temperature, and other connected devices from a single app or voice command. Our prototype focuses on energy efficiency, convenience, and creating a truly intelligent living environment tailored to your lifestyle.',
    },
    {
  id: 3,
  title: 'AI Voice Agent for Any Industry',
  image:aicalls, // replace with your actual image import/asset
  purchaseLink: 'https://ashtechdigitalsolutions.com/contact',
  demoLink: null, 
  description: 'An AI-powered voice automation system that handles customer conversations across industries with real-time, multilingual, and privacy-first responses.',
  price: "Request a Quote",
  features: [
    'Automates FAQs, bookings, scheduling, and issue resolution',
    '24/7 multilingual support with real-time responses (<700ms)',
    'Secure with privacy guardrails and human failover',
    'Seamless integration with ERP, CRM, and booking systems'
  ],
  fullDescription: 'Our AI Voice Agent revolutionizes customer support by automating conversations across industries including banking, healthcare, travel, retail, and logistics. Customers speak naturally, the AI listens, processes queries, retrieves knowledge, and responds instantly with voice. With robust API integrations, businesses can reduce support costs by 50–70% while delivering round-the-clock service. Designed to be multilingual, privacy-first, and scalable, this AI Voice Agent represents the future of customer engagement and operational efficiency.',
}, 

];

export default products;
