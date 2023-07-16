import ProfileListCard from '../../components/Cards/ProfileListCard'
import RegisterNewDog from '../../components/Buttons/RegisterNewDogBtn'
import { GetDogsByOwnerId } from '../../services/DogServices'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react"

const HomeUser = ({ user }) => {

    let { id } = useParams()
    const [profiles, setProfiles] = useState([])
    const [dogListUpdate, setDogListUpdate] = useState(0)

    useEffect(() => {
        const getDogs = async () => {
            const response = await GetDogsByOwnerId(id)
            setProfiles(response)
        }
        getDogs()
    }, [dogListUpdate])

    let cardTitle = "Your Dog"
    if (profiles.length > 1) {
        cardTitle = "Your Dogs"
    }

    return (
        <div className="container mt-5">
            <ProfileListCard 
                profiles={profiles} 
                cardTitle={cardTitle} 
            />
            <div className="mt-2 center-text">
                <RegisterNewDog
                    modalTitle='Register New Dog'
                    id={id}
                    dogListUpdate={dogListUpdate}
                    setDogListUpdate={setDogListUpdate} 
                />
            </div>
        </div>
    )
}

export default HomeUser