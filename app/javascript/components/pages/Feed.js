import React from "react"
import PropTypes from "prop-types"
import { Nav, Button, ModalHeader, ModalBody, ModalFooter, Modal } from 'reactstrap'
import { Link } from 'react-router-dom'


class Feed extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
             modal: false
            };
            this.toggle = this.toggle.bind(this);
    }


toggle() {
    this.setState({
     modal: !this.state.modal
     });
    }


componentDidMount() {
    this.props.changeSuccess(false)
    }

render() {
    const {
        posts,
        handleDeletePost,
        current_user_id
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
                {post.user_id === current_user_id &&
                 <div>
            <Button>
                <Link to={`/edit_post/${post.id}`}>Edit Post
                </Link>
            </Button>
            <Button onClick={() => window.confirm("Are you sure you wish to delete post?") && this.props.handleDeletePost(post.id)}>Delete Post</Button>
            
            <Button color='primary' onClick={this.toggle}> Expand {this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                  {post.title}
                  {post.description}
                  {post.location}
                  </ModalBody>
                  <ModalFooter>
                    <Button color='info' onClick={this.toggle}>Visit Profile</Button>{' '}
                    <Button color='success' onClick={this.toggle}>Like</Button>
                  </ModalFooter>
                </Modal>
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
