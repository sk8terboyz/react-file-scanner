import './FileSearch.css';
import { Container, Row, Col } from "react-bootstrap"
import FileOutput from '../../components/FileOutput';
import Form from '../../components/Form';
import IndexOutput from '../../components/IndexOutput';
import { useState } from 'react';
import InfoModal from '../../components/InfoModal';
import FormProgressBar from '../../components/FormProgressBar';

// react-responsive may be worth looking into
const FileSearch = () => {
    const [fileData, setFileData] = useState([]);
    const [indexData, setIndexData] = useState([]);
    const [searchWords, setSearchWords] = useState([]);
    const [show, setShow] = useState(false);
    const [modalBody, setModalBody] = useState("Be sure to fill in all options in the form.");
    // For progress bar (not working currently so reverted to what is here while I test it more)
    const [progress, setProgress] = useState(0);

    return (
        <div className="FileSearch">
            <InfoModal show={show} setShow={setShow} modalBody={modalBody}/>
            <Container>
                <Row>
                    <h3 className="text-dark pageHeader">File Scanner</h3>
                </Row>
                <FormProgressBar progress={progress} />
                <Row>
                    <Col xs={{ span: 12, order: 3}} sm={{ span: 12, order: 3}} lg={{span: 4, order: 1}}>
                        <FileOutput fileData={fileData} indexData={indexData}/>
                    </Col>
                    <Col xs={{ span: 12, order: 1}} sm={{ span: 12, order: 1}} lg={{span: 4, order: 2}}>
                        <Form setFileData={setFileData} setIndexData={setIndexData} setSearchWords={setSearchWords} setShowModal={setShow} setModalBody={setModalBody} setProgress={setProgress} />
                    </Col>
                    <Col xs={{ span: 12, order: 2}} sm={{ span: 12, order: 2}} lg={{span: 4, order: 3}}>
                        <IndexOutput indexData={indexData} fileData={fileData} searchWords={searchWords}/>
                    </Col>
                </Row>    
            </Container>            
        </div>
    )
}

export default FileSearch;