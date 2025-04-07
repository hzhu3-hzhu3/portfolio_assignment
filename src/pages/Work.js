import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from '../components/Card';

const Work = () => {
    const projects = [
      {
        title: 'Hidden Gems E-commerce Platform',
        description: 'Developed using Ruby on Rails, this project simulates a real-world thrift store. It features comprehensive product management, diverse user roles, and efficient order tracking. This project allowed me to apply agile methodologies and significantly enhance my back-end development skills.',
        image: '/images/hidden_gems.png',  
        link: 'https://github.com/hzhu3-hzhu3/hidden_gems',
        techList: 'Ruby on Rails, HTML, CSS, JavaScript'
      }
    ];
  
    const professionalExperience = [
      {
        title: 'International Education Advisor',
        company: 'APEUni Education',
        duration: 'June 2023 - February 2024',
        description: 'Managed student data tracking systems for over 300 students, streamlining application processes and enhancing service quality. Collaborated with cross-functional teams to analyze data trends and improve operational workflows, thereby contributing to the overall efficiency of the organization.'
      }
    ];
  
    return (
      <Container style={{ marginTop: '2rem' }}>
        <h2>Work</h2>
        <h3 style={{ marginTop: '1rem' }}>Projects</h3>
        {projects.map((project, index) => (
          <Card 
            key={index}
            title={project.title}
            content={
              <>
                <p>{project.description}</p>
                <p><strong>Technologies:</strong> {project.techList}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </>
            }
            width="100%"
            style={{ marginBottom: '1.5rem' }}
          />
        ))}
        <h3 style={{ marginTop: '2rem' }}>Professional Experience</h3>
        {professionalExperience.map((exp, index) => (
          <Card
            key={index}
            title={`${exp.title} at ${exp.company}`}
            content={
              <>
                <p><strong>Duration:</strong> {exp.duration}</p>
                <p>{exp.description}</p>
              </>
            }
            width="100%"
            style={{ marginBottom: '1.5rem' }}
          />
        ))}
      </Container>
    );
  };
  
  export default Work;