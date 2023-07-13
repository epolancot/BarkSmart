import { At } from 'react-bootstrap-icons'
const ProfileCardFull = ({user, profile, title, type, css}) => {
    let username
    profile.username ? username = `@${profile.username}` : username = ""
    return (
        <div>
            {/* Bootstrap profile card inspired from mdBootstrap */}
            <div className="container mt-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                            <div className="row g-0">
                                <div className={`col-md-4 ${css} text-center text-white full-profile-card-img-bg`}>
                                    <img src={profile.avatar}
                                        alt="Avatar" className="img-fluid my-5 full-profile-card-avatar"/>
                                    <h4>{profile.name} {profile.lastName}</h4>
                                    <p>{username}</p>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>{title}</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{profile.email    }</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardFull