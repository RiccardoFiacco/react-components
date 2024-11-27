import { Col, Container, Row } from "react-bootstrap";

export function Header(){
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Il mio blog</h1>
                </Col>
            </Row>
        </Container>
    )
}