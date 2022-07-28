import './LandingPage.css';
import { Container, Row, Col } from "react-bootstrap"

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col><button className='btn btn-outline-dark'><a href="/fileSearch">Search File</a></button></Col>
                    <Col><h3>Second</h3></Col>
                </Row>    
            </Container>            
        </div>
    )
}

export default LandingPage;