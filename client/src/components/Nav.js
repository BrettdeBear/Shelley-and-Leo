import { NavLink } from "react-router-dom";

function Nav({element}) {
    return (
        <nav className="navigation" >
            <ul>
                <li>
                    <NavLink className="navLink" activeClassName="activeLink" exact to='/' >
                        {element} Home {element}
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navLink" activeClassName="activeLink" exact to='/pricing'>
                       {element} Pricing {element}
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navLink" activeClassName="activeLink" exact to='/contact'>
                        {element} Contact {element}
                    </NavLink>
                </li>
                <li>
                    <NavLink className="brand" exact to="/">
                        <img src="https://github.com/BrettdeBear/Shelley-and-Leo/blob/main/Screenshot%202023-07-05%20at%204.18.26%20PM.png?raw=true" style={{ width : 100 }}/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
