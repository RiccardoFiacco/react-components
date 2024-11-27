import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row, Container } from "react-bootstrap";
import style from "./main.module.css";
export function Main() {
  return (
      <Container className={style.main}>
        <Row
          className={[
            style.justify_center,
            style.align_center,
            style.padding_top_50,
          ]}
        >
          <Col xs={6}>
            <Card>
              <Card.Img src="/images/gto2.jpg" />
              <Card.Body>
                <Card.Title>Titolo del post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  architecto doloremque provident velit saepe unde officia,
                  ipsum suscipit mollitia? Eius, ratione maxime. Qui provident
                  debitis, doloribus nobis quis voluptatem maxime.
                </Card.Text>
                <Button variant="primary">Leggi di piu</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}