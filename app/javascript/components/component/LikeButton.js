import React from "react"
import PropTypes from "prop-types"

class LikeButton extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      isLiked: false
    }
    this.checkLike()
  }

  handleClick = () => {
      this.props.handleClick(this.props.postID)
      .then(() => this.checkLike())
  }
  
  checkLike = () => {
    fetch(`/likes/find?post_id=${this.props.postID}`)
    .then((response) => {
      if (response.status === 200) {
        this.setState({isLiked: true})
      } else {
        this.setState({isLiked: false})
      }
    })
  }
  
  render() {
    return (
      <React.Fragment>
      {!this.state.isLiked &&
        <button onClick={this.handleClick}>Like
        </button>
      }
      </React.Fragment>
    );
  }
}

export default LikeButton