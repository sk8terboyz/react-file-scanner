import './IndexOutput.css'
import { Accordion, Badge } from 'react-bootstrap'

const IndexOutput = ({ indexData, fileData, searchWords }) => {
    
    const wordCount = (word) => {
        let count = 0;
        indexData.map(index => {
            if(word === fileData[index]) {
                count++;
            }
            return count;
        })
        return count;
    }

    return (
        <div>
            <div>
                <h5>Index Data Output</h5>
            </div>
            <Accordion>
                {
                    searchWords.map((word, i) => {
                        return(
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header>{word} <Badge bg="info" className='wordBadge'>{wordCount(word)}</Badge> </Accordion.Header>
                                <Accordion.Body className='accordionBody'>
                                    <ul>
                                        {
                                        indexData.map(index => {
                                            if(word === fileData[index]) {
                                                return (<li>Word #{index+1}</li>)
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }) 
                }
            </Accordion>
        </div>
    )
}

export default IndexOutput;