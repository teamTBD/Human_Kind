import React from "react"
import PropTypes from "prop-types"
import { Nav, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet"
import { OpenStreetMapProvider } from 'leaflet-geosearch';


class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          lat: 32.5732878512982,
          lng: -117.107984521922,
          zoom: 12,
          markerLat: 0,
          markerLng: 0, 
          markerPosition: [0,0],
          markers: []
        }
        console.log(props.posts);
        
      }
    
    componentDidMount() {
        const { posts } = this.props
        this.props.changeSuccess(false)
        const provider = new OpenStreetMapProvider();
        posts.map((post)=>{
            provider.search({ query: post.location })
            .then((result) => { 
                this.setState({markerLat:result[0].y, markerLng:result[0].x})
                this.setState({markers: [...this.state.markers, [this.state.markerLat, this.state.markerLng]]})
            })
        })
    }

    componentDidUpdate(prevProps ) {
        const { posts } = this.props
        if(prevProps.posts != posts ){
        
            const provider = new OpenStreetMapProvider();
            posts.map((post)=>{
                provider.search({ query: post.location })
                .then((result) => {
                    this.setState({markerLat:result[0].y, markerLng:result[0].x})
                    this.setState({markers: [...this.state.markers, [this.state.markerLat, this.state.markerLng]]})
                })
            })
        }
    }
        
        
    render(){
        const position = [this.state.lat, this.state.lng]
        const { markers } = this.state
        const { posts, current_user_id } = this.props
        return (
        <React.Fragment>
            <LeafletMap center={position} zoom={this.state.zoom}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                
                {markers.map((marker ,index)=>{
                    return(
                        <Marker key= {index} position={marker} draggable={true}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>
                    ) 
                })}
                
            </LeafletMap>
            <h1>Deed Feed</h1>
            <div>
                
                {posts.map((post) => {
                    return(
                        <div key={post.id}>
                            {post.title}
                            {post.description}
                            {post.location}
                            {post.user_id === current_user_id &&
                                <div>
                                <Button>
                                    <Link to={`/edit_post/${post.id}`}>Edit Post
                                    </Link>
                                </Button>
                                <Button onClick={() => window.confirm("Are you sure you wish to delete post?") && this.props.handleDeletePost(post.id)}>Delete Post</Button>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
        );
  }
}


export default Feed
