import FullProfileCard from '../../components/Cards/FullProfileCard'
import RequestServiceButton from '../../components/Buttons/RequestServiceBtn'
import SendMessageButton from '../../components/Buttons/SendMessageBtn'
import { GetTrainer } from '../../services/TrainerServices'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'



const TrainerDetails = ({user}) => {
    const [profile, setProfile] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getTrainerProfile = async () => {
            const response = await GetTrainer(id)
            setProfile(response)
        }

        getTrainerProfile()
    }, [])

    const sender = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        type: user.accountType,
        dogs: user.dogs
    }

    const recipient = {
        id: profile._id,
        username: profile.username,
        name: profile.name,
        email: profile.email,
        type: profile.accountType
    }

    return (
        <div>
            <FullProfileCard 
                user={user}
                profile={profile} 
                title={`Trainer's information`}
                type="trainer"
                css="trainer-profile-bg"
            />
            <div className="trainer-profile-actions">
                <SendMessageButton sender={sender} recipient={recipient} />
                <div className="mt-2">
                <RequestServiceButton sender={sender} recipient={recipient}/>
                </div>
            </div>
        </div>

    )
}

export default TrainerDetails