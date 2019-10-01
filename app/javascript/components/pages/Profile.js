import React from "react";
import PropTypes from "prop-types";

import { Nav, NavLink, NavItem, Jumbotron, Card, CardImg, CardTitle, CardHeader, CardText, CardLink, CardBody, CardFooter, CardSubtitle, ListGroup, ListGroupFlush, ListGroupItem, Row, Col, Media} from 'reactstrap'


export default class Profile extends React.Component {
    render(){
      return (
           
         
    
    
<div> 

     
  <Media>
      <Media left href="#">
        <Media object style={{width: 150, height: 175, borderRadius: 175/ 2, padding: 20}} src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="Generic placeholder image"/>
      </Media>
      <Media body style={{padding: 20}}>
        <Media heading style={{textAlign: 'center'}}>
          User Name 
        </Media>
        This is a little about me. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    </div>

   
                   
           
            
            )
    }
}