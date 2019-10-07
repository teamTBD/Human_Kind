import React from "react"
import PropTypes from "prop-types"
import { Nav, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'
import { Link } from 'react-router-dom'


class Feed extends React.Component {

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
        
        
    <React.Fragment >
     <div style={{textAlign: 'center'}}>
      <h1>Deed Feed</h1>
       <ListGroup style={{marginLeft:'25rem', marginRight:'25rem', marginTop:'5rem', marginBottom:'5rem'}}>
            {posts.map((post) => {
                return(
                 <ListGroupItem> 
                  <div key={post.id}>
                    <ListGroupItemHeading>  {post.title} </ListGroupItemHeading>
                     <ListGroupItemText>  
                        {post.description}
                        {post.location}
                        {post.user_id === current_user_id &&
                           <div>
                             <Button outline color="info" size="sm">
                                <Link to={`/edit_post/${post.id}`}>Edit Post
                                </Link>
                             </Button>
                             <Button outline color="danger" size="sm" onClick={() => window.confirm("Are you sure you wish to delete post?") && this.props.handleDeletePost(post.id)}>Delete Post</Button>
                           </div> 
                            }
                     </ListGroupItemText>
                  </div>
                 </ListGroupItem>
                )
            })}
       </ListGroup>
      </div>
    </React.Fragment>
    );
  }
}
            
                        
          
       
                
                          
                    
       
        
       

export default Feed
