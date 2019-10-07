import React from "react"
import PropTypes from "prop-types"

class LikeButton extends React.Component {

  handleClick = () => {
      this.props.handleClick(this.props.postID)
  }
  
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Like
        </button>
      </React.Fragment>
    );
  }
}

export default LikeButton