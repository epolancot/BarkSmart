import RequestForm from '../Forms/RequestForm'
import { Button, Modal } from "react-bootstrap"
import { PersonAdd } from 'react-bootstrap-icons'
import { useState } from "react"

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
                        <PersonAdd /> Request Service
                </button>
            </div>
            <Modal show={showRequestForm} onHide={handleCloseRequestForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Request Training Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RequestForm sender={sender} recipient={recipient} handleCloseRequestForm={handleCloseRequestForm}/>
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