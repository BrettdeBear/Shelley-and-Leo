import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navigation" >
            <ul>
                <li>
                    <NavLink className="navLink" activeClassName="activeLink" exact to='/' >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navLink" activeClassName="activeLink" exact to='/pricing'>
                        Pricing
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navLink" activeClassName="activeLink" exact to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
