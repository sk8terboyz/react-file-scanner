import './FileSearch.css';
import { Container, Row, Col } from "react-bootstrap"
import FileOutput from '../../components/FileOutput';
import Form from '../../components/Form';
import IndexOutput from '../../components/IndexOutput';
import { useState } from 'react';

// react-responsive may be worth looking into
const FileSearch = () => {
    const [fileData, setFileData] = useState([]);
    const [indexData, setIndexData] = useState([]);
    const [searchWords, setSearchWords] = useState([]);
    return (
        <div className="FileSearch">
            <Container>
                <Row>
                    <h3 className="text-dark pageHeader">File Searcher</h3>
                </Row>
                <Row>
                    <Col><FileOutput fileData={fileData} indexData={indexData}/></Col>
                    <Col><Form setFileData={setFileData} setIndexData={setIndexData} setSearchWords={setSearchWords}/></Col>
                    <Col><IndexOutput indexData={indexData} fileData={fileData} searchWords={searchWords}/></Col>
                </Row>    
            </Container>            
        </div>
    )
}

export default FileSearch;