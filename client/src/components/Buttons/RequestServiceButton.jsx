import { Button, Modal } from "react-bootstrap"
import { PersonAdd } from 'react-bootstrap-icons'
import RequestForm from '../../components/Forms/RequestForm'
import { useState, useEffect } from "react"

const RequestServiceButton = ({sender, recipient}) => {
    const [showRequestForm, setShowRequestForm] = useState(false);

    const handleCloseRequestForm = () => setShowRequestForm(false);
    const handleShowRequestForm = () => setShowRequestForm(true);

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <button 
                    type="button" 
                    className="btn themed-btn" 
                    onClick={handleShowRequestForm}>
                        <PersonAdd /> Request a Quote
                </button>
            </div>
            <Modal show={showRequestForm} onHide={handleCloseRequestForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Request Quote Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RequestForm sender={sender} recipient={recipient}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRequestForm}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RequestServiceButton