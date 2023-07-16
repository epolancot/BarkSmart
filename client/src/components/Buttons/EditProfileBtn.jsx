import EditProfileForm from '../Forms/EditProfileForm'
import { Button, Modal } from "react-bootstrap"
import { useState } from "react"

const EditProfileBtn = ({ profile }) => {
    const [showEditProfileForm, setShowEditProfileForm] = useState(false);

    let formFields
    switch (profile.accountType) {
        case "user":
            formFields = {
                name: "",
                lastName: "",
                email: ""
            }
            if (profile.name) {
                formFields.name = profile.name
            }
            if (profile.lastName) {
                formFields.lastName = profile.lastName
            }
            if (profile.email) {
                formFields.email = profile.email
            }
            break
        case "trainer":
            formFields = {
                name: "",
                lastName: "",
                email: "",
                bio: "",
                city: ""
            }
            if (profile.name) {
                formFields.name = profile.name
            }
            if (profile.lastName) {
                formFields.lastName = profile.lastName
            }
            if (profile.email) {
                formFields.email = profile.email
            }
            if (profile.bio) {
                formFields.bio = profile.bio
            }
            if (profile.city) {
                formFields.city = profile.city
            }
            break
        case "dog":
            formFields = {
                name: "",
                breed: "",
                dob: "",
            }
            if (profile.name) {
                formFields.name = profile.name
            }
            if (profile.breed) {
                formFields.breed = profile.breed
            }
            if (profile.dob) {
                formFields.dob = profile.dob
            }
            break
    }


    const handleCloseEditProfileForm = () => setShowEditProfileForm(false);
    const handleShowEditProfileForm = () => setShowEditProfileForm(true);

    return (
        <div>
            <button className="btn themed-btn" onClick={handleShowEditProfileForm}>Edit Profile</button>
            <Modal show={showEditProfileForm} onHide={handleCloseEditProfileForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm profile={profile} formFields={formFields} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditProfileForm}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditProfileBtn