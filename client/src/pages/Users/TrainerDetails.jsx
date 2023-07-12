import FullProfileCard from '../../components/Cards/FullProfileCard'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetTrainer } from '../../services/TrainerServices'
import RequestServiceButton from '../../components/Buttons/RequestServiceButton'
import SendMessageButton from '../../components/Buttons/SendMessageButton'

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



    return (
        <div>
            <FullProfileCard user={user} profile={profile} title={"Trainer's information"}/>
            <SendMessageButton sender={user} recipient={profile.username} />
            <div className="mt-2">
                <RequestServiceButton trainerName={profile.name}/>
            </div>
        </div>

    )
}

export default TrainerDetails