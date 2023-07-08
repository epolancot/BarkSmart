import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
                            <NavLink to="/sign-in" className="nav-link">Log In</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
