
import summarybullets from "../../assets/images/summarybullets.png";
import ashtechdigitalsolutions from "../../assets/images/ashtechdigitalsolutions.png";
import algoswift from "../../assets/images/algoswift.png";
import nids from "../../assets/images/nids.png";
import zapzappp from "../../assets/images/zapzappp.png";
import virtule from "../../assets/images/virtule.png";

const projects = [
    {
      title: 'SummaryBullets',
      image: summarybullets, // Replace with actual image import/path
      linkOnline: 'https://summarybullets.com/',
      linkGithub: null,
      description: 'A platform to summarize books into concise bullet points for easier understanding.',
      techStack: ['React JS', 'Node JS', 'Tailwind CSS', 'MongoDB']
    },
    {
      title: 'AlgoSwift',
      image: algoswift,
      linkOnline: 'https://algoswift.com/',
      linkGithub: null,
      description: 'A software agency website providing an overview of services and client solutions.',
      techStack: ['React JS', 'Node JS', 'Tailwind CSS']
    },
    {
      title: 'zapzappp',
      image: zapzappp,
      linkGithub: null,
      linkOnline: "https://www.zapzappp.com/",
      description: 'A platform where you can hire the virtual assistant for your business.',
      techStack: ['React JS', 'mongodb', 'Node JS']
    },
    {
      title: 'Ashtech Digital Solutions',
      image: ashtechdigitalsolutions,
      linkOnline: 'https://ashtechdigitalsolutions.com/',
      linkGithub: null,
      description: 'A digital agency website showcasing services, portfolio, and contact options.',
      techStack: ['React JS', 'Node JS', 'Bootstrap', 'MongoDB']
    },
    {
      title: 'NIDS (Network Intrusion Detection System)',
      image: nids,
      linkGithub: 'https://github.com/hanzilarasool/Nids',
      linkOnline: null,
      description: 'A system under development aimed at detecting and mitigating network intrusions effectively.',
      techStack: ['React JS', 'Node JS', 'Express', 'MongoDB']
    },
    {
      title: 'Virtule (AI Startup Landing Page)',
      image: virtule,
      linkOnline: 'https://virtule.netlify.app/',
      linkGithub: null,
      description: 'A visually appealing landing page for an AI-based startup.',
      techStack: ['React JS', 'EmailJS']
    }
  ];

  export default projects;