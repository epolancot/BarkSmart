import { Link } from 'react-router-dom'

const LandingFooter = ({user}) => {
    return user ? (
        <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; 2023 BarkSmart</p>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About</Link></li>
            </ul>
        </div>
    </div>
    ) : (
        <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; 2023 BarkSmart</p>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
                <li className="nav-item"><Link to="/trainer/login" className="nav-link px-2 text-muted">Trainers</Link></li>
            </ul>
        </div>
        </div>

    )
}

export default LandingFooter