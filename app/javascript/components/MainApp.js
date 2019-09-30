import React from "react"
import PropTypes from "prop-types"
import { Nav, NavLink, NavItem, Jumbotron } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Feed from './pages/Feed'


class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            deeds: [],
            logged_in: ""
        }

    }







    render () {
      const {

        logged_in,
        sign_in_route,
        sign_out_route
      } = this.props

    return (
      <React.Fragment>
        <Router>


          <Nav>
            {logged_in &&
            <NavItem>
                <NavLink href="/deed_feed">Deed Feed</NavLink>
            </NavItem>
            }
            {logged_in &&
            <NavItem>
                <NavLink href={sign_out_route}>Sign Out</NavLink>
            </NavItem>
            }
            {!logged_in &&
            <NavItem>
                <NavLink href={sign_in_route}>Sign In</NavLink>
            </NavItem>
            }
          </Nav>

          <Jumbotron>
            <h1>
                Human Kind
            </h1>
            <p>
                a site for sharing good deeds in your community and connecting with others to deed the needy
            </p>
          </Jumbotron>

          <Route
            exact
            path="/deed_feed"
            render={()=>{
                return(
                    <Feed />
                )
            }}

          />

        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
