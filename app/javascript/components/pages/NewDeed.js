import React from "react"
import PropTypes from "prop-types"
import { Nav, Form, Container, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
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
    <Container className='p-4' style={{background:'#58B4CC'}}>
         <h1 className='pt-4' style={{textAlign:'center', color:'white'}}>Post Deed</h1>
         <center>
          <Form >
           <FormGroup style={{width:"50%", textAlign:'center'}}>

              <Label style={{color:'white'}}>Title of Your Post</Label>
                <Input
                  name="title"
                  value={title}
                  onChange = { this.onChange }
                  type='text'
                />
           </FormGroup>
          <FormGroup style={{width:"50%", textAlign:'center'}}>
              <Label style={{color:'white'}}>Where did Your Deed Take Place?</Label>
                <Input
                  name="location"
                  value={location}
                  onChange = { this.onChange }
                  type='text'
                />
          </FormGroup>
          <FormGroup style={{width:"50%", textAlign:'center'}}>
            <Label style={{color:'white'}}>Description of Your Deed</Label>
                <Input
                    type='text'
                    name="description"
                    value={description}
                    rows='3'
                    onChange = { this.onChange }
                />
          </FormGroup>
              <Button size="md" outline color="secondary" onClick={this.handleClick}>Post Deed</Button>
              {success && <Redirect to="/deed_feed" /> }
        </Form>
        </center>
    </Container>
  </React.Fragment>

    );
  }
}

export default NewDeed
