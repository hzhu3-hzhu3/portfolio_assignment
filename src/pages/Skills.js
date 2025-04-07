import React from 'react';
import Container from 'react-bootstrap/Container';
import Text from '../components/Text';
import Label from '../components/Label';

const Skills = () => {
  const skills = [
    { name: 'Ruby', description: 'Experienced in writing clean, maintainable Ruby code for web applications.' },
    { name: 'Python', description: 'Skilled in Python for backend development, automation, and data analysis.' },
    { name: 'Ruby on Rails', description: 'Proficient in building scalable, database-driven web applications using Rails.' },
    { name: 'SQL', description: 'Strong expertise in designing efficient databases and crafting complex queries.' },
    { name: 'JavaScript', description: 'Well-versed in modern JavaScript for dynamic and interactive user interfaces.' },
    { name: 'Java', description: 'Capable of developing robust backend services and enterprise-level applications.' },
    { name: 'HTML & CSS', description: 'Expert in creating responsive, user-friendly web designs with semantic HTML and modern CSS techniques.' }
  ];
  
  return (
    <Container style={{ marginTop: '2rem' }}>
      <h2>Skills</h2>
      <Text fontSize="1.1rem" style={{ marginBottom: '1rem' }}>
        My technical skill set encompasses a diverse range of programming languages and frameworks, backed by hands-on experience in developing and deploying full stack web applications.
      </Text>
      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <h4>{skill.name}</h4>
          <Text fontSize="1rem">{skill.description}</Text>
        </div>
      ))}
    </Container>
  );
};

export default Skills;