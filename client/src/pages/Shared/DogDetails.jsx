import FullProfileCard from '../../components/Cards/FullProfileCard'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetDog } from '../../services/DogServices'

const DogDetails = ({ user }) => {
    const [dogProfile, setDogProfile] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getDogProfile = async () => {
            const response = await GetDog(id)
            setDogProfile(response)
        }

        getDogProfile()
    }, [])


    return (
        <div>
            <FullProfileCard 
                user={user}
                profile={dogProfile} 
                title={`${dogProfile.name}'s information`}
                type="dog"
                css="dog-profile-bg"
            />
        </div>
    )
}

export default DogDetails