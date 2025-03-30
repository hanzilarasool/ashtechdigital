import React from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from './data';
const Projects = () => {


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className={styles.tech}>{tech}</span>
                ))}
              </div>
              <div className={styles.linkWrapper}>
                {project.linkOnline ? (
                  <a href={project.linkOnline} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FaExternalLinkAlt className={styles.icon} /> Live
                  </a>
                ) : (
                  <a href={project.linkGithub} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FaGithub className={styles.icon} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;