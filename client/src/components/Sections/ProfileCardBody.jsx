import EditProfileBtn from '../Buttons/EditProfileBtn'
import ProfileDogList from '../Sections/ProfileDogList'

const ProfileCardBody = ({ type, title, profile, canEdit}) => {
    let editProfileBtn
    if (canEdit) {
        editProfileBtn = <EditProfileBtn profile={profile}/>
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
                    <div className="row pt-1 text-center">
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
                    <p className="text-muted">{profile.age}</p>
                    <h6>Weight</h6>
                    <p className="text-muted">{profile.weight}</p>
                    <h6>Owner</h6>
                    <p className="text-muted">{profile.ownerName}</p>
                    <h6>Trainer</h6>
                    <p className="text-muted">{profile.trainerName}</p>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                        <p>{profile.bio}</p>
                    </div>
                    <div className="text-center">
                        {editProfileBtn}
                    </div>
                </div>
            )
    }
}

export default ProfileCardBody