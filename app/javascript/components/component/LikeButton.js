import React from "react"
import PropTypes from "prop-types"

class LikeButton extends React.Component {

  handleClick = () => {
      this.props.handleClick(this.props.postID)
  }
  
  render() {
      const label = 'like'
    return (
      <div className="customContainer">
        <button className="btn btn-primary" onClick={this.handleClick}>
          {label}</button>
      </div>
    );
  }
}

export default LikeButton