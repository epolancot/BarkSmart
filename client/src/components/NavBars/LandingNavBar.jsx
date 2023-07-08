import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg green-background navbar-dark">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">BarkSmart</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/sign-in" className="nav-link" activeClassName="active">Log In</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/search" className="nav-link" activeClassName="active">Sign up</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/profiles"className="nav-link"  activeClassName="active">Trainers</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
