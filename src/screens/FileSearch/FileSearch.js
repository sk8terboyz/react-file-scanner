import './FileSearch.css';
import { Container, Row, Col } from "react-bootstrap"
import FileOutput from '../../components/FileOutput';
import Form from '../../components/Form';
import IndexOutput from '../../components/IndexOutput';
import { useState } from 'react';
import InfoModal from '../../components/InfoModal';

// react-responsive may be worth looking into
const FileSearch = () => {
    const [fileData, setFileData] = useState([]);
    const [indexData, setIndexData] = useState([]);
    const [searchWords, setSearchWords] = useState([]);
    const [show, setShow] = useState(false);
    const [modalBody, setModalBody] = useState("Be sure to fill in all options in the form.");
    return (
        <div className="FileSearch">
            <InfoModal show={show} setShow={setShow} modalBody={modalBody}/>
            <Container>
                <Row>
                    <h3 className="text-dark pageHeader">File Scanner</h3>
                </Row>
                <Row>
                    <Col>
                        <FileOutput fileData={fileData} indexData={indexData}/>
                    </Col>
                    <Col>
                        <Form setFileData={setFileData} setIndexData={setIndexData} setSearchWords={setSearchWords} setShowModal={setShow} setModalBody={setModalBody}/>
                    </Col>
                    <Col>
                        <IndexOutput indexData={indexData} fileData={fileData} searchWords={searchWords}/>
                    </Col>
                </Row>    
            </Container>            
        </div>
    )
}

export default FileSearch;