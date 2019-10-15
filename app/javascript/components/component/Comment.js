import React from "react"
import PropTypes from "prop-types"

class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      iscommented: false
    }
    this.checkcomment()
  }

  handleClick = () => {
      this.props.handleClick(this.props.postID)
      .then(() => this.checkcomment())
  }

  check = () => {
    fetch(`/comments/find?post_id=${this.props.postID}`)
    .then((response) => {
      if (response.status === 200) {
        this.setState({iscommented: true})
      } else {
        this.setState({iscommented: false})
      }
    })
  }

  render() {
    return (
      <React.Fragment>
      {!this.state.iscommented &&
        <button onClick={this.handleClick}>comment
        </button>
      }
      {this.state.iscommentd &&
        <button onClick={this.uncommentHandleClick}>Uncomment
        </button>
      }
      </React.Fragment>
    );
  }
}

export default commentButton
