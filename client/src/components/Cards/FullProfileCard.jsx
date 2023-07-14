import { At } from 'react-bootstrap-icons'
import ProfileCardBody from '../Sections/ProfileCardBody'
import ChangeProfilePictureBtn from '../Buttons/ChangeProfilePictureBtn'
import ChangeProfilePictureForm from '../Forms/ChangeProfilePictureForm'


const ProfileCardFull = ({user, profile, title, type, canEdit}) => {
    let css
    switch (type) {
        case "user":
            css="user-profile-bg"
            break
        case "trainer":
            css="trainer-profile-bg"
            break
        case "dog":
            css="dog-profile-bg"
            break
    }

    let changeProfilePictureBtn
    if (canEdit) {
        changeProfilePictureBtn = <ChangeProfilePictureBtn />
    }

    let username
    profile.username ? username = `@${profile.username}` : username = ""
    return (
        <div>
            {/* Bootstrap profile card inspired by mdBootstrap */}
            <div className="container mt-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                            <div className="row g-0">
                                <div className={`col-md-4 ${css} text-center text-white full-profile-card-side-bar`}>
                                    {/* <img src={profile.avatar}
                                        alt="Avatar" className="img-fluid my-4 full-profile-card-avatar"/> */}
                                    <ChangeProfilePictureForm profileAvatar={profile.avatar}/>
                                    <h5>{profile.name} {profile.lastName}</h5>
                                    <p>{username}</p>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <div className="edit-profile-btn">
                                        </div>
                                        <ProfileCardBody 
                                            title={title} 
                                            profile={profile} 
                                            type={type} 
                                            canEdit={canEdit} 
                                        />
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