import React from "react"
import PropTypes from "prop-types"
import { Nav, Button, ModalHeader, ModalBody, ModalFooter, Modal} from 'reactstrap'
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

    render () {
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
                            <Button color='primary' onClick={this.toggle}>{this.props.buttonLabel}</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                  <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
                                    <Button color='secondary' onClick={this.toggle}>Cancel</Button>
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
