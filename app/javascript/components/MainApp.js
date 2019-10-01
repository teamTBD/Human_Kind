import React from "react"
import PropTypes from "prop-types"
import { Nav, NavLink, NavItem, Jumbotron } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUserAstronaut, faHandsHelping, faParagraph, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faUserAstronaut, faHandsHelping, faParagraph,faThumbsUp);

import Feed from './pages/Feed'
import Profile from './pages/Profile'


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
                <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            }
          
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
                HUMAN_KIND
            </h1>
            <p>
                a site for sharing good deeds in your community and connecting with others to deed the needy.  Working together we can reach the stars
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
          
           <Route
            exact
            path="/profile"
            render={()=>{
                return(
                    <Profile />
                )
            }}

          />

        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
