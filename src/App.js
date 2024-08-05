// App.js
import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = 'Raymond'; 

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Welcome to my React Checkpoint App!
          </span>
        </Navbar.Brand>
      </Navbar>
      <br></br>
      <Container>
        <Row>
          {firstName && (
            <Col md={4}>
              <Card>
                <Card.Body>
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQGK3C7JWmyVEw/profile-displayphoto-shrink_400_400/0/1666263580513?e=1727913600&v=beta&t=GN4wI-cErHfMmnkJLHJKX0L62HE4GgMplEMKhS7F0kY"
                    alt="Profile Picture"
                    style={{ width: '100%', borderRadius: '50%' }}
                  />
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Hello, {firstName}!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          )}
          <Col md={firstName ? 8 : 12}>
            <Card>
              <Card.Body>
                <Name />
                <Price />
                <Description />
                <Image style={{ width: '37.5%' }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {!firstName && <p>Hello, there!</p>}
        <hr></hr>
      </Container>
    </div>
  );
};

export default App;