import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardText, CardBody, CardSubtitle, Row, Col, Media, Button} from 'reactstrap'

export default class Profile extends React.Component {
    render(){
      let { posts, current_user_id } = this.props
      return (   
        <div> 
          <Row>
            <Col sm="5">
            <Media style={{border: '1.5px solid rgba(199, 187, 187, 0.5)', margin:'10px'}}>
                <Media left href="#">
                  <Media object style={{width: 175, height: 200, borderRadius: 200/ 2, padding: 20}} src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Generic placeholder image"/>
                </Media>
                <Media body style={{padding: 20}}>
                  <Media heading style={{textAlign: 'center'}}>
                    User Name 
                  </Media>
                  This is a little about me. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </Col>
            <Col sm="7">
              <h2 id="deedTitle" style={{ padding: 20, textAlign: 'center'}}>Your Deeds</h2>
              <div style={{height: '500px', overflow: 'auto'}}>
                {posts.map((post) => {
                  {if(post.user_id === current_user_id){
                    return(
                      <div key={post.id}>
                            <Card>
                              <CardBody>
                                  <CardImg src={post.image_url}/>
                                  <CardTitle>{post.title}{post.image_url}</CardTitle>
                                  <CardSubtitle>{post.location}</CardSubtitle>
                                  <CardText>{post.description}</CardText>
                                  {post.user_id === current_user_id &&
                                      <div>
                                          <Button>
                                              <Link to={`/edit_post/${post.id}`}>Edit Post
                                              </Link>
                                          </Button>
                                          <Button onClick={() => window.confirm("Are you sure you wish to delete post?") && this.props.handleDeletePost(post.id)}>Delete Post
                                          </Button>
                                      </div>
                                  }
                              </CardBody>
                          </Card>
                      </div>
                    )}
                  }
                })}
              </div>
            </Col>
          </Row>
        </div>
      )
    }
}