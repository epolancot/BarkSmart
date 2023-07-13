import Unauthorized from '../../components/Unauthorized'
import { useParams, Link } from 'react-router-dom'
import { Button, Modal } from "react-bootstrap"
import React, { useState, useEffect } from "react"
import MessageForm from '../../components/Forms/MessageForm'
import { GetDogsByOwnerId } from '../../services/DogServices'
import ProfileListCard from '../../components/Cards/ProfileListCard'
import RegisterNewDog from '../../components/Buttons/RegisterNewDog'

const HomeUser = ({ user }) => {

    let { id } = useParams()
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        const getDogs = async () => {
            const response = await GetDogsByOwnerId(id)
            setProfiles(response)
        }
        getDogs()
    }, [])


    let cardTitle = "Your Dog"
    if (profiles.length > 1) {
        cardTitle = "Your Dogs"
    }

    return (
        <div className="container mt-5">
            <ProfileListCard profiles={profiles} cardTitle={cardTitle} />
            <div className="mt-2 center-text">
                <RegisterNewDog modalTitle='Register New Dog' id={id} />
            </div>
        </div>
    ) 
}

export default HomeUser