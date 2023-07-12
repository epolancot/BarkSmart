import SmallProfileCard from './SmallProfileCard'

const ProfileListCard = ({profiles, cardTitle}) => {
    return (
        <div>
            <div className="card">
                <div className="card-header themed-card-header">
                    <h5><span className="paws-emoji-white">🐾</span> {cardTitle}</h5>
                </div>
                <div className="mb-3 mt-3">
                {profiles.map((profile, id) => (
                    <div key={id} className="d-flex justify-content-center mt-1">
                        <SmallProfileCard profile={profile} css={'dog-small-card'} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileListCard