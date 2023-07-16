import DogRegistrationForm from '../Forms/DogRegistrationForm'
import { Button, Modal } from "react-bootstrap"
import { Plus } from 'react-bootstrap-icons'
import { useState } from "react"



const RegisterNewDog = ({ modalTitle, id, dogListUpdate, setDogListUpdate }) => {
    const [showDogRegistrationForm, setShowDogRegistrationForm] = useState(false);
    const handleCloseRegistration = () => setShowDogRegistrationForm(false);
    const handleShowRegistration = () => setShowDogRegistrationForm(true);

    return (
        <div>
            <div className="mb-3 d-flex justify-content-center">
                <button type="button" className="btn themed-btn" onClick={handleShowRegistration}><Plus /> Register New Dog</button>
            </div>
            <Modal show={showDogRegistrationForm} onHide={handleCloseRegistration}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DogRegistrationForm
                        id={id}
                        handleCloseRegistration={handleCloseRegistration}
                        dogListUpdate={dogListUpdate}
                        setDogListUpdate={setDogListUpdate} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRegistration}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RegisterNewDog