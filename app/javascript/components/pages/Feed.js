import React from "react"
import PropTypes from "prop-types"
import { Nav } from 'reactstrap'
import { Link } from 'react-router-dom'


class Feed extends React.Component {

    render () {
        const {
            posts
        } = this.props
    return (
      <React.Fragment>
        <h1>Deed Feed</h1>
        <div>
            {posts.map((post) => {
                return(
                    <div key={post.id}>
                    <Link to={`/edit_post/${post.id}`}>{post.title}</Link>
                        {post.description}
                        {post.location}
                    </div>
                )
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default Feed
