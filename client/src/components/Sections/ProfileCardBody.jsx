import EditProfileBtn from '../Buttons/EditProfileBtn'
import ProfileDogList from '../Sections/ProfileDogList'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProfileCardBody = ({ type, title, profile, canEdit, setDogProfile}) => {
    let editProfileBtn
    if (canEdit) {
        editProfileBtn = <EditProfileBtn profile={profile} setDogProfile={setDogProfile}/>
    }
    let date,age, ownerId, ownerAvatar, birthday
    if (profile.dob) {
        date = new Date(profile.dob)
        age = moment(date, "YYYYMMDD").fromNow(true)
        birthday = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate().toString()}`
        ownerId = profile.owner._id
        ownerAvatar = profile.owner.avatar
    }
    let dogSectionTitle, dogSection
    if (profile.dogs) {
        if (profile.dogs.length === 0){
            dogSection = "No dog registered yet."
        } else {
            if (profile.dogs.length > 1) {
                dogSectionTitle = "Dogs"
            } else {
                dogSectionTitle = "Dog"
            }

            dogSection = <ProfileDogList dogs={profile.dogs} />
        }
    }

    switch (type) {
        case "user":
            return (
                <div>
                    <h6>{title}</h6>
                    <hr className="mt-0 mb-4" />
                    <div>
                    </div>
                        <h6>Email</h6>
                        <p className="text-muted">{profile.email}</p>
                    <h6>{dogSectionTitle}</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="d-flex text-center">
                        {dogSection}
                    </div>
                    <div className="text-center mt-3">
                        {editProfileBtn}
                    </div>
                </div>
            )
        case "trainer":
            return (
                <div>
                    <h6>{title}</h6>
                    <div className="text-center">{profile.city}</div>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                        <p>{profile.bio}</p>
                    </div>
                    <hr className="mt-0 mb-4" />
                    <div className="text-center mt-3">
                        {editProfileBtn}
                    </div>
                </div>
            )
        case "dog":
            return (
                <div>
                    <h6>{title}</h6>
                    <hr className="mt-0 mb-4" />
                    <h6>Breed</h6>
                    <p className="text-muted">{profile.breed}</p>
                    <h6>Age</h6>
                    <p className="text-muted">{age}</p>
                    <h6>Birthday</h6>
                    <p className="text-muted">{birthday}</p>
                    <h6>Owner</h6>
                    <div>
                        <Link to={`/profile/view/${ownerId}`}>
                            <img src={ownerAvatar} className="small-box-avatar"/>
                        </Link>
                    </div>
                    <p className="text-muted">{profile.ownerName}</p>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                    </div>
                    <div className="text-center">
                        {editProfileBtn}
                    </div>
                </div>
            )
    }
}

export default ProfileCardBody