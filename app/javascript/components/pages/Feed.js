import React from "react"
import PropTypes from "prop-types"
import {Nav, Card, Container, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet"
import { OpenStreetMapProvider } from 'leaflet-geosearch';


class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          //hard-coded center of map
          lat: 32.5732878512982,
          lng: -117.107984521922,
          zoom: 12,
          //needs to be a number as an initial value
          markerLat: 0,
          markerLng: 0, 
          markerPosition: [0,0],
          markers: []
        }   
      }
    componentDidMount() {
        this.props.changeSuccess(false)
    }

    render () {
        const {
            posts,
            handleDeletePost,
            current_user_id
        } = this.props
    return (

      <React.Fragment>
        <h1>Deed Feed</h1>
        <Container>
            {posts.map((post) => {
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
                )
            })}
        </Container>
      </React.Fragment>
    );
  }
}
            
                        
          
       
                
                          
                    
       
        
       


export default Feed
