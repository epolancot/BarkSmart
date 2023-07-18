import { DeleteProfile } from '../../services/ProfileServices'
import { useNavigate } from 'react-router-dom'

const DeleteProfileForm = ({ profile }) => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedProfile = await DeleteProfile(profile._id)
        navigate(`/user/home/${profile.owner._id}`)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="text-center mb-4">
                    Are you sure you want to delete <b>{profile.name}</b>'s' profile?
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-center">
                    <button
                        type="submit"
                        className="btn btn-danger btn-lg mt-2"
                    >Delete</button>
                </div>
            </form>
        </div>
    )
}

export default DeleteProfileForm