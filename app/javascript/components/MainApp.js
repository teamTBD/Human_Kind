import React from "react"
import PropTypes from "prop-types"
import { Nav, NavLink, NavItem, Container, Jumbotron } from 'reactstrap'
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
        current_user_id
      } = this.props

      const {posts} = this.state

    return (
      <React.Fragment>
        <Router>
            <Container>
              <Nav style={{display:'flex', background:"#58B4CC", justifyContent:"space-around"}} className='ptb-2'>
                {logged_in &&
                <NavItem className='mt-2'>
                    <h3><Link to="/profile" style={{color:"white"}} >Profile</Link></h3>
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
                <h1>
                    Human Kind
                </h1>
                <p>
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
                    <Feed {...props} posts = {posts} changeSuccess={this.changeSuccess}
                    handleDeletePost={this.handleDeletePost}
                    current_user_id={current_user_id}/>
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
                    <Profile posts = {posts}
                    handleDeletePost={this.handleDeletePost}
                    current_user_id={current_user_id}/>
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
