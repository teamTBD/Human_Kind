import React from "react"
import PropTypes from "prop-types"

import {Nav, Card, Container, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button, } from 'reactstrap'

import { Link } from 'react-router-dom'
import LikeButton from '../component/LikeButton'
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
          markers: []
        }
      }
    handleMarkers = () => {
        const { posts } = this.props
        const provider = new OpenStreetMapProvider();
        posts.map((post)=>{
            provider.search({ query: post.location })
            .then((result) => {
                let title = post.title
                let description = post.description
                let marker = {
                    location: [result[0].y, result[0].x],
                    title: title,
                    description: description
                }
                this.setState({markers: [...this.state.markers, marker ]})
            })
        })
      }
    //need this to load markers when switching between components
    componentDidMount() {
        this.props.changeSuccess(false)
        this.handleMarkers()
    }
    //used to load markers when the state of posts is changed
    componentDidUpdate(prevProps) {
        const { posts } = this.props
        if(prevProps.posts != posts ){
            //used to reset state to rerender component
            this.setState({markers: []})
            this.handleMarkers()

        }
    }

    render(){
        const position = [this.state.lat, this.state.lng]
        const { markers } = this.state
        const { posts, current_user_id, handleLikePost } = this.props
        return (
        <React.Fragment>
        <Container className='pt-3' style={{background:'#58B4CC'}}>
            <center><h1 className='p-3' style={{color:'white'}}>Deed Feed</h1></center>
            <LeafletMap center={position} zoom={this.state.zoom}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                {markers.map((marker ,index)=>{
                    return(
                        <Marker key= {index} position={marker.location} draggable={true}>
                            <Popup>
                                Title: {marker.title} <br/> Description: {marker.description}
                            </Popup>
                        </Marker>
                    )
                })}

            </LeafletMap>
            </Container>
            <Container style={{background:'#58B4CC'}} className='p-3'>

            <div>

                {posts.map((post) => {
                    return(

                        <div key={post.id} className='p-1'>
                         <Card className='p-1'>
                            <CardBody style={{background:"#E6F9EC"}}>
                            <center>
                                <CardImg src={post.image_url} style={{width:'350px'}}/>
                                <h3 >{post.title}{post.image_url}</h3>
                                <h4>User: {post.username}</h4>
                                <h4>Location: {post.location}</h4>
                                <h4>Description: {post.description}</h4>
                                {post.user_id === current_user_id &&
                                    <div>
                                        <Button>
                                            <Link style={{color:'#58B4CC'}} to={`/edit_post/${post.id}`}>Edit Post
                                            </Link>
                                        </Button>
                                        <Button style={{color:'#58B4CC'}} onClick={() => window.confirm("Are you sure you wish to delete post?") && this.props.handleDeletePost(post.id)}>Delete Post
                                        </Button>
                                    </div>
                                }
                            </center>
                            </CardBody>
                         </Card>


                        </div>
                    )
                })}
            </div>
            </Container>
        </React.Fragment>
    )}
}
export default Feed
