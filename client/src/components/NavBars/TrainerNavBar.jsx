import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user, handleLogOut }) => {
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
                            <NavLink to="/trainer/home" className="nav-link">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                View
                            </a>
                            <ul className="dropdown-menu themed-background dropdown-menu-end">
                                <li>
                                    <Link to='/messages' className="dropdown-item">
                                        <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                            Messages
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/trainer/requests' className="dropdown-item">
                                        <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                            Requests
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                            <ul className="dropdown-menu themed-background dropdown-menu-end">
                                <li>
                                    <Link to={`/profile/view/${user.id}`} className="dropdown-item">
                                        <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                            My Profile
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">   
                                    <Link to='/' onClick={handleLogOut} className="dropdown-item">
                                        <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                            Log Out
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
