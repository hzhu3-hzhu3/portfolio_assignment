import React from 'react';
import Container from 'react-bootstrap/Container';
import HeroImage from '../components/Hero Image';
import Text from '../components/Text';

const BasicInformation = () => {
    return (
      <>
        <HeroImage 
          backgroundUrl="/images/hero_background.png" 
          height="700px"  
          title=""      
          subtitle=""
        />
  
        <Container style={{ marginTop: '2rem' }}>
          <h1 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Gloria Zhu - Junior Full Stack Developer
          </h1>
          <Text fontSize="1.1rem" style={{ marginBottom: '1rem' }}>
            I am Gloria Zhu, an aspiring full stack web developer with a strong foundation in both front-end and back-end technologies. Currently enrolled in the Full Stack Web Development program at RRC Polytech, I have been refining my skills in Ruby, Python, Ruby on Rails, SQL, JavaScript, Java, HTML, and CSS.
          </Text>
          <Text fontSize="1.1rem" style={{ marginBottom: '1rem' }}>
            My academic journey and hands-on project experience—including developing the e-commerce application "Hidden Gems"—have deepened my understanding of system design, database management, and agile development processes. I am passionate about creating dynamic, secure web applications that provide seamless user experiences.
          </Text>
          <Text fontSize="1.1rem" style={{ marginBottom: '1rem' }}>
            In addition to technical expertise, I bring valuable interpersonal skills and a global perspective from my diverse educational background and work experiences. My role as an International Education Advisor has enhanced my ability to manage complex data systems and collaborate with cross-functional teams.
          </Text>
        </Container>
      </>
    );
  };
  
  export default BasicInformation;