import React from "react"
import PropTypes from "prop-types"
import { Nav } from 'reactstrap'
import { Redirect } from 'react-router-dom'


class NewDeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                title: "",
                description: "",
                location: ""
            }
        }
    }

    onChange = (e) => {
        const{ form } = this.state
        const{ name, value } = e.target
        form[name] = value
        this.setState({form})
    }

    handleClick = () => {
        const{ form } = this.state
        this.props.handleNewPost(form)
    }

    render () {
        const{
            title,
            description,
            location,
        } = this.state
        const { success } = this.props
    return (
      <React.Fragment>
        {success && <Redirect to="/deed_feed" /> }
        <h1>Post Deed</h1>
        <div>
          <label>Title of Your Post</label>
          <input
            name="title"
            value={title}
            onChange = { this.onChange }
            type='text'
          />
        </div>
        <div>
          <label>Description of Your Deed</label>
          <input
            name="description"
            value={description}
            onChange = { this.onChange }
            type='text'
          />
        </div>
        <div>
          <label>Where did Your Deed Take Place?</label>
          <input
            name="location"
            value={location}
            onChange = { this.onChange }
            type='text'
          />
        </div>

        <button onClick={this.handleClick}>Post Deed</button>
      </React.Fragment>
    );
  }
}

export default NewDeed
