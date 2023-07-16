import UploadFile from '../Forms/UploadFile'
import { Button, Modal } from "react-bootstrap"
import { Tools } from 'react-bootstrap-icons'
import { useState } from "react"

const ChangeProfilePictureBtn = ({ 
    user, 
    profileId, 
    profileType, 
    profileAvatar, 
    canEdit,
    avatar,
    setAvatar
    }) => { 

    const [showUploadFileForm, setShowUploadFileForm] = useState(false);
    const formTitle = 'Select Picture'

    const handleCloseUploadFileForm = () => setShowUploadFileForm(false);
    const handleShowUploadFileForm = () => setShowUploadFileForm(true);

    let showToolIcon, avatarBtn
    if (canEdit) {
        showToolIcon = <Tools
            className="profile-image-tool-icon"
            onClick={handleShowUploadFileForm}
        />
        avatarBtn = <img src={avatar}
            alt="Avatar"
            className="img-fluid my-4 full-profile-card-avatar"
            onClick={handleShowUploadFileForm}
        />
    } else {
        avatarBtn = <img src={profileAvatar}
        alt="Avatar"
        className="img-fluid my-4 full-profile-card-avatar"
    />
    }

    return (
        <div>
            <div className="mb-3 d-flex justify-content-center">
                {showToolIcon}
                {avatarBtn}
            </div>
            <Modal show={showUploadFileForm} onHide={handleCloseUploadFileForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UploadFile
                        user={user}
                        handleCloseUploadFileForm={handleCloseUploadFileForm}
                        formTitle={formTitle}
                        profileType={profileType}
                        profileId={profileId}
                        avatar={avatar}
                        setAvatar={setAvatar}

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