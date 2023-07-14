import { Button, Modal } from "react-bootstrap"
import DogRegistrationForm from '../Forms/DogRegistrationForm'
import React, { useState, useEffect } from "react"
import { Plus } from 'react-bootstrap-icons'

const RegisterNewDog = ({modalTitle, id}) => {
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
                    <DogRegistrationForm id={id} handleCloseRegistration={handleCloseRegistration} />
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