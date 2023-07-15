import SmallProfileCard from '../../Cards/SmallProfileCard'
import { Link } from "react-router-dom";

const DefaultResultsSection = ({trainersList}) => {
    return (
        <div>
            {trainersList.map((trainer) => (
                <div key={trainer._id} className="mt-3">
                    <Link to={`/trainer/id/${trainer._id}`} className="link">
                        <SmallProfileCard profile={trainer} css={'small-card trainer-profile-bg'} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default DefaultResultsSection