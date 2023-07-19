import ProfileListCard from '../../components/Cards/ProfileListCard'
import { GetDogs } from '../../services/TrainerServices'
import { useState, useEffect } from "react"

const HomeTrainer = ({ user }) => {
    const [profiles, setProfiles] = useState([])


    if (user) {
        useEffect(() => {
            const getDogs = async () => {
                const response = await GetDogs(user.id)
                setProfiles(response)
            }
            getDogs()
        }, [])
    }

    let cardTitle = "Your Dog"
    if (profiles.length > 1) {
        cardTitle = "Your Dogs"
    }
    let dogList = []
    if (profiles.dogs) {
        dogList = profiles.dogs
    }

    return (
        <div className="container mt-5">
            <ProfileListCard
                profiles={dogList}
                cardTitle={cardTitle}
            />
        </div>
    )
}

export default HomeTrainer