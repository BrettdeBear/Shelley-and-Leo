import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navigation" >
            <ul>
                <li>
                    <NavLink exact to='/' >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/pricing'>
                        Pricing
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
