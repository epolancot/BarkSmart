import MessageForm from '../Forms/MessageForm'
import { Button, Modal } from "react-bootstrap"
import { useState } from "react"

const ReplyMsgBtn = ({message}) => {
    const [showMessageForm, setShowMessageForm] = useState(false);

    const handleCloseMessageForm = () => setShowMessageForm(false);
    const handleShowMessageForm = () => setShowMessageForm(true);

    let sender, recipient
    if (message) {

        sender = {
            id: message.recipientId,
            name: message.recipientName,
            type: message.recipientType,
            username: message.participants[1]
        }

        recipient = {
            id: message.senderId,
            name: message.senderName,
            type: message.senderType,
            username: message.participants[0]
        }

    }

    return (
        <div>
            <button className="btn themed-btn" onClick={handleShowMessageForm}>Reply</button>
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

export default ReplyMsgBtn