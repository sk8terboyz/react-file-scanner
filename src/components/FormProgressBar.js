import { ProgressBar } from "react-bootstrap"

const FormProgressBar = ({progress}) => {
    console.log(progress);
    if(progress > 0) {
        return (
            <ProgressBar now={progress} label={`${progress}%`} />
        )
    }
}

export default FormProgressBar