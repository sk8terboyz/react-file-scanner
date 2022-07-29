import './IndexOutput.css'
import { Accordion } from 'react-bootstrap'

const IndexOutput = ({ indexData, fileData, searchWords }) => {

    return (
        <div>
            <div>
                <h5>Index Data Output</h5>
                {/* <p>Similarly, this needs to be broken up either by searched words or scrollable section so they don't take up too much space</p>
                <p>If I did break it up by words, I would probably make use of an accordion that only opens one at a time and closes all others.</p> */}
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>header</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {indexData.map(index => {
                                searchWords.map(word => {
                                    if(word === fileData[index]) {
                                        // move index value under accordion when word is found
                                    }
                                })
                                return (<li>{fileData[index]} {index}</li>);
                            })}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
           
            {/* <div>
                <ul>
                    {indexData.map(index => {
                        searchWords.map(word => {
                            if(word === fileData[index]) {
                                // move index value under accordion when word is found
                            }
                        })
                        return (<li>{fileData[index]} {index}</li>);
                    })}
                </ul>
            </div> */}
            
        </div>
    )
}

export default IndexOutput;