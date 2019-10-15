import React from "react"
import PropTypes from "prop-types"
import { Nav, NavLink, NavItem, Container, Jumbotron } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Feed from './pages/Feed'
import ImageSlider from './component/ImageSlider'
import Profile from './pages/Profile'
import Home from './pages/Home'
import NewDeed from './pages/NewDeed'
import EditPost from './pages/EditPost'
import EditBio from './pages/EditBio'
import AboutUs from './pages/AboutUs'
import LikeButton from './component/LikeButton'
import { getPosts, findUser, createPost, editPost, deletePost, likePost, unlikePost, editUser, getUsers } from './api'

class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            logged_in: "",
            success: false,
            users: []
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

    handleLikePost = (id) => {
        return likePost(id)
        .then(likedPost => {
            getPosts()
            .then(posts=>{
                this.setState({posts})
            })
        })
    }

    handleUnlikePost = (id) => {
        return unlikePost(id)
        .then(unlikedPost => {
            getPosts()
            .then(posts=>{
                this.setState({posts})
            })
        })
    }

    handleEditUser = (id, form) => {
        return editUser(id,form)
        .then(editedUser => {
            getUsers()
            .then(users=>{
                this.setState({users})
            })
            return editedUser
        })
    }

    componentDidMount() {
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
        sign_out_route,
        current_user_id,
        current_user_username
      } = this.props

      const {posts, users} = this.state

    return (
      <React.Fragment>
        <Router>
            <Container>
              <Nav style={{display:'flex', background:"#58B4CC", justifyContent:"space-around"}} className='ptb-2'>
                {logged_in &&
                <NavItem className='mt-2'>
                    <h3><Link to={`/profile/${current_user_id}`} style={{color:"white"}} >Profile</Link></h3>
                </NavItem>
                }

                {logged_in &&
                <NavItem className='mt-2'>
                    <h3><Link to="/AboutUs" style={{color:"white"}}>About Us</Link></h3>
                </NavItem>
                }

                {logged_in &&
                <NavItem className='mt-2'>
                    <h3><Link to="/deed_feed" style={{color:"white"}}>Deed Feed</Link></h3>
                </NavItem>
                }
                {logged_in &&
                <NavItem className='mt-2'>
                    <h3><Link to="/new_deed" style={{color:"white"}} >Post Deed</Link></h3>
                </NavItem>
                }

                {logged_in &&
                <NavItem className='mt-2'>
                    <a style={{color:"white"}} href={sign_out_route}><h3>Sign Out</h3></a>
                </NavItem>
                }
                {!logged_in &&
                <NavItem className='mt-2'>
                    <a style={{color:"white"}} href={sign_in_route}><h3>Sign In</h3></a>
                </NavItem>
                }
              </Nav>
          </Container>
          <Container>
              <Jumbotron style={{background:"#E6F9EC"}}>
              <center>
                <h1 style={{fontSize:"35px"}}>
                    Human_Kind
                </h1>
                <p style={{fontSize:"20px"}}>
                    a site for sharing good deeds in your community and connecting with others to deed the needy
                </p>
              </center>
              </Jumbotron>
          </Container>

          <Route exact path="/edit_post/:id" render={(props)=>{
                return(
                    <EditPost {...props}
                    posts = {posts} handleEditPost={this.handleEditPost} success={this.state.success}/>
                )
            }}
          />

          <Route exact path="/deed_feed" render={(props)=>{
                return(
                    <Feed
                        {...props}
                        posts = {posts}
                        changeSuccess={this.changeSuccess}
                        handleDeletePost={this.handleDeletePost}
                        current_user_id={current_user_id}
                        handleLikePost={this.handleLikePost}
                        handleUnlikePost={this.handleUnlikePost}
                    />
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

          <Route exact path="/" render={(props)=>{
                return(
                    <Home
                    />
                )
            }}
          />

           <Route exact path='/profile/:user_id' render={(props)=>{
                return(
                    <Profile
                    {...props}
                    handleLikePost={this.handleLikePost}
                    handleUnlikePost={this.handleUnlikePost}
                    posts = {posts}
                    handleDeletePost={this.handleDeletePost}
                    current_user_id={current_user_id}
                    current_user_username={current_user_username}/>
                )}}

          />

          <Route exact path="/edit_user/:id" render={(props)=>{
                return(
                    <EditBio {...props}
                    users = {users} handleEditUser={this.handleEditUser}
                    />
                )
            }}
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
