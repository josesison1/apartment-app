import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Apartments from './pages/Apartments'
import ShowListing from './pages/ShowListing'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.readApt()
  }

  readApt = () => {
    fetch("http://localhost:3000/apartments")
      .then(response => response.json())
      .then(aptArray => this.setState({ apartments: aptArray }))
      .catch(errors => console.log("Apartment read errors:", errors))

  }

  render() {
    let { apartments } = this.state
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartments" render={(props) => <Apartments apartments={apartments} />} />
            <Route path="/showlisting/:id" render={(props) => {
              let id = props.match.params.id
              let apt = apartments.find(apt => apt.id === +id)
              return <ShowListing apt={apt} />
            }} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
