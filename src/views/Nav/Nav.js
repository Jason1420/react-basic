import React from "react";
import './Nav.scss'
import {
    Link,
    NavLink,
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink activeClassName="active" to="/" exact>Home</NavLink>
                <NavLink activeClassName="active" to="/todo" exact>Todos</NavLink>
                <NavLink activeClassName="active" to="/about" exact>About</NavLink>
                <NavLink activeClassName="active" to="/user" exact>User</NavLink>
            </div>
        )
    }
}

export default Nav;