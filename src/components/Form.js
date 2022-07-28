import './Form.css'

const Form = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        let searchWords = e.target[1].value;
        console.log(searchWords);
    }

    return (
        <form className='fileForm' onSubmit={submitHandler}>
            <fieldset>
                <div className='form-group'>
                    <label for="textArea" className='form-label mt-4 explanation'>Enter letters/words/phrases to search for:</label>
                    {/* <p className='text-primary disclaimer'><a className='searchMoreInfo'>More Info</a></p> */}
                    <textarea className='form-control' id='textArea' rows="2"></textarea>
                </div>
                <legend className='mt-4'>Search Options</legend>
                <p className='text-info searchDisclaimer'>Only Words Currently</p>
                <div className='form-check disabled'>
                    <label className='form-check-label'>
                        <input type="radio" className='form-check-input' name="optionsRadios" id="optionsRadios1" value="option1"/>
                        Search for Letters
                    </label>
                </div>
                <div className='form-check'>
                    <label className='form-check-label'>
                        <input type="radio" className='form-check-input' name="optionsRadios" id="optionsRadios2" value="option2" />
                        Search for Words
                    </label>
                </div>
                {/* <div className='form-check disabled'>
                    <label className='form-check-label'>
                        <input type="radio" className='form-check-input' name="optionsRadios" id="optionsRadios3" value="option3"/>
                        Search for Phrases
                        </label>
                    </div> */}
                <fieldset>
                    <legend className='mt-4'>File Type</legend>
                    <p className='text-info serachDisclaimer'>Only .txt currently</p>
                    <div className='form-check form-switch'>
                        <label className='form-check-label' for="txtFlexSwitch">
                        <input className='form-check-input' type="checkbox" id="txtFlexSwitch" />
                        .txt
                        </label>
                    </div>
                    <div className='form-check form-switch'>
                        <label className='form-check-label' for="jsonFlexSwitch">
                        <input className='form-check-input' type="checkbox" id="jsonFlexSwitch" />
                        .json
                        </label>
                    </div>
                </fieldset>
                <div className='form-group'>
                    <legend className='mt-4'>Upload File</legend>
                    <p className='text-danger disclaimer'>Currently Cannot Read Uploaded Files</p>
                    <input className='form-control' type="file" id='formFile' />
                </div>
                <div className='submissionContainer'>
                    <label for="submitBtn" className='form-label text-primary mt-4'>Submit After All Options Selected</label>
                    <br />
                </div>
                <input type="submit" className='submission' id="submitBtn" value="Submit" />
            </fieldset>
        </form>
    )
}

export default Form;