import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Text from '../components/Text';

const DeveloperSetup = () => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <h2>Developer Setup</h2>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Text>VSCode Setup: Install Prettier, ESLint, and GitLens extensions for consistent code style.</Text>
        </ListGroup.Item>
        <ListGroup.Item>
          <Text>Terminal Setup: Use iTerm2 (macOS) or Windows Terminal (Windows) for enhanced productivity.</Text>
        </ListGroup.Item>
        <ListGroup.Item>
          <Text>Preferred Editor Font: Use Fira Code to support programming ligatures.</Text>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default DeveloperSetup;