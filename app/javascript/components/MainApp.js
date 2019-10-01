import React from "react"
import PropTypes from "prop-types"
import { Nav, NavLink, NavItem, Jumbotron } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import Profile from './pages/Profile'
import NewDeed from './pages/NewDeed'


class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            logged_in: ""
        }
        this.getPosts()
    }

    getPosts = () => {
        fetch("/posts")
        .then(response => {
            return response.json()
        })
        .then( posts => {
            this.setState({posts})
        })
    }

    createPost = (attributes) => {
        return fetch("/posts", {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({post: attributes})
        })
        .then(response => {
            if(response.status === 201){
                this.getPosts()
            }
        })
    }

    editPost = (id, attributes) => {
        return fetch(`/posts/${id}`, {
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({post: attributes})
        })
        ).then(response =>{
            if(response.status === 200){
                let json = response.json()
                return json
            }
        })
    }

    render () {
      const {
        logged_in,
        sign_in_route,
        sign_out_route
      } = this.props

      const {posts} = this.state

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
                <NavLink href="/new_deed">Post Deed</NavLink>
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
            render={(props)=>{
                return(
                    <Feed
                        {...props}
                        posts = {posts}
                    />
                )
            }}
          />
          <Route
            exact
            path="/new_deed"
            render={(props)=>{
                return(
                    <NewDeed
                        {...props}
                        onClick={this.createPost}
                    />
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
