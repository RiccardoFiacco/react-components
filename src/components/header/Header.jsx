import { Col, Row, Container } from "react-bootstrap";

export function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center pt-3">Il mio blog</h1>
        </Col>
      </Row>
    </Container>
  );
}
