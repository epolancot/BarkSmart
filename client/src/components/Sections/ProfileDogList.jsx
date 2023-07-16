import { Link } from "react-router-dom";

const ProfileDogList = ({dogs}) => {
    return(
        <>
            {dogs.map((dog)=>(
                <div key={dog._id} className="container profile-dog-grid">
                    <div>
                        <Link to={`/dog/id/${dog._id}`}>
                            <img src={dog.avatar} className="small-box-avatar"/>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProfileDogList