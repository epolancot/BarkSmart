import { useState, useEffect } from "react"
import FullProfileCard from '../../components/Cards/FullProfileCard'
import { GetProfile } from '../../services/ProfileServices'
import { useParams } from 'react-router-dom'

const Profile = ({ user }) => {
    const [profile, setProfile] = useState({})
    let { id } = useParams()

    const title = ''
    const type = user.accountType
    const css = ''

    useEffect(() => {
        const getProfileDetails = async () => {
            const response = await GetProfile(id, user.accountType)
            setProfile(response)
        }

        getProfileDetails()
    }, [])

    let canEdit
    if (user.id === id) {
        canEdit = true
    }



    return (
        <div className="container">
            <FullProfileCard 
                user={user} 
                profile={profile} 
                title={title}
                type={type} 
                canEdit={canEdit}
                dogs={(profile.dogs) ? profile.dogs : ""}
            />
        </div>
    )
}

export default Profile

