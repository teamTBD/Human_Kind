import React from "react"
import PropTypes from "prop-types"
import { Nav, Button } from 'reactstrap'
import { Link } from 'react-router-dom'


class Feed extends React.Component {
    componentDidMount() {
        this.props.changeSuccess(false)
    }

    render () {
        const {
            posts,
            handleDeletePost
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
