import {Link} from 'react-router-dom'

const Unauthorized = () => {
    return (
        <div className="container text-center mt-5">
            <img className="unauthorized-image" src='https://i.imgur.com/ZoPl3QE.jpg'/>
            <div className="mt-3">
            <Link to="/login" className="link">Log in</Link>
            </div>
        </div>
    )
}

export default Unauthorized