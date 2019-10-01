import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import { Nav, NavLink, NavItem, Jumbotron, Card, CardImg, CardTitle, CardHeader, CardText, CardLink, CardBody, CardFooter, CardSubtitle, ListGroup, ListGroupFlush, ListGroupItem, } from 'reactstrap'


export default class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      deedRecord: 0,
    }
  }
  
   
  
    render(){
      
      
        return(
           
         
    
    
<div>  
    <Card>
          <CardHeader style={{color:"#D433FF"}} tag="h3">{this.state.deedRecord}{' '}<FontAwesomeIcon icon="hands-helping" color="#4FFF33" size="sm" /> {'  '}Deed Record</CardHeader>
          
          <CardBody>
            <CardTitle tag="h5" style={{color: "blue"}}><FontAwesomeIcon icon="user-astronaut" color="#B233FF" size="2x" spin="true" />{'   '}UserName</CardTitle>
            <CardSubtitle tag="h6" className="text-muted">Support card subtitle</CardSubtitle>
          </CardBody>
          
            
        <div className="card-img-top d-flex align-items-center bg-light">
          <CardImg className="rounded-circle" style={{width:"300px"}}src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
          
          
          <CardBody>
            <CardText style={{color: "#33FFF0"}} className="col p-2 m-0"><FontAwesomeIcon icon="paragraph" color="#D433FF" />Let other users know a bit about yourself and why your excited to help others and or your community<FontAwesomeIcon icon="paragraph" color="#D433FF" />
            </CardText>
          </CardBody>
        </div>
          
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          
          <CardBody>
            <CardLink href="#">Map</CardLink>
            <CardLink href="#">Calendar</CardLink>
          </CardBody>
          <CardFooter style={{color:"#33FFF0"}} className="text-bold text-centered">
          <FontAwesomeIcon icon="paragraph" color="#D433FF" size="2x" />A LIST OF ALL YOUR DEEDS<FontAwesomeIcon icon="paragraph" color="#D433FF" size="2x" />
          </CardFooter>
    
        
        <Card>
          <CardBody>
            <CardTitle tag="h4">Card title</CardTitle>
            <CardSubtitle tag="h6" className="text-muted">Card subtitle
            </CardSubtitle>
            <CardText tag="p">Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <CardLink href="#">Card link</CardLink>
            <CardLink href="#">Another link</CardLink>
            </CardBody>
        </Card>
    </Card>
</div>
   
                   
           
            
            )
    }
}