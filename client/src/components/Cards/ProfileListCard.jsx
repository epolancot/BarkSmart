import SmallProfileCard from './SmallProfileCard'
import { useNavigate } from 'react-router-dom'

const ProfileListCard = ({profiles, cardTitle}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/dog/id/${id}`)
    }

let noDogRegisteredMsg     
if (profiles.length === 0) {
    noDogRegisteredMsg = <div className="text-center mt-3"><i>No dog registered yet.</i></div>
}

    return (
        <div>
            <div className="card profile-list-card">
                <div className="card-header themed-card-header">
                    <h5><span className="paws-emoji-white">🐾</span> {cardTitle}</h5>
                </div>
                {noDogRegisteredMsg}
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