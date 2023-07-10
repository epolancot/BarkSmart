import Unauthorized from '../components/Unauthorized'

const HomeUser = ({user}) => {

    return user ? (
        <div></div>
    ) : (
        <Unauthorized />
    )
}

export default HomeUser