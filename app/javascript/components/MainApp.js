import React from "react"
import PropTypes from "prop-types"
import { Nav, NavLink, NavItem, Jumbotron } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Feed from './pages/Feed'
import Profile from './pages/Profile'
import NewDeed from './pages/NewDeed'
import EditPost from './pages/EditPost'
import AboutUs from './pages/AboutUs'
import { getPosts, createPost, editPost, deletePost } from './api'

class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            logged_in: "",
            success: false
        }
    }

    handleNewPost = (post) => {
        createPost(post)
        .then(deed => {
          this.setState({success: true})
          getPosts()
          .then(posts=>{
              this.setState({posts})
          })
      })
    }

    handleEditPost = (id, form) => {
        editPost(id,form)
        .then(editedDeed => {
            this.setState({success: true})
            getPosts()
            .then(posts=>{
                this.setState({posts})
            })
        })
    }

    handleDeletePost = (id) => {
        deletePost(id)
        .then(deletedDeed => {
            getPosts()
            .then(posts=>{
                this.setState({posts})
            })
        })
    }

    componentWillMount() {
        getPosts()
        .then( posts => {
            this.setState({posts})
        })
    }

    changeSuccess = (value) =>{
        this.setState({success: value})
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



          <Nav style={{display: 'flex', justifyContent:"space-around"}}>
            {logged_in &&
            <NavItem>

                <Link to="/profile">Profile</Link>
            </NavItem>
            }
            {logged_in &&
            <NavItem>
                <Link to="/AboutUs">About Us</Link>
            </NavItem>
            }

            {logged_in &&
            <NavItem>
                <Link to="/deed_feed">Deed Feed</Link>
            </NavItem>
            }
            {logged_in &&
            <NavItem>
                <Link to="/new_deed" style={{paddingTop: "4.64px", paddingBottom: "4.64px", paddingLeft: "9.28px", paddingRight: "9.28px"}}>Post Deed</Link>
            </NavItem>
            }
            {logged_in &&
            <NavItem>
                <a href={sign_out_route}>Sign Out</a>
            </NavItem>
            }
            {!logged_in &&
            <NavItem>
                <a href={sign_in_route}>Sign In</a>
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
          <Route exact path="/edit_post/:id" render={(props)=>{
                return(
                    <EditPost {...props}
                    posts = {posts} handleEditPost={this.handleEditPost} success={this.state.success}/>
                )
            }}
          />

          <Route exact path="/deed_feed" render={(props)=>{
              console.log(props);
                return(
                    <Feed {...props} posts = {posts} changeSuccess={this.changeSuccess}
                    handleDeletePost={this.handleDeletePost}/>
                )
            }}
          />
          <Route exact path="/new_deed" render={(props)=>{
                return(
                    <NewDeed
                        {...props} handleNewPost={this.handleNewPost} success={this.state.success}
                    />
                )
            }}
          />

           <Route exact path="/profile" render={()=>{
                return(
                    <Profile />
                )}}

          />
          
          <Route exact path="/AboutUs" render={()=>{
              return(
              <AboutUs/>
              )
          }}
          
          />

        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
