import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

import { Card, Container, CardImg, CardTitle, CardText, CardBody, CardSubtitle, Row, Col, Media, Button} from 'reactstrap'
import LikeButton from '../component/LikeButton'

export default class Profile extends React.Component {
    render(){
      let { posts, current_user_id, handleLikePost, handleUnlikePost, current_user_username } = this.props
      return (
        <React.Fragment>
            <Container className='p-4' style={{background:"#58B4CC"}}>
              <Row>
                <Col sm="5">
                <Media style={{border: '1.5px solid rgba(199, 187, 187, 0.5)', margin:'105px 10px 0px 20px', background: "#E6F9EC" }} >
                    <Media left href="#">
                      <Media object style={{width: 175, height: 200, borderRadius: 200/ 2, padding: 20}} src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Generic placeholder image"/>
                    </Media>
                    <Media body style={{padding: 20}}>
                      <Media heading style={{textAlign: 'center'}}>
                        {current_user_username}
                      </Media>
                      This is a little about me. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                  </Media>

                </Col>
                <Col sm="7">

                    <h1 style={{ padding:20, textAlign: 'center', color:"white"}}>User Deeds </h1>

                  <div style={{height: '500px', overflow: 'auto'}}>
                    {posts.map((post) => {
                      if(this.props.match.params.user_id == post.user_id){
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
                                              <Button style={{background: "#58B4CC", color: "white"}} onClick={() => window.confirm("Are you sure you wish to delete post?") && this.props.handleDeletePost(post.id)}>Delete Post
                                              </Button>
                                          </div>
                                      }
                                  </CardBody>
                              </Card>

                        )}
                      }
                    )}
                    </div>
                </Col>
              </Row>
          </Container>
        </React.Fragment>

      )
    }
}
