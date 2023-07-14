import { Button, Modal } from "react-bootstrap"
import UploadFile from '../Forms/UploadFile'
import { useState } from "react"
import { Tools } from 'react-bootstrap-icons'


const ChangeProfilePicture = ({ user, modalTitle, profileAvatar }) => {
    const [showUploadFileForm, setShowUploadFileForm] = useState(false);

    const profileId = "64a83b4f644026d54c63f174"
    const profileType = "dog"
    const formTitle = 'Select Picture'

    const handleCloseUploadFileForm = () => setShowUploadFileForm(false);
    const handleShowUploadFileForm = () => setShowUploadFileForm(true);


    return (
        <div>
            <div className="mb-3 d-flex justify-content-center">
            <div className="profile-image-text" onClick={handleShowUploadFileForm}>
                <Tools />
            </div>
            <img src={profileAvatar}
                alt="Avatar" 
                className="img-fluid my-4 full-profile-card-avatar"
                onClick={handleShowUploadFileForm}
            />
            </div>
            <Modal show={showUploadFileForm} onHide={handleCloseUploadFileForm}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UploadFile 
                        handleCloseUploadFileForm={handleCloseUploadFileForm}
                        formTitle = {formTitle}
                        profileType = {profileType}
                        profileId = {profileId}
                        />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUploadFileForm}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ChangeProfilePicture