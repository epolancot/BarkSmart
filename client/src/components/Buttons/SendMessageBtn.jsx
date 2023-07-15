import MessageForm from '../Forms/MessageForm'
import { Button, Modal } from "react-bootstrap"
import { SendPlus } from 'react-bootstrap-icons'
import { useState } from "react"


const SendMessageButton = ({sender, recipient}) => {
    const [showMessageForm, setShowMessageForm] = useState(false);

    const handleCloseMessageForm = () => setShowMessageForm(false);
    const handleShowMessageForm = () => setShowMessageForm(true);

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <button type="button" className="btn themed-btn" onClick={handleShowMessageForm}><SendPlus /> Send Message</button>
            </div>
            <Modal show={showMessageForm} onHide={handleCloseMessageForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Message Service Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MessageForm sender={sender} recipient={recipient} handleCloseMessageForm={handleCloseMessageForm} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMessageForm}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SendMessageButton