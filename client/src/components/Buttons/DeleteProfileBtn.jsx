import DeleteProfileForm from '../Forms/DeleteProfileForm'
import { Button, Modal } from "react-bootstrap"
import { useState } from "react"

const DeleteProfileBtn = ({ profile }) => {
    const [showDeleteProfileForm, setShowDeleteProfileForm] = useState(false);

    const handleCloseDeleteProfileForm = () => setShowDeleteProfileForm(false);
    const handleShowDeleteProfileForm = () => setShowDeleteProfileForm(true);
    return (
        <div>
            <button className="btn btn-danger delete-profile-btn" onClick={handleShowDeleteProfileForm}>Delete Profile</button>
            <Modal show={showDeleteProfileForm} onHide={handleCloseDeleteProfileForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DeleteProfileForm profile={profile} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteProfileForm}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default DeleteProfileBtn