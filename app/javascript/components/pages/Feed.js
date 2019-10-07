import React from "react"
import PropTypes from "prop-types"
import { Nav, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import LikeButton from '../component/LikeButton'

class Feed extends React.Component {
  
    
    componentDidMount() {
        this.props.changeSuccess(false)
    }

   

    render () {
        const {
            posts,
            handleDeletePost,
            current_user_id,
            handleLikePost
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
                            {user like id === current_user_id &&
                                <div>
                                    <LikeButton postID={post.id} handleClick={this.props.handleLikePost}/>
                                </div>
                            }
                            {user like id !== current_user_id &&
                                <div>
                                    <LikeButton postID={post.id} handleClick={this.props.handleLikePost}/>
                                </div>
                            }
                               <LikeButton postID={post.id} handleClick={this.props.handleLikePost}/>
                           
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
