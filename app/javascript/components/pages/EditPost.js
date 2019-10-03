import React from "react"
import PropTypes from "prop-types"
import { Container, Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'

import { findPost, editPost } from '../api'

class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postID: props.match.params.id,
            form:{
                title: "",
                description: "",
                location: ""
            }
        }
    }

    onChange = (e) => {
        const{ form } = this.state
        // const{ name, value } = e.target
        // form[name] = value
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleClick = () => {
        // const{ onClick } = this.props
        let id = this.state.postID
        const{ form } = this.state
        this.props.handleEditPost(id, form)
    }

    componentDidMount(){
        findPost(this.state.postID)
        .then((foundPost) => {
            this.setState({form: foundPost})
        })
    }

    render () {
        const{ postID, post } = this.state
        const{ success }=this.props

        return (
          <React.Fragment>
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="title">Title of Your Post</Label>
                        <Input
                            onChange = {this.onChange}
                            value={this.state.form.title}
                            type="text"
                            name="title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description of Your Post</Label>
                        <Input
                            onChange = {this.onChange}
                            value={this.state.form.description}
                            type="text"
                            name="description"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location of Your Deed</Label>
                        <Input
                            onChange = {this.onChange}
                            value={this.state.form.location}
                            type="text"

                            name="location"
                        />
                    </FormGroup>
                </Form>
                <Button onClick={this.handleClick}>Edit Post</Button>
            </Container>
            {success && <Redirect to="/deed_feed" /> }
          </React.Fragment>
        );
    }
}

export default EditPost
