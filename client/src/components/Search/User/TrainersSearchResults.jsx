import SmallProfileCard from '../../Cards/SmallProfileCard'
import { Link } from "react-router-dom";

const TrainerSearchResults = ({searchResults}) => {
    return (
        <div>
                {searchResults.map((trainer) => (
                <Link to={`/trainer/id/${trainer.id}`} className="link">
                <div key={trainer._id} className="mt-3">
                        <SmallProfileCard profile={trainer} css={'small-card trainer-profile-bg'} />
                </div>
                </Link>

            ))}
            
        </div>
    )
}

export default TrainerSearchResults