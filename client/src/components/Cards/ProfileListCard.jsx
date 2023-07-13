import SmallProfileCard from './SmallProfileCard'
import { useNavigate } from 'react-router-dom'

const ProfileListCard = ({profiles, cardTitle}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/dog/id/${id}`)
    }

    return (
        <div>
            <div className="card">
                <div className="card-header themed-card-header">
                    <h5><span className="paws-emoji-white">🐾</span> {cardTitle}</h5>
                </div>
                <div className="mb-3 mt-3">
                {profiles.map((profile, id) => (
                    <div key={profile._id} className="d-flex justify-content-center mt-1" onClick={()=> handleClick(profile._id)}>
                        <SmallProfileCard profile={profile} css={'small-card dog-profile-bg'} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileListCard