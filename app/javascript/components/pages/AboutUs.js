
import React from "react";
import PropTypes from "prop-types";
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Image} from 'reactstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const colorGithub = {
   color: '#333'
}

const colorLinkedin = {
   color: '#0077b5'
}

export default class AboutUs extends React.Component {
    render(){
        return (
            <div>
            <h1  style={{textAlign: 'center'}}>A Little About Us</h1>
                  <CardDeck style={{ textAlign:'center', margin:'5px', marginBottom:'20px'}}>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                        
                          <CardTitle>Brian Lin</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <a style={colorGithub} id="profile-link" class="btn btn-default" href="#" target="_blank"><i class="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                           <a style={colorLinkedin} class="btn btn-default" href="#" target="_blank"><i class="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                        
                          <CardTitle>Drew Yuri</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                           <a style={colorGithub} id="profile-link" class="btn btn-default" href="#" target="_blank"><i class="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                           <a style={colorLinkedin} class="btn btn-default" href="#" target="_blank"><i class="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                        
                          <CardTitle>Josh Steinbock</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                           <a style={colorGithub} id="profile-link" class="btn btn-default" href="#" target="_blank"><i class="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                           <a style={colorLinkedin} class="btn btn-default" href="#" target="_blank"><i class="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                        </CardBody>
                      </Card>
                    </CardDeck>
                  
                <CardDeck style={{textAlign:'center',margin:'5px', marginBottom:'20px'}}>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody >
                          <CardTitle>Juan Cardenas</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                          <a style={colorGithub} id="profile-link" class="btn btn-default" href="https://github.com/cardenas378" target="_blank"><i class="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                           <a style={colorLinkedin} class="btn btn-default" href="https://www.linkedin.com/in/juanpcardenas1/" target="_blank"><i class="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                          
                        
                          <CardTitle>Rob Osborn</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <a style={colorGithub} id="profile-link" class="btn btn-default" href="#" target="_blank"><i class="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                           <a style={colorLinkedin} class="btn btn-default" href="#" target="_blank"><i class="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                        
                          <CardTitle>Sebastian Becerra</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                           <a style={colorGithub} id="profile-link" class="btn btn-default" href="#" target="_blank"><i class="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                           <a style={colorLinkedin} class="btn btn-default" href="#" target="_blank"><i class="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                        </CardBody>
                      </Card>
                    </CardDeck>
            
                        
                        
            
            </div>
            
            )
    }
}

