import React from "react";
import PropTypes from "prop-types";

import { Nav, NavLink, NavItem, Jumbotron, Card, CardImg, CardTitle, CardHeader, CardText, CardLink, CardBody, CardFooter, CardSubtitle, ListGroup, ListGroupFlush, ListGroupItem, Row, Col, Media} from 'reactstrap'

export default class Profile extends React.Component {
    render(){
      return (
           
         
    
    
<div> 

  
  <Media style={{border: '1.5px solid rgba(199, 187, 187, 0.5)'}}>
      <Media left href="#">
        <Media object style={{width: 175, height: 200, borderRadius: 200/ 2, padding: 20}} src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Generic placeholder image"/>
      </Media>
      <Media body style={{padding: 20}}>
        <Media heading style={{textAlign: 'center'}}>
          User Name 
        </Media>
        This is a little about me. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    
    <h2 style={{ padding: 20, textAlign: 'center'}}>Your Deeds </h2>
    
    
    </div>

   
                   
           
            
            )
    }
}