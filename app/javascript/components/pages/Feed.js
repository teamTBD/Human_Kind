import React from "react"
import PropTypes from "prop-types"
import { Nav } from 'reactstrap'


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
                        {post.title}
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
