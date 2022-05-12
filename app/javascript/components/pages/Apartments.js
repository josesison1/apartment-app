import React, { Component } from 'react'
import { Card, CardTitle, CardGroup, CardImg, CardText, CardBody, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Apartments extends Component {
    render() {
        let { apartments } = this.props
        return (
            <>
                <h1>Apartment Listings</h1>
                <br />
                <CardGroup>
                    {apartments && apartments.map(apt => {
                        return <Card key={apt.id}>
                            <CardImg
                                src={apt.image}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h3">
                                    {apt.street}
                                    <br />
                                    {apt.city}, {apt.state}
                                </CardTitle >
                                <CardText
                                    tag="h6">
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
                                    <NavLink to={`/ShowListing/${apt.id}`}>
                                        <Button active color="info" sz="lg">Rent Now</Button>
                                    </NavLink>
                                </CardText>
                            </CardBody>
                        </Card>
                    })}
                </CardGroup>
            </>
        )
    }
}

export default Apartments