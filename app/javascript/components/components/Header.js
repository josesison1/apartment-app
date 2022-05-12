import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        console.log("logged_in:", logged_in)
        console.log("current_user:", current_user)
        return (
            <>
                <div className="header">
                    <h1>Welcome to my Apartment Application!</h1>
                    <div className="headertext">
                        <p>Find your peace in San Diego. Inspired by the rustic charm of Tuscany and the coastal vibe of the fishing village that shares its name, this apartment community takes you on a journey across the ocean to a picturesque Italian paradise. Vivi la dolce vita surrounded by towering palms, cobblestone accents, and trickling fountains at Magic City.</p>
                    </div>
                    <Nav>
                        {!logged_in &&
                            <NavItem>
                                <a href={sign_in_route} class="nav-link">Sign In</a>
                            </NavItem>
                        }
                        {!logged_in &&
                            <NavItem>
                                <a href={new_user_route} class="nav-link">Sign Up</a>
                            </NavItem>
                        }
                        {logged_in &&
                            <NavItem>
                                <a href={sign_out_route} class="nav-link">Sign Out</a>
                            </NavItem>
                        }
                    </Nav>
                </div>
            </>
        )
    }
}
export default Header