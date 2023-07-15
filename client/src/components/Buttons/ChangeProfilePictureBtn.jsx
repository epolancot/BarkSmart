import UploadFile from '../Forms/UploadFile'
import { Button, Modal } from "react-bootstrap"
import { Tools } from 'react-bootstrap-icons'
import { useState } from "react"



const ChangeProfilePictureBtn = ({ user, profileId, profileType, modalTitle, profileAvatar, canEdit}) => {
    const [showUploadFileForm, setShowUploadFileForm] = useState(false);
    const formTitle = 'Select Picture'

    const handleCloseUploadFileForm = () => setShowUploadFileForm(false);
    const handleShowUploadFileForm = () => setShowUploadFileForm(true);

    let showToolIcon
    if (canEdit) {
        showToolIcon = <Tools 
                            className="profile-image-tool-icon"
                            onClick={handleShowUploadFileForm}
                        />
    }

    return (
        <div>
            <div className="mb-3 d-flex justify-content-center">
            {showToolIcon}
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

export default ChangeProfilePictureBtn