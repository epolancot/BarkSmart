import Unauthorized from '../../components/Unauthorized'
import { useParams, Link } from 'react-router-dom'
import { ChatLeftText, Plus, SendPlus, Trash3Fill } from 'react-bootstrap-icons'
import { Button, Modal } from "react-bootstrap"
import React, { useState, useEffect } from "react"
import MessageForm from '../../components/Forms/MessageForm'
import { GetDogsByOwnerId } from '../../services/DogServices'
import { GetUserMessages } from '../../services/MessageServices'
import ProfileListCard from '../../components/Cards/ProfileListCard'
import RegisterNewDog from '../../components/Buttons/RegisterNewDog'

const HomeUser = ({ user }) => {

    let { id } = useParams()
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [profiles, setProfiles] = useState([])
    const [userMessages, setUserMessages] = useState([])

    useEffect(() => {
        const getDogs = async () => {
            const response = await GetDogsByOwnerId(id)
            setProfiles(response)
        }

        const getMessages = async () => {
            const response = await GetUserMessages(user.username)
            setUserMessages(response)
        }

        getDogs()
        getMessages()
    }, [])


    const handleCloseMessageForm = () => setShowMessageForm(false);
    const handleShowMessageForm = () => setShowMessageForm(true);


    let cardTitle = "Your Dog"
    if (profiles.length > 1) {
        cardTitle = "Your Dogs"
    }

    return id ? (
        <div className="container">
            <div className="row my-2 mt-5">
                <div className="col-md-6 py-1">
                    <ProfileListCard profiles={profiles} cardTitle={cardTitle}/>
                    <div className="mt-2 center-text">
                        <RegisterNewDog modalTitle='Register New Dog' id={id} />
                    </div>
                </div>
                <div className="col-md-6 py-1">
                    <div className="card h-100">
                        <div className="card-header themed-card-header">
                            <h5><ChatLeftText /> Messages</h5>
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                            <button type="button" className="btn themed-btn"> New Message</button>
                        </div>
                </div>
            </div>
        </div>
    ) : (
        <Unauthorized />
    )
}

export default HomeUser