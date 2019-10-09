import React from "react"
import PropTypes from "prop-types"
import { Container, Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import ActiveStorageProvider from 'react-activestorage-provider'

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
    handleSubmit = (post) => {
        this.setState({post})
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
            <Container style={{background:'#58B4CC'}}>
                <Form>
                    <FormGroup>
                        <Label className='mt-4' style={{color:'white'}} for="title">Title of Your Post</Label>
                        <Input
                            onChange = {this.onChange}
                            value={this.state.form.title}
                            type="text"
                            name="title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label style={{color:'white'}} for="description">Description of Your Post</Label>
                        <Input
                            onChange = {this.onChange}
                            value={this.state.form.description}
                            type="text"
                            name="description"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label style={{color:'white'}} for="location">Location of Your Deed</Label>
                        <Input
                            onChange = {this.onChange}
                            value={this.state.form.location}
                            type="text"

                            name="location"
                        />
                    </FormGroup>
                </Form>
                <p style={{color:'white'}}>Upload Photo:</p>
                <ActiveStorageProvider
                  endpoint={{
                    path: `/posts/${postID}`,
                    model: 'Post',
                    attribute: 'image',
                    method: 'PUT',
                  }}
                  onSubmit={this.handleSubmit}
                  render={({ handleUpload, uploads, ready }) => (
                    <div>
                      <input
                        type="file"
                        disabled={!ready}
                        onChange={e => handleUpload(e.currentTarget.files)}
                      />

                      {uploads.map(upload => {
                        switch (upload.state) {
                          case 'waiting':
                            return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                          case 'uploading':
                            return (
                              <p key={upload.id}>
                                Uploading {upload.file.name}: {upload.progress}%
                              </p>
                            )
                          case 'error':
                            return (
                              <p key={upload.id}>
                                Error uploading {upload.file.name}: {upload.error}
                              </p>
                            )
                          case 'finished':
                            return (
                              <p key={upload.id}>Finished uploading {upload.file.name}</p>
                            )
                        }
                      })}
                    </div>
                  )}
                />

                <Button className='m-4' style={{color:"#58B4C"}} onClick={this.handleClick}>Save Changes</Button>
            </Container>
            {success && <Redirect to="/deed_feed" /> }
          </React.Fragment>
        );
    }
}

export default EditPost
