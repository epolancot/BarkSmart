import Unauthorized from '../../components/Unauthorized'
import { useParams, Link } from 'react-router-dom'
import { ChatLeftText, Plus, SendPlus, Trash3Fill } from 'react-bootstrap-icons'
import { Button, Modal } from "react-bootstrap"
import React, { useState, useEffect } from "react"
import DogRegistrationForm from '../../components/Forms/DogRegistrationForm'
import MessageForm from '../../components/Forms/MessageForm'
import { GetDogsByOwnerId } from '../../services/DogServices'
import { GetUserMessages } from '../../services/MessageServices'
import SmallProfileCard from '../../components/Cards/SmallProfileCard'

const HomeUser = ({ user }) => {

    let { id } = useParams()
    const [showDogRegistrationForm, setShowDogRegistrationForm] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [userDogs, setUserDogs] = useState([])
    const [userMessages, setUserMessages] = useState([])

    useEffect(() => {
        const getDogs = async () => {
            const response = await GetDogsByOwnerId(id)
            setUserDogs(response)
        }

        const getMessages = async () => {
            const response = await GetUserMessages(user.username)
            setUserMessages(response)
        }

        getDogs()
        getMessages()
    }, [])

    const handleCloseRegistration = () => setShowDogRegistrationForm(false);
    const handleShowRegistration = () => setShowDogRegistrationForm(true);

    const handleCloseMessageForm = () => setShowMessageForm(false);
    const handleShowMessageForm = () => setShowMessageForm(true);


    let userDogsTitle = "Your Dog"
    if (userDogs.length > 1) {
        userDogsTitle = "Your Dogs"
    }

    console.log(userDogs)

    return id ? (
        <div className="container">
            <div className="row my-2 mt-5">
                <div className="col-md-6 py-1">
                    <div className="card">
                        <div className="card-header themed-card-header">
                            <h5><span className="paws-emoji-white">🐾</span> {userDogsTitle}</h5>
                        </div>
                                {userDogs.map((dog, id) => (
                                    <div key="id">
                                        <SmallProfileCard profile={dog} bg={'dog-gradient'}/>
                                    </div>
                                ))}
                        <hr />
                        <div className="mb-3 d-flex justify-content-center">
                            <button type="button" className="btn themed-btn" onClick={handleShowRegistration}><Plus /> Register New Dog</button>
                        </div>
                        {/* Register New Dog Modal */}
                        <Modal show={showDogRegistrationForm} onHide={handleCloseRegistration}>
                            <Modal.Header closeButton>
                                <Modal.Title>Register dog</Modal.Title>
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
                </div>
                <div className="col-md-6 py-1">
                    <div className="card h-100">
                        <div className="card-header themed-card-header">
                            <h5><ChatLeftText /> Messages</h5>
                        </div>
                        <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {userMessages.map((message, id) => (
                                <tr key={id}>
                                    <th>
                                    {message.sender}
                                    </th>
                                    <th>
                                    {message.recipient}
                                    </th>
                                    <th>
                                    {message.createdAt}
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                        <hr />
                        <div className="mb-3 d-flex justify-content-center">
                            <button type="button" className="btn themed-btn" onClick={handleShowMessageForm}><SendPlus /> New Message</button>
                        </div>
                        {/* New Message Modal */}
                        <Modal show={showMessageForm} onHide={handleCloseMessageForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>New Message</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <MessageForm user={user} handleCloseMessageForm={handleCloseMessageForm} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseMessageForm}>
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Unauthorized />
    )
}

export default HomeUser