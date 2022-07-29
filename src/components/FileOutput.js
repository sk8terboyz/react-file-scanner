import './FileOutput.css'

const FileOutput = ({ fileData, indexData }) => {
    // console.log(fileData);
    return (
        <div>
            <div>
                <h5>File Data Output</h5>
                {/* <p>Preferrably I would like this to be within a scrollable section to prevent long files making the page absurdly long</p> */}
            </div>
            <div className='fileDataContainer'>
                <p>
                    { fileData.map(data => {
                        let match = false
                        indexData.map(index => {
                            if(data === fileData[index]) {
                                // set match to true when word is found
                                match = true;
                            }
                        });
                        if(match) {
                            return (<mark style={{backgroundColor: "rgba(227, 206, 18, 0.75)"}}>{data}</mark>)
                        } else {
                            return(data + " ")
                        }
                    }) }
                </p>
            </div>
        </div>

    )
}

export default FileOutput;