const ProfileCardBody = ({type, title, profile}) => {
    if (type === "dog") {
        return (
            <div>
                <h6>{title}</h6>
                <hr className="mt-0 mb-4" />
                    <h6>Breed</h6>
                    <p className="text-muted">{profile.breed}</p>
                    <h6>Age</h6>
                    <p className="text-muted">{profile.age}</p>
                    <h6>Weight</h6>
                    <p className="text-muted">{profile.weight}</p>
                    <h6>Owner</h6>
                    <p className="text-muted">{profile.ownerName}</p>
                    <h6>Trainer</h6>
                    <p className="text-muted">{profile.trainerName}</p>

                <h6>Comments</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                    <p>{profile.bio}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h6>{title}</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                    <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{profile.email}</p>
                    </div>
                    <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">123 456 789</p>
                    </div>
                </div>
                <h6>Bio</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                    <p>{profile.bio}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                </div>
            </div>
        )
    }
}

export default ProfileCardBody