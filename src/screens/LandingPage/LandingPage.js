import './LandingPage.css';
import { Container, Row, Col } from "react-bootstrap"

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col>First</Col>
                    <Col>Second</Col>
                    <Col>Third</Col>
                </Row>    
            </Container>            
        </div>
    )
}

export default LandingPage;