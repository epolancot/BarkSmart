import { Link, NavLink } from "react-router-dom";

const UserNavBar = ({ handleLogOut, user }) => {

    return (
        <nav className="navbar navbar-expand-lg themed-background navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    BarkSmart
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggler" 
                    aria-controls="navbarToggler" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={`/user/home/${user.id}`} className="nav-link">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                Search
                            </a>
                            <ul className="dropdown-menu themed-background">
                                <li>
                                    <Link to='/user/search/trainer' className="dropdown-item">
                                        <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                            Trainers
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="dropdown-item">
                                        <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                            Dog breeds
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/messages`} className="nav-link">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                    Messages
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                Profile
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end themed-background">
                                <li>
                                    <Link to={`/profile/view/${user.id}`} className="dropdown-item">
                                        <span data-bs-toggle="collapse" data-bs-target="#navbarToggler" >
                                            My Profile
                                        </span>
                                    </Link>
                                </li>
                                <li>
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

export default UserNavBar
