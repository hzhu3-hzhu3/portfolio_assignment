import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from '../components/Card';

const Resources = () => {
  const resources = [
    {
      title: 'React Official Documentation',
      summary: 'Comprehensive guide and best practices for using React.',
      image: '/images/react_logo.png',  // Ensure the image exists in public/images
      link: 'https://reactjs.org/'
    },
    {
      title: 'Ruby on Rails Guides',
      summary: 'Official Rails guides covering everything from basics to advanced topics.',
      image: '/images/rails_logo.png',
      link: 'https://guides.rubyonrails.org/'
    }
  ];

  return (
    <Container style={{ marginTop: '2rem' }}>
      <h2>Resources</h2>
      {resources.map((res, index) => (
        <Card 
          key={index}
          title={res.title}
          content={
            <>
              <p>{res.summary}</p>
              <a href={res.link} target="_blank" rel="noopener noreferrer">Visit Resource</a>
            </>
          }
          width="100%"
          style={{ marginBottom: '1.5rem' }}
        />
      ))}
    </Container>
  );
};

export default Resources;