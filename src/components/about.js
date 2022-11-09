import React from "react"
import Me from "../assets/Ben.jpg"
import {Container, Row, Col} from "reactstrap"
function About(){
    return(
        <>
        <Container>
            <Row>
                <Col lg={4}> <img className="mypic" src={Me} alt=""></img></Col>
                <Col lg={8}><h4 className="abouttext">Hi my name is Ben Abbott and I am a professional web designer. </h4></Col>
        
            </Row>
        </Container>
        
        </>
    )
}


export default About