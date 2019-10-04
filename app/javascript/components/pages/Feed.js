import React from "react"
import PropTypes from "prop-types"
import { Nav, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet"


class Feed extends React.Component {
    constructor() {
        super()
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13
        }
      }
    componentDidMount() {
        this.props.changeSuccess(false)
    }


    render () {
        const {
            posts,
            handleDeletePost
        } = this.props
        const position = [this.state.lat, this.state.lng]
    return (
      <React.Fragment>
        <LeafletMap center={position} zoom={this.state.zoom}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} draggable={true}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </LeafletMap>
        <h1>Deed Feed</h1>
        <div>
            {posts.map((post) => {
                return(
                    <div key={post.id}>
                    <Link to={`/edit_post/${post.id}`}>{post.title}</Link>
                        {post.description}
                        {post.location}
                        <Button onClick={() => this.props.handleDeletePost(post.id)}>Delete Post</Button>
                    </div>
                )
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default Feed
