import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

import { Card, Container, CardImg, CardTitle, CardText, CardBody, CardSubtitle, Row, Col, Media, Button} from 'reactstrap'
import LikeButton from '../component/LikeButton'
import { findUser, deletePost } from '../api'

export default class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userID: this.props.match.params.user_id,
            user: null
        }
    }

    handleDeletePost = (id) => {
        deletePost(id)
        .then(deletedDeed => {
            return findUser(this.state.userID)
        })
        .then(user=>{
            this.setState({user: user})
        })
    }

    componentDidMount(){
        findUser(this.state.userID)
        .then((foundUser) => {
            this.setState({user: foundUser})
        })
    }

    componentDidUpdate(prevProps) {
        const newUser = this.props.match.params.user_id
        if(prevProps.match.params.user_id != newUser ){
            findUser(newUser)
            .then((foundUser) => {
                this.setState({user: foundUser, userID: newUser})
            })
        }
        if(prevProps.posts!=this.props.posts){
            findUser(newUser)
            .then((foundUser) => {
                this.setState({user: foundUser, userID: newUser})
            })
        }

    }

    render(){

      let { current_user_id, handleLikePost, handleUnlikePost, current_user_username, current_user_bio } = this.props
      let { user, userID } = this.state
      if(this.state.user){
          console.log("user", user);

      }
      return (
        <React.Fragment>
            <Container className='p-4' style={{background:"#58B4CC"}}>
            {user &&
              <Row>

                    <Col sm="5">
                    <Media style={{border: '1.5px solid rgba(199, 187, 187, 0.5)', margin:'105px 10px 0px 20px', background: "#E6F9EC" }} >
                        <Media left href="#">
                          <Media object style={{width: 175, height: 200, borderRadius: 200/ 2, padding: 20}} src={`${user.avatar}`}/>
                        </Media>
                        <Media body style={{padding: 20}}>
                          <Media heading style={{textAlign: 'center'}}>
                            {user.username}
                          </Media>
                          {user.bio}
                        </Media>

                      </Media>

                      <center>
                      {user.id === current_user_id &&
                          <Button style={{background:'#58B4CC', color:'white', marginTop:'8px'}}>
                              <Link style={{color:'white'}} to={`/edit_user/${user.id}`}>Edit Bio
                              </Link>
                          </Button>
                      }
                      </center>

                    </Col>
                    <Col sm="7">

                        <h1 style={{ padding:20, textAlign: 'center', color:"white"}}>{user.username}'s Deeds </h1>

                      <div style={{height: '500px', overflow: 'auto'}}>
                        {user.posts.map((post) => {
                            return(
                                    <Card key={post.id}>
                                      <CardBody style={{background: "#E6F9EC"}}>
                                          <CardImg src={post.image_url}/>
                                          <CardTitle>{post.title}</CardTitle>

                                          <CardSubtitle>User: {post.username}</CardSubtitle>
                                          <CardSubtitle>Location: {post.location}</CardSubtitle>
                                          <CardText>Description: {post.description}</CardText>
                                          <LikeButton postID={post.id}
                                            handleClick={this.props.handleLikePost}
                                            unlikeHandleClick={this.props.handleUnlikePost}
                                          />
                                          <p> Likes: {post.likes} </p>

                                          {post.user_id === current_user_id &&
                                              <div>
                                                  <Button style={{background: "#58B4CC", marginRight:'2px'}}>
                                                      <Link style={{color: "white"}} to={`/edit_post/${post.id}`}>Edit Post
                                                      </Link>
                                                  </Button>
                                                  <Button style={{background: "#58B4CC", color: "white"}} onClick={() => window.confirm("Are you sure you wish to delete post?") && this.handleDeletePost(post.id)}>Delete Post
                                                  </Button>
                                              </div>
                                          }
                                      </CardBody>
                                  </Card>


                        )

                      }
                    )}
                    </div>
                </Col>
              </Row>
          }
          </Container>
        </React.Fragment>

      )
    }
}
