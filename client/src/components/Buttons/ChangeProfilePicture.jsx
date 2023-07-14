import { Button, Modal } from "react-bootstrap"
import UploadFile from '../../components/Forms/UploadFile'
import { useState } from "react"
import { Image } from 'react-bootstrap-icons'


const ChangeProfilePicture = ({ user, modalTitle }) => {
    const [showUploadFileForm, setShowUploadFileForm] = useState(false);

    const profileId = "64a83b4f644026d54c63f174"
    const profileType = "dog"
    const formTitle = 'Select Picture'

    const handleCloseUploadFileForm = () => setShowUploadFileForm(false);
    const handleShowUploadFileForm = () => setShowUploadFileForm(true);


    return (
        <div>
            <div className="mb-3 d-flex justify-content-center">
                <button 
                    type="button" 
                    className="btn themed-btn" 
                    onClick={handleShowUploadFileForm}>
                        <Image /> Change Picture
                </button>
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