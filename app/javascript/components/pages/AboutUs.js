import React from "react";
import PropTypes from "prop-types";
import {Card, Button, CardImg, CardTitle, CardText, CardDeck, Container,
  CardSubtitle, CardBody, Image} from 'reactstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Drew from './Drew.jpg';
import Brian from './Brian.jpg';
import Josh from './Josh.jpg';
import Juan from './Juan.jpg';
import Rob from './Rob.jpg';
import Sebastian from './Sebastian.jpg';

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
                <Container className='p-4' style={{background:"#58B4CC"}}>
                <h1 className='p-3' style={{textAlign: 'center', color:'white', fontSize:"30px"}}>A Little About Us</h1>
                  <CardDeck style={{textAlign:'center', margin:'5px', marginBottom:'20px'}}>
                      <Card>
                        <CardImg top width="100%" src={Brian} />
                          <CardBody>
                            <CardTitle>Brian Lin</CardTitle>
                            <CardText style={{height: '125px', overflow: 'auto'}}>I am a software engineer in training at LEARN Academy, a full-stack bootcamp teaching JS, React and Rails. I come from a background of being pre-med with a degree in microbiology and minor in psychology. I have always had a fascination finding solutions to solve difficult problems that people deal with. After spending some time in the healthcare industry, I discovered that it wasn’t exactly what I want to do in the future and decided to look towards tech. However, I still have the same passion of being part of a team that uses our unique skillset to directly solve problems and have that make an impact on people.</CardText>
                              <a style={colorGithub} id="profile-link" className="btn btn-default" href="https://github.com/brianlin96" target="_blank"><i className="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                              <a style={colorLinkedin} className="btn btn-default" href="https://www.linkedin.com/in/hello-brian-lin/" target="_blank"><i className="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                          </CardBody>
                      </Card>

                      <Card>
                        <CardImg top width="100%" src={Drew} />
                          <CardBody>
                            <CardTitle>Drew Yuri</CardTitle>
                            <CardText style={{height: '125px', overflow: 'auto'}}>I am currently a software engineer in training a Learn Academy, in San Diego. Backed with 6+ years of customer service which helped me develop a perspective that I am eager to apply to programming. I am passionately seeking to enhance my skillset as a software engineer by bringing new problem solving techniques to the tech industry.</CardText>
                              <a style={colorGithub} id="profile-link" className="btn btn-default" href="https://github.com/drewwski" target="_blank"><i className="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                              <a style={colorLinkedin} className="btn btn-default" href="https://www.linkedin.com/in/andrewyuri/" target="_blank"><i className="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                          </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src={Josh} />
                          <CardBody>
                            <CardTitle>Josh Steinbock</CardTitle>
                            <CardText style={{height: '120px', overflow: 'auto'}}>A diversified management background with excellent leadership and communication.  An analytical thinker with a creative mind looking to make a footprint on the future of programming who is also actively seeking a worthy opponent in ping pong.</CardText>
                             <a style={colorGithub} id="profile-link" className="btn btn-default" href="https://github.com/Josh3845" target="_blank"><i className="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                             <a style={colorLinkedin} className="btn btn-default" href="https://www.linkedin.com/in/josh-steinbock/" target="_blank"><i className="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                          </CardBody>
                      </Card>
                    </CardDeck>

                <CardDeck style={{textAlign:'center',margin:'5px', marginBottom:'20px'}}>
                      <Card>
                        <CardImg top width="100%" src={Juan} />
                          <CardBody >
                            <CardTitle>Juan Cardenas</CardTitle>
                            <CardText style={{height: '125px', overflow: 'auto'}}>Hello! My name is Juan i am a  Web Developer with a passion for coding and problem solving. Backed by 5+ years of professional experience as a Project Manager and Crew Lead at large energy company. I look forward to expanding my knowledge and skills through my passion for building things. </CardText>
                            <a style={colorGithub} id="profile-link" className="btn btn-default" href="https://github.com/cardenas378" target="_blank"><i className="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                             <a style={colorLinkedin} className="btn btn-default" href="https://www.linkedin.com/in/juanpcardenas1/" target="_blank"><i className="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                          </CardBody>
                      </Card>

                      <Card>
                        <CardImg top width="100%" src={Rob} />
                          <CardBody>
                            <CardTitle>Rob Osborn</CardTitle>
                            <CardText style={{height: '125px', overflow: 'auto'}}>Hello there! My name is Rob, and I am a web developer based in San Diego. On a personal level, I am an outgoing and competitive person who loves to balance the hours in front of the screen with sports, outdoor activities, yoga, and artistic endeavors.

After a long time pondering a transition to the world of programming, I finally decided to give it a shot. It's been a joyful adventure reminiscent of learning a foreign language while living abroad. I learn new things each day while some things take several days to really understand. I love the challenge and appreciate the support from all the friendly individuals in the tech community.</CardText>
                              <a style={colorGithub} id="profile-link" className="btn btn-default" href="https://github.com/rosborn92" target="_blank"><i className="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                             <a style={colorLinkedin} className="btn btn-default" href="https://www.linkedin.com/in/rob-osborn/" target="_blank"><i className="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                          </CardBody>
                      </Card>

                      <Card>
                        <CardImg top width="100%" src={Sebastian} />
                          <CardBody>
                            <CardTitle>Sebastian Becerra</CardTitle>
                            <CardText style={{height: '125px', overflow: 'auto'}}>Coming from a background in Digital Marketing/Advertising, I was drawn to the world of programming thanks to a passion for Technology and a desire to develop a stronger skill set for my career. I am passionate the solutions Technology provides to our everyday problems and love digging into how a product looks, feels, and most importantly, works! Also, I’m Batman.</CardText>
                             <a style={colorGithub} id="profile-link" className="btn btn-default" href="https://github.com/smbecerra" target="_blank"><i className="fab fa-github" id = "Github"></i>Github <FaGithub /></a>
                             <a style={colorLinkedin} className="btn btn-default" href="https://www.linkedin.com/in/sebastian-miguel-becerra/" target="_blank"><i className="fab fa-linkedin" id = "LinkedIn"></i>LinkedIn <FaLinkedin /></a>
                          </CardBody>
                      </Card>
                    </CardDeck>
                    </Container>
            </div>

            )
    }
}
