import './FileSearch.css';
import { Container, Row, Col } from "react-bootstrap"
import FileOutput from '../../components/FileOutput';
import Form from '../../components/Form';
import IndexOutput from '../../components/IndexOutput';

const FileSearch = () => {
    return (
        <div className="FileSearch">
            <Container>
                <Row>
                    <h3 className="text-dark pageHeader">File Searcher</h3>
                </Row>
                <Row>
                    <Col><FileOutput /></Col>
                    <Col><Form /></Col>
                    <Col><IndexOutput /></Col>
                </Row>    
            </Container>            
        </div>
    )
}

export default FileSearch;