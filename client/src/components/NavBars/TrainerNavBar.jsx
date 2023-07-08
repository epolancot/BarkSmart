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
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/search" className="nav-link" activeClassName="active">Link</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/profiles"className="nav-link"  activeClassName="active">Other</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
