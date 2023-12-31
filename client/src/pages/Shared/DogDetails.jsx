import FullProfileCard from '../../components/Cards/FullProfileCard'
import { GetDog } from '../../services/DogServices'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DogDetails = ({ user }) => {
    const [dogProfile, setDogProfile] = useState('')
    const [avatar, setAvatar] = useState('')

    let { id } = useParams()

    useEffect(() => {
        const getDogProfile = async () => {
            const response = await GetDog(id)
            setDogProfile(response)
            setAvatar(response.avatar)
        }
        getDogProfile()
    }, [avatar])


    let canEdit
    if (dogProfile){
        if (user.id === dogProfile.owner._id) {
            canEdit = true
        }
    }

    return (
        <div>
            <FullProfileCard 
                user={user}
                profile={dogProfile} 
                setDogProfile={setDogProfile}
                title={`${dogProfile.name}'s information`}
                type="dog"
                css="dog-profile-bg"
                canEdit = {canEdit}
                avatar={avatar}
                setAvatar={setAvatar}
            />
        </div>
    )
}

export default DogDetails