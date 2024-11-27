import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import style from './main.module.css'
export function Main(){
    return(
        <Row className={[style.justify_center, style.align_center]}>
            <Col xs={6}>
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titolo del post</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. 
                    Hic architecto doloremque provident velit saepe unde officia,
                    ipsum suscipit mollitia? 
                    Eius, ratione maxime. 
                    Qui provident debitis, 
                    doloribus nobis quis voluptatem maxime.
                    </Card.Text>
                    <Button variant="primary">Leggi di piu</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

