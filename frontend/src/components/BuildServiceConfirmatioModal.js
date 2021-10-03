import { 
    Modal,
    Button
 } from 'reactstrap'

function BuildServiceConfirmationModal(props) {
        

    const handleClose = () => props.closeModalCallBackFn();
    const handleSubmit = () => props.submitCallBackFn()


    return(
        <div>
            <Modal show={props.state.showConfirmation} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{textAlign : 'left'}}>Thanks for submitting! Chunggkeys will be in touch with you shortly regarding your build!</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>

            <Button onClick={handleSubmit}>Submit</Button>
        </div>
        )
    
}

export default BuildServiceConfirmationModal