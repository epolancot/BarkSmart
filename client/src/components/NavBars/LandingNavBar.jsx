import { Link, NavLink } from "react-router-dom";

const LandingNavBar = () => {
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
                            <NavLink to="/user/login" className="nav-link">
                                <div data-bs-toggle="collapse" data-bs-target="#navbarToggler" >Log In</div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user/register" className="nav-link">
                            <div data-bs-toggle="collapse" data-bs-target="#navbarToggler" >Sign up</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default LandingNavBar
