import React, { Component } from 'react'
import { Card, CardTitle, CardImg, CardText, CardGroup, CardBody, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class ShowListing extends Component {
    render() {
        let { apt } = this.props
        return (
            <>
                <br /><br />
                <h2>{apt.street} {apt.city}, {apt.state} </h2>
                <CardGroup>
                    <Card key={apt.id}>
                        <CardImg
                            src={apt.image}
                            top
                            width="80%"
                            height="80%"
                        />
                        <CardBody>
                            <CardText
                                tag="h5">
                                <br />
                                Bedrooms: {apt.bedrooms}
                                <br />
                                Bathrooms: {apt.bathrooms}
                                <br />
                                Pets: {apt.pets}
                                <br />
                                Rent price: {apt.price}
                                <br />
                                Leasing Manager: {apt.manager}
                                <br />
                                Contact Email: {apt.email}
                                <br />
                                Price: {apt.price}
                                <br />
                                <br />
                                <NavLink to={`/apartments/${apt.id}`}>
                                    <Button active color="info" sz="lg">Back to Listings</Button>
                                </NavLink>
                            </CardText>
                        </CardBody>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

export default ShowListing