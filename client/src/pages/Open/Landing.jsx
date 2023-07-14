import ChangeProfilePicture from '../../components/Buttons/ChangeProfilePicture'

const Landing = ({user}) => {
    return (
        <div className="container">
            <ChangeProfilePicture user={user} modalTitle={'Change Profile Picture'}/>
        </div>
    )
}

export default Landing