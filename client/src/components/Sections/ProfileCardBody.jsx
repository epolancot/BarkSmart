import EditProfileBtn from '../Buttons/EditProfileBtn'
import DeleteProfileBtn from '../Buttons/DeleteProfileBtn'
import ProfileDogList from '../Sections/ProfileDogList'
import AddDogToMyListBtn from '../Buttons/AddDogToMyListBtn'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProfileCardBody = ({ user, type, title, profile, canEdit, setDogProfile}) => {
    let editProfileBtn, deleteProfileBtn
    if (canEdit) {
        editProfileBtn = <EditProfileBtn profile={profile} setDogProfile={setDogProfile}/>
        deleteProfileBtn = <DeleteProfileBtn profile={profile} />
    }
    let AddToMyListBtn
    if (user.accountType === "trainer") {
        AddToMyListBtn = <AddDogToMyListBtn profile={profile} user={user}/>
    }

    let date,age, ownerId, ownerAvatar, birthday
    if (profile.dob) {
        date = new Date(profile.dob)
        date.setDate(date.getDate()+1)
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
                    <h6>{profile.name} {profile.lastName}</h6>
                    <hr className="mt-0 mb-4" />
                    <div>
                    </div>
                        <h6>City</h6>
                        <p className="text-muted">{profile.city}</p>
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
                    <hr className="mt-0 mb-4" />
                    <div className="text-center"><h4>{profile.city}</h4></div>
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
                    {AddToMyListBtn}
                    <div className="row pt-1">
                    <div className="col">
                    {editProfileBtn}
                    </div>
                    <div className="col">
                    {deleteProfileBtn}
                    </div>
                    </div>
                </div>
            )
    }
}

export default ProfileCardBody