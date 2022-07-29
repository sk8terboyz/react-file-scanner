import './LandingPage.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col><button className='btn btn-outline-dark'><Link to="/fileSearch">File Searcher</Link></button></Col>
                    <Col><h3>Second</h3></Col>
                </Row>    
            </Container>            
        </div>
    )
}

export default LandingPage;