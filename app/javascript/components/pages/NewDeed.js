import React from "react"
import PropTypes from "prop-types"
import { Nav, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
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
      
    <React.Fragment >
      <Form style={{marginLeft:'25rem', marginRight:'25rem', textAlign:'center'}}>
       <FormGroup>
        <h1>Post Deed</h1>
          <Label>Title of Your Post</Label>
            <Input
              name="title"
              value={title}
              onChange = { this.onChange }
              type='text'
            />
       </FormGroup>
       <FormGroup>
          <Label>Description of Your Deed</Label>
            <Input
              name="description"
              value={description}
              onChange = { this.onChange }
              type='text'
              />
      </FormGroup>
      <FormGroup>
          <Label>Where did Your Deed Take Place?</Label>
            <Input
              name="location"
              value={location}
              onChange = { this.onChange }
              type='text'
            />
      </FormGroup>
          <Button onClick={this.handleClick}>Post Deed</Button>
          {success && <Redirect to="/deed_feed" /> }
    </Form>
  </React.Fragment>

      
        
        
        
        
       
        
       
      
    );
  }
}

export default NewDeed
