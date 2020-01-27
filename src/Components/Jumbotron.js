import React, { useState } from 'react';

import { Jumbotron, Toast, Container, Button } from 'react-bootstrap';

import '../App.css';

const ExampleToast = ({ children }) => {
const [show, toggleShow] = useState(true);

	return (
    <div className="d-flex justify-content-center flex-column">
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Hooks News Toast</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </div>
  );
};

const JumbotronComponent = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To Hooks-News</h1>
      <ExampleToast className="toast">
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

export default JumbotronComponent;
