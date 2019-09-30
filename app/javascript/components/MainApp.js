import React from "react"
import PropTypes from "prop-types"
import { Nav, NavLink, NavItem } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Feed from './pages/Feed'


class MainApp extends React.Component {
    render () {
      const {
        logged_in,
        sign_in_route,
        sign_out_route
      } = this.props



    return (
      <React.Fragment>
        <Router>
          {logged_in &&
            <div>
              <a href={sign_out_route}>Sign Out</a>
            </div>
          }
          {!logged_in &&
            <div>
              <a href={sign_in_route}>Sign In</a>
            </div>
          }

          <Nav>
            <NavItem>
                <NavLink href="/deed_feed">Deed Feed</NavLink>
            </NavItem>
          </Nav>

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
