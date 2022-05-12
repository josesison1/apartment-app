import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <>
                <Nav className="navi">
                    <NavItem>
                        <NavLink to="/" className="nav-link" id="navlink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/Apartments" className="nav-link" id="navlink">View Available Apartments</NavLink>
                    </NavItem>
                </Nav>
            </>
        )
    }
}

export default Navigation