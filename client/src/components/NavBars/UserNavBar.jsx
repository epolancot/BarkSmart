import { Link, NavLink } from "react-router-dom";

const UserNavBar = ({ handleLogOut, user }) => {
    return (
        <nav className="navbar navbar-expand-lg themed-background navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BarkSmart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={`/user/home/${user.id}`} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Search
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to='/user/search/trainer' className="dropdown-item">Trainers</Link></li>
                                <li><Link to='/search-api' className="dropdown-item">Dog breeds</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/messages`} className="nav-link">Messages</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link to='/profile/view' className="dropdown-item">View</Link></li>
                                <li><Link to='/user/login' onClick={handleLogOut} className="dropdown-item">Log Out</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default UserNavBar
