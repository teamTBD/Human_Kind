import React from "react"
import PropTypes from "prop-types"

import {Nav, Card, Container, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button, } from 'reactstrap'

import ImageSlider from '../component/ImageSlider'



class Home extends React.Component {
    render(){
        return (
            <React.Fragment>
                <ImageSlider/>
            </React.Fragment>
    )}
}
export default Home
