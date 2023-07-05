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
                    <NavLink className="brand" exact to="/">
                        <img src="https://github.com/BrettdeBear/Shelley-and-Leo/blob/main/IMG-9158.jpg?raw=true" style={{ width : 100 }}/>
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
