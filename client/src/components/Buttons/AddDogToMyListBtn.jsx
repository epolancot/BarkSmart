import { AddDog }from '../../services/TrainerServices'

const AddDogToMyListBtn = (user, profile) => {

    const handleClick = async () => {
        if(user) {
            try {
                await AddDog(user.user.id, user.profile._id)
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className="text-center mt-3">
            <button className="btn themed-btn" onClick={handleClick}>Follow</button>
        </div>
    )
}

export default AddDogToMyListBtn