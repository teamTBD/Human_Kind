import React from "react";
import PropTypes from "prop-types";
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody} from 'reactstrap'
  
export default class AboutUs extends React.Component {
    render(){
        return (
            <div>
            <h1  style={{textAlign: 'center'}}>A Little About Us</h1>
                  <CardDeck style={{margin:'5px', marginBottom:'20px'}}>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                    </CardDeck>
                  
                <CardDeck style={{margin:'5px', marginBottom:'20px'}}>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
                    </CardDeck>
            
            
            </div>
            
            )
    }
}
