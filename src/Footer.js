import { Container, Col, Row, Form, Button } from "react-bootstrap";

export default function Header() {
  return (
    <div style={{ backgroundColor: "dimgrey", padding: "25px" }}>
      <Container>
        <Row>
          <Col sm>
            <h4>
              <u>Email</u>
            </h4>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <br />
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Write Message" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm>
            <h4>
              <u>Sitemap</u>
            </h4>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>Gadgets</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col sm>
            <h4>
              <u>Contact Us</u>
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
