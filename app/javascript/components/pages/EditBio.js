import React from "react"
import PropTypes from "prop-types"
import { Container, Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import ActiveStorageProvider from 'react-activestorage-provider'

import { findUser, editUser } from '../api'

class EditBio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: this.props.match.params.id,
            form:{
                bio: ""
            },
            user: null,
            profileSuccess: false
        }
    }
    handleSubmit = (bio) => {
        this.setState({bio})
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
        let id = this.state.userID
        const{ form } = this.state
        console.log(id);
        this.props.handleEditUser(id, form)
        .then((edit) => {
            this.setState({profileSuccess: true})
        })
    }

    componentDidMount(){
        findUser(this.state.userID)
        .then((foundUser) => {
            this.setState({user: foundUser})
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.users!= this.props.users){
            this.setState({profileSuccess: false})
            findUser(this.state.userID)
            .then((foundUser) => {
                this.setState({user: foundUser})
            })
        }
    }

    render () {
        const{ userID, bio, post, profileSuccess } = this.state
        return(
          <React.Fragment>
            <Container className='p-4' style={{background:'#58B4CC'}}>
            <center>
                <Form>
                    <FormGroup style={{width:'50%', textAlign:'center'}}>
                        <Label style={{color:'white'}} for="bio">Enter Your Bio Here</Label>
                        <Input
                            onChange = {this.onChange}
                            value={this.state.form.bio}
                            type="textarea"
                            rows='4'
                            name="bio"
                        />
                    </FormGroup>
                </Form>

                <p style={{color:'white'}}>Upload Photo:</p>
                <ActiveStorageProvider
                  endpoint={{
                    path: `/users/${userID}`,
                    model: 'User',
                    attribute: 'avatar',
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

                <Button className='m-4' style={{color:"#58B4C"}} onClick={this.handleClick} >Save Changes</Button>
                </center>
            </Container>
            {profileSuccess &&<Redirect to={`/profile/${userID}`} />}
          </React.Fragment>
        )
    }
}

export default EditBio
