import FullProfileCard from '../../components/Cards/FullProfileCard'
import { GetDog } from '../../services/DogServices'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DogDetails = ({ user }) => {
    const [dogProfile, setDogProfile] = useState('')
    const [profileAvatarUpdate, setProfileAvatarUpdate] = useState(0)
    const [profileInfoUpdate, setProfileInfoUpdate] = useState(0)

    let { id } = useParams()

    useEffect(() => {
        const getDogProfile = async () => {
            const response = await GetDog(id)
            setDogProfile(response)
        }
        getDogProfile()
    }, [profileAvatarUpdate, profileInfoUpdate])

    let canEdit
    if (user.id === dogProfile.owner) {
        canEdit = true
    }

    return (
        <div>
            <FullProfileCard 
                user={user}
                profile={dogProfile} 
                title={`${dogProfile.name}'s information`}
                type="dog"
                css="dog-profile-bg"
                canEdit = {canEdit}
                profileAvatarUpdate = {profileAvatarUpdate}
                setProfileAvatarUpdate = {setProfileAvatarUpdate}
                profileInfoUpdate = {profileInfoUpdate}
                setProfileInfoUpdate = {setProfileInfoUpdate}
            />
        </div>
    )
}

export default DogDetails